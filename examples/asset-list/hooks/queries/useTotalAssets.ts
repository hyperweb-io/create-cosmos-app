import { Coin } from '@cosmjs/stargate';
import { useChain } from '@cosmos-kit/react';
import { UseQueryResult } from '@tanstack/react-query';
import BigNumber from 'bignumber.js';
import { useEffect, useMemo } from 'react';
import { useChainUtils } from '../useChainUtils';
import { usePrices } from './usePrices';
import { useQueryHooks } from './useQueryHooks';

(BigInt.prototype as any).toJSON = function () {
  return this.toString();
};

export const getPagination = (limit: bigint) => ({
  limit,
  key: new Uint8Array(),
  offset: 0n,
  countTotal: true,
  reverse: false,
});

export const useTotalAssets = (chainName: string) => {
  const { address } = useChain(chainName);

  const { cosmosQuery, isReady, isFetching } =
    useQueryHooks(chainName);

  const allBalancesQuery: UseQueryResult<Coin[]> =
    cosmosQuery.bank.v1beta1.useAllBalances({
      request: {
        address: address || '',
        pagination: getPagination(100n),
      },
      options: {
        enabled: isReady,
        select: ({ balances }) => balances || [],
      },
    });

  const delegationsQuery: UseQueryResult<(Coin | undefined)[]> =
    cosmosQuery.staking.v1beta1.useDelegatorDelegations({
      request: {
        delegatorAddr: address || '',
        pagination: getPagination(100n),
      },
      options: {
        enabled: isReady,
        select: ({ delegationResponses }) =>
          delegationResponses.map(({ balance }) => balance) || [],
      },
    });

  const pricesQuery = usePrices(chainName);

  const dataQueries = {
    prices: pricesQuery,
    allBalances: allBalancesQuery,
    delegations: delegationsQuery,
  };

  const queriesToReset = [dataQueries.allBalances, dataQueries.delegations];
  const queriesToRefetch = [dataQueries.allBalances];

  useEffect(() => {
    queriesToReset.forEach((query) => query.remove());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chainName]);

  const queries = Object.values(dataQueries);
  const isInitialFetching = queries.some(({ isFetching }) => isFetching);
  const isRefetching = queries.some(({ isRefetching }) => isRefetching);
  const isLoading = isFetching || isInitialFetching || isRefetching;

  type AllQueries = typeof dataQueries;

  type QueriesData = {
    [Key in keyof AllQueries]: NonNullable<AllQueries[Key]['data']>;
  };

  const { calcCoinDollarValue } = useChainUtils(chainName);

  const zero = new BigNumber(0);

  const data = useMemo(() => {
    if (isLoading) return;

    const queriesData = Object.fromEntries(
      Object.entries(dataQueries).map(([key, query]) => [key, query.data])
    ) as QueriesData;

    const {
      allBalances = [],
      delegations = [],
      // lockedCoins = [],
      // pools = [],
      prices = {},
    } = queriesData;

    const stakedTotal = delegations
      ?.map((coin) => calcCoinDollarValue(prices, coin as Coin))
      .reduce((total, cur) => total.plus(cur), zero)
      .toString();

    const balancesTotal = allBalances
      ?.filter(({ denom }) => !denom.startsWith('gamm') && prices[denom])
      .map((coin) => calcCoinDollarValue(prices, coin))
      .reduce((total, cur) => total.plus(cur), zero)
      .toString();

    let bondedTotal;
    let liquidityTotal;

    const total = [stakedTotal, balancesTotal, bondedTotal, liquidityTotal]
      .reduce((total, cur) => total.plus(cur || 0), zero)
      .decimalPlaces(2)
      .toString();

    return {
      total,
      prices,
      allBalances,
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  const refetch = () => {
    queriesToRefetch.forEach((query) => query.refetch());
  };

  return { data, isLoading, refetch };
};

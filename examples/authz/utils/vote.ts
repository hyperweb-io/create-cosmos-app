import dayjs from 'dayjs';
import BigNumber from 'bignumber.js';
import { Chain, Asset } from '@chain-registry/types';
import {
  Proposal,
  ProposalStatus,
} from 'interchain-query/cosmos/gov/v1beta1/gov';
import { getChainAssets } from './chain';

export function getChainLogo(chain: Chain) {
  return chain.logo_URIs?.svg || chain.logo_URIs?.png;
}

export function formatDate(date?: Date) {
  if (!date) return null;
  return dayjs(date).format('YYYY-MM-DD hh:mm:ss');
}

export function paginate(limit: bigint, reverse: boolean = false) {
  return {
    limit,
    reverse,
    key: new Uint8Array(),
    offset: 0n,
    countTotal: true,
  };
}

export function percent(num: number | string = 0, total: number, decimals = 2) {
  return total
    ? new BigNumber(num)
      .dividedBy(total)
      .multipliedBy(100)
      .decimalPlaces(decimals)
      .toNumber()
    : 0;
}

export const getCoin = (chainName: string) => {
  const chainAssets = getChainAssets(chainName);
  return chainAssets.assets[0] as Asset;
};

export const getExponent = (chainName: string) => {
  return getCoin(chainName).denom_units.find(
    (unit) => unit.denom === getCoin(chainName).display
  )?.exponent as number;
};

export const exponentiate = (num: number | string | undefined, exp: number) => {
  if (!num) return 0;
  return new BigNumber(num)
    .multipliedBy(new BigNumber(10).exponentiatedBy(exp))
    .toNumber();
};

export function decodeUint8Array(value?: Uint8Array) {
  return value ? new TextDecoder('utf-8').decode(value) : '';
}

export function getTitle(value?: Uint8Array) {
  return decodeUint8Array(value)
    .slice(0, 250)
    .match(/[A-Z][A-Za-z].*(?=\u0012)/)?.[0];
}

export function parseQuorum(value?: Uint8Array) {
  const quorum = decodeUint8Array(value);
  return new BigNumber(quorum).shiftedBy(-quorum.length).toNumber();
}

export function processProposals(proposals: Proposal[]) {
  const sorted = proposals.sort(
    (a, b) => Number(b.proposalId) - Number(a.proposalId)
  );

  proposals.forEach((proposal) => {
    // @ts-ignore
    if (!proposal.content?.title && proposal.content?.value) {
      // @ts-ignore
      proposal.content.title = getTitle(proposal.content?.value);
    }
  });

  return sorted
    .filter(
      ({ status }) => status === ProposalStatus.PROPOSAL_STATUS_VOTING_PERIOD
    )
    .concat(
      sorted.filter(
        ({ status }) => status !== ProposalStatus.PROPOSAL_STATUS_VOTING_PERIOD
      )
    );
}

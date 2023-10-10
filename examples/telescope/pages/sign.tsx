import { useState } from 'react';
import Head from 'next/head';
import { useChain } from '@cosmos-kit/react';
import { StdFee } from '@cosmjs/amino';
import { SigningStargateClient } from '@cosmjs/stargate';
import { Tendermint34Client } from '@cosmjs/tendermint-rpc';
import BigNumber from 'bignumber.js';

import {
  Box,
  Button,
  Center,
  Container,
  Divider,
  Flex,
  Grid,
  Heading,
  Icon,
  Link,
  Stack,
  Text,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';
import {
  chainassets,
  chainName,
  coin,
  dependencies,
  products,
} from '../config';

import { WalletStatus } from '@cosmos-kit/core';
import {
  Dependency,
  handleChangeColorModeValue,
  Product,
  WalletSection,
} from '../components';
import { SendTokensCard } from '../components/react/send-tokens-card';

import { cosmos, createRpcQueryHooks, getRpcClient } from '../src/codegen';
import { useRpcClient, useRpcEndpoint } from '../src/codegen';
import { QueryValidatorsRequest } from '../src/codegen/cosmos/staking/v1beta1/query';
import { TxRaw } from '../src/codegen/cosmos/tx/v1beta1/tx';

const library = {
  title: 'Telescope',
  text: 'telescope',
  href: 'https://github.com/cosmology-tech/telescope',
};

const sendTokens = (
  getWebClient: () => any,
  getSigningStargateClient: () => Promise<SigningStargateClient>,
  setResp: (resp: string) => any,
  address: string
) => {
  return async () => {
    const webClient = await getWebClient();
    const stargateClient = await getSigningStargateClient();
    if (!stargateClient || !address) {
      console.error('stargateClient undefined or address undefined.');
      return;
    }

    const { send } = cosmos.bank.v1beta1.MessageComposer.withTypeUrl;

    const msg = send({
      amount: [
        {
          denom: coin.base,
          amount: '1000',
        },
      ],
      toAddress: address,
      fromAddress: address,
    });

    const fee: StdFee = {
      amount: [
        {
          denom: coin.base,
          amount: '2000',
        },
      ],
      gas: '86364',
    };

    // fetch account data
    // const account = await new cosmos.auth.v1beta1.QueryClientImpl(
    //   webClient
    // ).account({
    //   address,
    // });

    // console.log(account);

    // const baseAccount =
    //   account.account as import('../src/codegen/cosmos/auth/v1beta1/auth').BaseAccount;
    // const signerData = {
    //   accountNumber: Number(baseAccount.accountNumber),
    //   sequence: Number(baseAccount.sequence),
    //   chainId: 'osmosis-1',
    // };
    // console.log('address:', address, 'sequence:', Number(baseAccount.sequence));

    const signed_tx = await stargateClient.sign(
      address,
      [msg],
      fee,
      'test tm client'
    );
    console.log(signed_tx);

    const txRawBytes = Uint8Array.from(TxRaw.encode(signed_tx).finish());
    const txResponse = await new cosmos.tx.v1beta1.ServiceClientImpl(
      webClient
    ).broadcastTx({
      txBytes: txRawBytes,
      mode: cosmos.tx.v1beta1.BroadcastMode.BROADCAST_MODE_SYNC,
    });

    const response = setResp(JSON.stringify(txResponse, null, 2));
  };
};

// Get the display exponent
// we can get the exponent from chain registry asset denom_units
const COIN_DISPLAY_EXPONENT = coin.denom_units.find(
  (unit) => unit.denom === coin.display
)?.exponent as number;

const getWebClient = async () => {
  const rpcEndpoint = 'https://rpc-juno.whispernode.com:443';

  const rpcClient = await getRpcClient(rpcEndpoint);

  return rpcClient;
};

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();

  const { getSigningStargateClient, address, status, getRpcEndpoint } =
    useChain(chainName);

  const [resp, setResp] = useState('');

  // const {
  //   data: rpcEndpoint
  // } = useRpcEndpoint({
  //   //@ts-ignore
  //   getter: getRpcEndpoint
  // });

  const rpcEndpoint = 'https://rpc-juno.whispernode.com:443';

  const { data: rpcClient } = useRpcClient({
    rpcEndpoint,
    options: {
      enabled: !!rpcEndpoint,
    },
  });

  console.log({
    rpcEndpoint,
    rpcClient,
  });

  //@ts-ignore
  // const hooks = cosmos.ClientFactory.createRPCQueryHooks({ rpc: rpcClient })
  const hooks = createRpcQueryHooks({ rpc: rpcClient });

  const {
    data: balance,
    isSuccess: isBalanceLoaded,
    isLoading: isFetchingBalance,
    refetch: refetchBalance,
  } = hooks.useBalance({
    request: {
      address: address || '',
      denom: chainassets?.assets[0].base as string,
    },
    options: {
      enabled: !!address && !!rpcClient,
      // transform the returned balance into a BigNumber
      select: ({ balance }) =>
        new BigNumber(balance?.amount ?? 0).multipliedBy(
          10 ** -COIN_DISPLAY_EXPONENT
        ),
    },
  });

  console.log(
    JSON.stringify(
      {
        address,
        balance,
        isBalanceLoaded,
        isFetchingBalance,
        refetchBalance,
      },
      null,
      2
    )
  );

  return (
    <Container maxW="5xl" py={10}>
      <Head>
        <title>Create Cosmos App</title>
        <meta name="description" content="Generated by create cosmos app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex justifyContent="end" mb={4}>
        <Button variant="outline" px={0} onClick={toggleColorMode}>
          <Icon as={useColorModeValue(BsFillMoonStarsFill, BsFillSunFill)} />
        </Button>
      </Flex>
      <Box textAlign="center">
        <Heading
          as="h1"
          fontSize={{ base: '3xl', md: '5xl' }}
          fontWeight="extrabold"
          mb={3}
        >
          Create Cosmos App
        </Heading>
        <Heading
          as="h1"
          fontWeight="bold"
          fontSize={{ base: '2xl', md: '4xl' }}
        >
          <Text as="span">Welcome to&nbsp;</Text>
          <Text
            as="span"
            color={handleChangeColorModeValue(
              colorMode,
              'primary.500',
              'primary.200'
            )}
          >
            CosmosKit&nbsp;+&nbsp;Next.js&nbsp;+&nbsp;
            <Link href={library.href} target="_blank" rel="noreferrer">
              {library.title}
            </Link>
          </Text>
        </Heading>
      </Box>

      <WalletSection />

      <Center mb={16}>
        <SendTokensCard
          isConnectWallet={status === WalletStatus.Connected}
          balance={isBalanceLoaded ? balance.toNumber() : 0}
          isFetchingBalance={isFetchingBalance}
          response={resp}
          sendTokensButtonText="Send Tokens"
          handleClickSendTokens={sendTokens(
            getWebClient,
            getSigningStargateClient as () => Promise<SigningStargateClient>,
            setResp as () => any,
            address as string
          )}
          handleClickGetBalance={refetchBalance}
        />
      </Center>

      <Box mb={16}>
        <Divider />
      </Box>
      <Grid
        templateColumns={{
          md: 'repeat(2, 1fr)',
          lg: 'repeat(3, 1fr)',
        }}
        gap={8}
        mb={14}
      >
        {products.map((product) => (
          <Product key={product.title} {...product} />
        ))}
      </Grid>
      <Grid templateColumns={{ md: 'repeat(3, 1fr)' }} gap={8} mb={20}>
        <Dependency {...library} />
        {dependencies.map((dependency) => (
          <Dependency key={dependency.title} {...dependency} />
        ))}
      </Grid>

      <Box mb={3}>
        <Divider />
      </Box>
      <Stack
        isInline={true}
        spacing={1}
        justifyContent="center"
        opacity={0.5}
        fontSize="sm"
      >
        <Text>Built with</Text>
        <Link
          href="https://cosmology.tech/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Cosmology
        </Link>
      </Stack>
    </Container>
  );
}

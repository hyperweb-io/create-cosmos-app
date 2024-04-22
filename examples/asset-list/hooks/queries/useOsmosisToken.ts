import { useQuery } from '@tanstack/react-query';



// remove this hook do not fetch any token from api, just use chain registry
type Token = {
  price: number;
  denom: string;
  symbol: string;
  liquidity: number;
  volume_24h: number;
  volume_24h_change: number;
  name: string;
  price_24h_change: number;
  price_7d_change: number;
  exponent: number;
  display: string;
};

export const handleError = (resp: Response) => {
  if (!resp.ok) throw Error(resp.statusText);
  return resp;
};

const fetchTokens = async (): Promise<Token[]> => {
  const url = 'https://api-osmosis.imperator.co/tokens/v2/all';
  return fetch(url)
    .then(handleError)
    .then((res) => res.json());
};

const MAX_TOP_TOKENS = 60;

const filterTopTokens = (tokens: Token[]) => {
  return tokens
    .sort((a, b) => b.liquidity - a.liquidity)
    .slice(0, MAX_TOP_TOKENS)
};

export const useOsmosisToken = () => {
  return useQuery({
    queryKey: ['osmosis_tokens'],
    queryFn: fetchTokens,
    select: filterTopTokens,
    staleTime: Infinity,
  });
};

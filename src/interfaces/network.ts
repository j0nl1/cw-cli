export default interface Network {
  chainId: string;
  chainName: string;
  addressPrefix: string;
  rpc: string;
  rest: string;
  feeToken: string;
  stakingToken: string;
  coinMap: {
    [key: string]: { denom: string; fractionalDigits: number };
  };
  gasPrice: number;
}

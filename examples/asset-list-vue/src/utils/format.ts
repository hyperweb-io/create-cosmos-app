import BigNumber from 'bignumber.js';

export const formatDollarValue = (dollarValue: string, amount: string) => {
  return new BigNumber(dollarValue).gt(0.01)
    ? '$' + truncDecimals(dollarValue, 2)
    : new BigNumber(amount).gt(0)
      ? '< $0.01'
      : '$0';
};

export const truncDecimals = (
  val: string | number | undefined,
  decimals: number
) => {
  return new BigNumber(val || 0).decimalPlaces(decimals).toString();
};
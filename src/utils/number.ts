import numeral from 'numeral';

export const formatCurrency = (number: number | string, format = '0,0', code = '¥') => {
  const currencyCode = code || '';
  return currencyCode + ' ' + formatNumber(number, format);
};

export const formatNumber = (number: number | string, format = '0,0') => {
  return numeral(number).format(format);
};

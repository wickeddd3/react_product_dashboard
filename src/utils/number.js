import numeral from 'numeral';

function formatPrice(value, formatValue) {
  const price = value || 0;
  const format = formatValue || '$0,0.00';
  const formattedPrice = numeral(price).format(format);
  return formattedPrice;
}

export { formatPrice };

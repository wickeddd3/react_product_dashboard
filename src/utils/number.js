import numeral from 'numeral';

function formatPrice(value) {
  const price = value || 0;
  const formattedPrice = numeral(price).format('$0,0.00');
  return formattedPrice;
}

export { formatPrice };

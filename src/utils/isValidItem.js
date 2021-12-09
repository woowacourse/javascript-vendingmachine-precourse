export default function isValidItem(name, price, quantity) {
  return (
    name.length >= 1 &&
    Number.isInteger(price) &&
    price >= 100 &&
    price % 10 === 0 &&
    Number.isInteger(quantity) &&
    quantity >= 1
  );
}

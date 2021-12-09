export default function isValidChargeAmount(chargeAmount) {
  return (
    Number.isInteger(chargeAmount) &&
    chargeAmount >= 10 &&
    chargeAmount % 10 === 0
  );
}

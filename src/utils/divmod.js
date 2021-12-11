export default function divmod(dividend, divisor) {
  if (dividend === 0) {
    throw 'not divisible';
  }

  return {
    quotient: parseInt(dividend / divisor, 10),
    remainder: dividend % divisor,
  };
}

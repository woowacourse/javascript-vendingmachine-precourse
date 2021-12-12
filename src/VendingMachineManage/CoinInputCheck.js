export default function CoinInputCheck(inputCoin) {
  const numInputCoin = Number(inputCoin);
  if (inputCoin !== String(numInputCoin)) {
    alert('금액에 숫자를 입력해주세요.');
    return false;
  }
  if (numInputCoin % 10 !== 0) {
    alert('10의 배수의 금액을 입력해주세요.');
    return false;
  }
  return true;
}

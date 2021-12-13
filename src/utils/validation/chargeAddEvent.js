export function chargeAddValiate(coin) {
  let result = true;
  if (!coin) {
    alert("추가할 금액을 기입해주세요");
    result = false;
  } else if (Number(coin) - parseInt(Number(coin)) !== 0 || coin <= 0) {
    alert("자연수를 기입해주세요");
    result = false;
  }

  return result;
}
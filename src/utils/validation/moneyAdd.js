export function moneyAddValidate(money) {
  let result = true;
  if (!money) {
    alert("추가할 금액을 기입해주세요");
    result = false;
  } else if (Number(money) - parseInt(Number(money)) !== 0 || money <= 0) {
    alert("자연수를 기입해주세요");
    result = false;
  }
  
  return result;
}
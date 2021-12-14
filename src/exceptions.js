export function checkBlank(input) {
  if (input.length === 0) {
    alert('비어있는 항목이 존재합니다.');
    return true;
  }
  return false;
}

export function checkValidQuantity(input) {
  if (input <= 0) {
    alert('1 이상의 수를 입력해야 합니다.');
    return true;
  }
  return false;
}

export function checkValidPrice(input) {
  if (input < 100) {
    alert('상품은 100원 이상의 가격을 가져야 합니다.');
    return true;
  }

  if (input % 10 !== 0) {
    alert('금액은 10원으로 나누어 떨어져야 합니다.');
    return true;
  }

  return false;
}

function warningAlert() {
  window.alert('상품 이름, 가격, 개수를 모두 입력해주세요');
}

function check(values) {
  return values.some(value => value === '' || value === 0);
}

export function inputValidate(...values) {
  if (check(values)) {
    warningAlert();
    return false;
  }
  return true;
}

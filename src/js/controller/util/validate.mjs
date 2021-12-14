function warningAlert(message) {
  window.alert(message);
}

function checkEmpty(values) {
  return values.some(value => value === '' || value === 0);
}

function checkPrice(price) {
  return price >= 100 && price % 10 === 0;
}

export function inputValidate(...values) {
  if (checkEmpty(values)) {
    warningAlert('상품명, 가격, 수량을 빠짐없이 입력해주세요.');
    return false;
  }
  return true;
}

export function priceValidate(price) {
  if (!checkPrice(price)) {
    warningAlert('가격은 10단위 혹은 100이상을 입력해주세요.');
    return false;
  }
  return true;
}

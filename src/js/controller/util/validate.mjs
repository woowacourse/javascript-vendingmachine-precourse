function warningAlert(message) {
  window.alert(message);
}

// 상품관리 페이지 --------------------------------

function productAddCheckEmpty(values) {
  return values.some(value => value === '' || value === 0);
}

function productAddCheckPrice(price) {
  return price >= 100 && price % 10 === 0;
}

export function productAddInputValidate(...values) {
  if (productAddCheckEmpty(values)) {
    warningAlert('상품명, 가격, 수량을 빠짐없이 입력해주세요.');
    return false;
  }
  return true;
}

export function productAddPriceValidate(price) {
  if (!productAddCheckPrice(price)) {
    warningAlert('가격은 10단위 혹은 100이상을 입력해주세요.');
    return false;
  }
  return true;
}

// 잔돈충전 페이지 ---------------------------------------
function high10CheckMoney(money) {
  return money > 0 && money % 10 === 0;
}

export function high10MoneyValidate(money) {
  if (!high10CheckMoney(money)) {
    warningAlert('10원 이상 10원 단위로 입력해주세요.');
    return false;
  }
  return true;
}

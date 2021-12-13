const isEmpty = (inputValue) => {
  return inputValue === '';
};
const isContainsBlank = (productNameInput) => {
  return productNameInput.replace(/ /g, '').length === 0;
};

const isNumberType = (productNameInput) => {
  return !isNaN(Number(productNameInput));
};

const isInValidInteger = (inputValue) => {
  return !Number.isInteger(Number(inputValue));
};

const isSmallerThan100 = (inputValue) => {
  return inputValue < 100;
};

const isNotDividedBy10 = (inputValue) => {
  return inputValue % 10 !== 0;
};

const isSameOrLessZero = (inputValue) => {
  return inputValue <= 0;
};

export const isValidCharge = (chargeInput) => {
  if (isEmpty(chargeInput)) {
    alert('투입할 금액을 입력해주세요.  ex) 3000');
    return false;
  }

  if (isInValidInteger(chargeInput)) {
    alert('투입할 금액은 소수 값을 가지고 있어서는 안됩니다.  ex) 3000');
    return false;
  }

  if (isSameOrLessZero(chargeInput)) {
    alert('투입할 금액은 0보다 큰 값이어야 합니다.  ex) 3000');
    return false;
  }

  if (isNotDividedBy10(chargeInput)) {
    alert('투입할 금액은 10으로 나누어 떨어져야 합니다.  ex) 3000');
    return false;
  }

  return true;
};

export const isValidVendingMachineCharge = (vendingMachineChargeInput) => {
  if (isEmpty(vendingMachineChargeInput)) {
    alert('충전할 금액을 입력해주세요.  ex) 450');
    return false;
  }

  if (isInValidInteger(vendingMachineChargeInput)) {
    alert('충전할 금액은 소수 값을 가지고 있어서는 안됩니다.  ex) 450');
    return false;
  }

  if (isSameOrLessZero(vendingMachineChargeInput)) {
    alert('충전할 금액은 0보다 큰 값이어야 합니다.  ex) 450');
    return false;
  }

  if (isNotDividedBy10(vendingMachineChargeInput)) {
    alert('충전할 금액은 10으로 나누어 떨어져야 합니다.  ex) 450');
    return false;
  }

  return true;
};

const isInValidProductName = (productNameInput) => {
  if (isEmpty(productNameInput)) {
    alert('상품명을 입력해주세요.  ex) 사이다');
    return true;
  }

  if (isContainsBlank(productNameInput)) {
    alert('공백이 아닌 상품명을 입력해주세요.  ex) 사이다');
    return true;
  }

  if (isNumberType(productNameInput)) {
    alert('숫자 타입이 아닌 상품명을 입력해주세요.  ex) 사이다');
    return true;
  }

  return false;
};

const isInValidProductPrice = (productPriceInput) => {
  if (isEmpty(productPriceInput)) {
    alert('상품의 가격을 입력해주세요.  ex) 1500');
    return true;
  }

  if (isInValidInteger(productPriceInput)) {
    alert('상품의 가격은 100원부터 시작하며, 10원으로 나누어 떨어져야 합니다.  ex)1500');
    return true;
  }

  if (isSmallerThan100(productPriceInput)) {
    alert('상품의 가격은 100원부터 시작하며, 10원으로 나누어 떨어져야 합니다.  ex)1500');
    return true;
  }

  if (isNotDividedBy10(productPriceInput)) {
    alert('상품의 가격은 100원부터 시작하며, 10원으로 나누어 떨어져야 합니다.  ex)1500');
    return true;
  }

  return false;
};

const isInValidQuantityInput = (productQuantityInput) => {
  if (isEmpty(productQuantityInput)) {
    alert('상품의 수량을 입력해주세요.  ex) 20');
    return true;
  }

  if (isInValidInteger(productQuantityInput)) {
    alert('소수 값이 아닌 상품의 수량을 입력해주세요.  ex) 20');
    return true;
  }

  if (isSameOrLessZero(productQuantityInput)) {
    alert('0보다 큰 상품의 수량을 입력해주세요.  ex) 20');
    return true;
  }

  return false;
};

export const isValidProductAddData = (
  productNameInput,
  productPriceInput,
  productQuantityInput
) => {
  if (isInValidProductName(productNameInput)) {
    return false;
  }

  if (isInValidProductPrice(productPriceInput)) {
    return false;
  }

  if (isInValidQuantityInput(productQuantityInput)) {
    return false;
  }

  return true;
};

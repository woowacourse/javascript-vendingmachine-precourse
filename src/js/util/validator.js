export const checkValidChargeMoney = (money) => {
  if (isNotPositiveNumber(money)) {
    throw new Error("금액은 0이하이면 안됩니다");
  }
  if (isNotPriceDividedByTen(money)) {
    throw new Error("10으로 나누어 떨어지는 금액을 입력해주세요");
  }
};

export const checkValidAddProduct = ({ name, price, quantity }) => {
  if (hasEmpty([name, price, quantity])) {
    throw new Error("입력에 공백이 들어가서는 안됩니다");
  }
  if (isNotPositiveNumber(quantity)) {
    throw new Error("수량은 1이상을 입력해주세요");
  }
  if (isPriceUnderMin(price)) {
    throw new Error("100원 이상의 금액을 입력해주세요");
  }
  if (isNotPriceDividedByTen(price)) {
    throw new Error("10으로 나누어 떨어지는 금액을 입력해주세요");
  }
};

export const checkValidBuyProduct = ({ price, quantity }, chargedMoney) => {
  if (isExpesiveThanChargedMoney(price, chargedMoney)) {
    throw new Error("충전금액이 모자릅니다");
  }
  if (isZeroQuantity(quantity)) {
    throw new Error("잔고가 없습니다");
  }
};

const isNotPositiveNumber = (num) => {
  return num <= 0;
};

const hasEmpty = (inputArray) => {
  return inputArray.some((input) => input === "");
};

const isPriceUnderMin = (price) => {
  return price < 100;
};

const isNotPriceDividedByTen = (price) => {
  return price % 10 !== 0;
};

const isZeroQuantity = (quantity) => {
  return quantity === 0;
};

const isExpesiveThanChargedMoney = (price, chargedMoney) => {
  return price > chargedMoney;
};

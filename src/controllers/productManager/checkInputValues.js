import { ALERT_MSG, CONDITION } from "../../utils/constants.js";
import { isPositiveInteger } from "../common/isPositiveInteger.js";

// 상품 가격이 조건에 맞는지 확인
// 조건: 100원 이상이며 10으로 나누어 떨어져야 함
const isValidPrice = priceStr => {
  const price = parseInt(priceStr, 10);
  const { PRICE } = CONDITION;
  const { minPrice, divideUnit } = PRICE;

  return price >= minPrice && price % divideUnit === 0;
};

// 상품명, 가격, 재고 중 비어있는 값이 있는지 확인
const isEmpty = (name, price, quantity) => {
  return name === "" || price === "" || quantity === "";
};

// 유효한 입력인지 확인하여 에러메시지 전달
// 에러메시지가 비어있으면 정상적인 입력
const isValidInputs = (name, price, quantity) => {
  const { emptyInput, wrongProductPrice, wrongProductQuantity } = ALERT_MSG;
  let errorMessage = "";

  if (isEmpty(name, price, quantity)) {
    errorMessage = emptyInput;
  } else if (!isValidPrice(price)) {
    errorMessage = wrongProductPrice;
  } else if (!isPositiveInteger(quantity)) {
    errorMessage = wrongProductQuantity;
  }

  return errorMessage;
};

export { isValidInputs };

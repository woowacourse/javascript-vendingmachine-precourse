import { setInputValueById } from "../../utils/inputValue.js";

// 상품 추가 input value 초기화
const resetAddProductInput = () => {
  setInputValueById("product-name-input", "");
  setInputValueById("product-price-input", "");
  setInputValueById("product-quantity-input", "");
};

// 잔돈 충전 input value 초기화
const resetChargeMachineInput = () => {
  setInputValueById("vending-machine-charge-input", "");
};

// 금액 투입 input value 초기화
const resetChargeCustomerInput = () => {
  setInputValueById("charge-input", "");
};

export {
  resetAddProductInput,
  resetChargeMachineInput,
  resetChargeCustomerInput,
};

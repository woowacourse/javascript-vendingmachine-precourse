import { setInputValueById } from "../../utils/inputValue.js";

const resetAddProductInput = () => {
  setInputValueById("product-name-input", "");
  setInputValueById("product-price-input", "");
  setInputValueById("product-quantity-input", "");
};

const resetChargeMachineInput = () => {
  setInputValueById("vending-machine-charge-input", "");
};

const resetChargeCustomerInput = () => {
  setInputValueById("charge-input", "");
};

export {
  resetAddProductInput,
  resetChargeMachineInput,
  resetChargeCustomerInput,
};

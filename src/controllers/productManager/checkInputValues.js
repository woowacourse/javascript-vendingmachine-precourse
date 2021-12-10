import { ALERT_MSG } from "../../utils/constants.js";
import { isPositiveInteger } from "../common/isPositiveInteger.js";

const isValidPrice = priceStr => {
  const price = parseInt(priceStr, 10);

  return price >= 100 && price % 10 === 0;
};

const isEmpty = (name, price, quantity) => {
  return name === "" || price === "" || quantity === "";
};

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

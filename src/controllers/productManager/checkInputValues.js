import { ALERT_MSG } from "../../utils/constants.js";

const isDuplicateName = name => {
  const strOfProducts = JSON.parse(localStorage.getItem("products"));
  const productNames = [];

  if (strOfProducts) {
    const products = strOfProducts.split(",");
    products.forEach(product => {
      productNames.push(product.split("/")[0]);
    });
  }

  return productNames.includes(name);
};

const isInteger = num => {
  let check = true;

  if (isNaN(num)) {
    check = false;
  } else if (Number(num) % 1 !== 0) {
    check = false;
  }

  return check;
};

const isPositiveInteger = num => {
  let check = true;

  if (!isInteger(num)) {
    check = false;
  } else if (parseInt(num, 10) < 1) {
    check = false;
  }

  return check;
};

const isValidPrice = priceStr => {
  const price = parseInt(priceStr, 10);

  return price >= 100 && price % 10 === 0;
};

const isEmpty = (name, price, quantity) => {
  return name === "" || price === "" || quantity === "";
};

const isValidInputs = (name, price, quantity) => {
  const {
    emptyInput,
    wrongProductName,
    wrongProductPrice,
    wrongProductQuantity,
  } = ALERT_MSG;
  let errorMessage = "";

  if (isEmpty(name, price, quantity)) {
    errorMessage = emptyInput;
  } else if (isDuplicateName(name)) {
    errorMessage = wrongProductName;
  } else if (!isValidPrice(price)) {
    errorMessage = wrongProductPrice;
  } else if (!isPositiveInteger(quantity)) {
    errorMessage = wrongProductQuantity;
  }

  return errorMessage;
};

export { isValidInputs };

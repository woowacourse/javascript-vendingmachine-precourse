import { ERROR_MESSAGE } from "../constants.js";

export function productAddValiate(product) {
  let result = true;
  if (product[0] === "" && product[1] === "" && product[2] === "") {
    alert(ERROR_MESSAGE.PRODUCT_NOEMPTY_INPUT);
    result = false;
  } else if (Number(product[1]) < 100) {
    alert(ERROR_MESSAGE.PRODUCT_PRICE_OVER100);
    result = false;
  } else if (Number(product[1]) % 10 !== 0 ) {
    alert(ERROR_MESSAGE.PRODUCT_PRICE_10UNIT);
    result = false;
  } else if (Number(product[2]) - parseInt(Number(product[2])) !== 0) {
    alert(ERROR_MESSAGE.PRODUCT_COUNT_DECIMAL);
    result = false;
  } else if (Number(product[2]) <= 0 ) {
    alert(ERROR_MESSAGE.PRODUCT_COUNT_NATURALNUM);
    result = false;
  }

  return result;
}
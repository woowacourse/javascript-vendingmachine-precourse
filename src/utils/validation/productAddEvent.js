import { ERROR_MESSAGE, NOTHING, NUMBER, PRODUCT } from "../constants.js";

export function productAddValiate(product) {
  let result = true;
  if (product[PRODUCT.NAME] === NOTHING && product[PRODUCT.PRICE] === NOTHING && product[PRODUCT.COUNT] === NOTHING) {
    alert(ERROR_MESSAGE.PRODUCT_NOEMPTY_INPUT);
    result = false;
  } else if (Number(product[PRODUCT.PRICE]) < NUMBER.ONEHUN) {
    alert(ERROR_MESSAGE.PRODUCT_PRICE_OVER100);
    result = false;
  } else if (Number(product[PRODUCT.PRICE]) % NUMBER.TEN !== NUMBER.ZERO ) {
    alert(ERROR_MESSAGE.PRODUCT_PRICE_10UNIT);
    result = false;
  } else if (Number(product[PRODUCT.PRICE]) - parseInt(Number(product[PRODUCT.PRICE])) !== NUMBER.ZERO) {
    alert(ERROR_MESSAGE.PRODUCT_COUNT_DECIMAL);
    result = false;
  } else if (Number(product[PRODUCT.PRICE]) <= NUMBER.ZERO ) {
    alert(ERROR_MESSAGE.PRODUCT_COUNT_NATURALNUM);
    result = false;
  }

  return result;
}
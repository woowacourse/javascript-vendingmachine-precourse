import { ERROR_MESSAGE, NUMBER, PRODUCT } from "../constants.js";

export function moneyAddValidate(money) {
  let result = true;
  if (!money) {
    alert(ERROR_MESSAGE.MONEY_NOEMPTY_INPUT);
    result = false;
  } else if (Number(money) - parseInt(Number(money)) !== NUMBER.ZERO || money <= NUMBER.ZERO) {
    alert(ERROR_MESSAGE.MONEY_NATURALNUM);
    result = false;
  }
  
  return result;
}

export function checkInsertPrice(localTotalInsertMoney, localProductList, selectProduct) {
  let result = true;
  localProductList.map(product => product[PRODUCT.NAME] === selectProduct[PRODUCT.NAME]
    ? product[PRODUCT.PRICE] > localTotalInsertMoney
      ? (alert(ERROR_MESSAGE.SHORT_MONEY), result = false)
      : NOTHING
    : NOTHING
  );

  return result;
}
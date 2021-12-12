import { ERROR, CONSTANTS } from '../constants/constants.js';
import { errorAlert } from '../utils/error-alert.js';
import { removeTags } from '../utils/element-tools.js';
import { cloneObject } from '../utils/data-tools.js';

import Coins from '../models/Coins.js';
import Product from '../models/Product.js';
import {
  checkAmountVaild,
  checkProductVaild,
} from '../models/UserInputCheck.js';

import {
  $productState,
  $coinState,
  $chargeState,
} from '../components/StateList.js';

export const handleAddCoins = (amount) => {
  const inputAmount = Number(amount);

  const resultCode = checkAmountVaild(inputAmount);
  if (errorAlert(resultCode) === true) return false;

  $coinState.value = new Coins($coinState.value).add(inputAmount).result;
};

export const handleAddProduct = (inputName, inputPrice, inputQuantity) => {
  const product = {
    name: removeTags(inputName),
    price: Number(inputPrice),
    quantity: Number(inputQuantity),
  };

  const resultCode = checkProductVaild(product);
  if (errorAlert(resultCode) === true) return false;

  $productState.value = new Product($productState.value).add(product).result;
  return true;
};

export const handlePutAmount = (amount) => {
  const inputAmount = Number(amount);

  const resultCode = checkAmountVaild(inputAmount);
  if (errorAlert(resultCode) === true) return false;

  $chargeState.value += inputAmount;
};

export const handlePurchase = (primaryKey) => {
  const productManager = new Product($productState.value);
  const { price } = productManager.itemInfo(primaryKey);

  if ($chargeState.value < price) {
    errorAlert(ERROR.PURCHASE_NEED_BALANCE);
    return false;
  }

  $chargeState.value -= price;
  $productState.value = productManager.purchase(primaryKey).result;
};

export const handleReturnAmount = () => {
  if ($chargeState.value === 0) {
    errorAlert(ERROR.RETURN_AMOUNT_NO_BALANCE);
    return cloneObject(CONSTANTS.COIN_LIST);
  }

  const coinManager = new Coins($coinState.value);
  const { output, failed } = coinManager.return($chargeState.value);

  $chargeState.value = failed;
  $coinState.value = coinManager.result;

  return output;
};

export const handleTotalAmountCoins = () => new Coins($coinState.value).total;

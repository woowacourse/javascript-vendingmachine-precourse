// prettier-ignore
import { renderMain, renderFormTypes, renderTableTypes , renderAmountSpan, renderCoinsItems, renderMenuItems} from './common.js';
import { localStorageConstants } from '../constant/localstorage.js';
import {
  addProductFormConstants,
  chargeChangesFormConstants,
  inputAmountFormConstants,
  productItemsTableConstants,
  coinItemsTableConstants,
  purchasableProductItemsTableConstants,
  changesCoinItemsTableConstants,
  chargeChangesSpanConstants,
  inputtedAmountSpanConstants,
  changesCoinItemsConstants,
  coinItemsConstants,
  productItemsConstants,
  purchableProductItemsConstants,
} from '../constant/string.js';

export const renderProductAddMenu = () => {
  renderMain();
  renderFormTypes(addProductFormConstants);
  renderTableTypes(productItemsTableConstants);
  renderMenuItems(productItemsConstants);
};

export const renderVendingMachineManageMenu = () => {
  renderMain();
  renderFormTypes(chargeChangesFormConstants);
  renderAmountSpan(chargeChangesSpanConstants, localStorageConstants.CHANGES);
  renderTableTypes(coinItemsTableConstants);
  renderCoinsItems(coinItemsConstants);
};

export const renderProductPurchaseMenu = () => {
  renderMain();
  renderFormTypes(inputAmountFormConstants);
  renderAmountSpan(
    inputtedAmountSpanConstants,
    localStorageConstants.INPUT_AMOUNT,
  );
  renderTableTypes(purchasableProductItemsTableConstants);
  renderMenuItems(purchableProductItemsConstants);
  renderTableTypes(changesCoinItemsTableConstants);
  renderCoinsItems(changesCoinItemsConstants);
};

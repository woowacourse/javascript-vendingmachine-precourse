import {
  createAmountP,
  createContainer,
  createElements,
  createGridDiv,
  customCreateElement,
} from '../CreateElementUtils.js';

import {
  ID_PURCHASE_TAB,
  CHARGE_MACHINE_FORM_CONTAINER_ITEMS,
  STRING_CHARGE_AMOUNT_LABEL,
  ID_PURCHASE_CHARGE_AMOUNT,
  ID_RETURN_COIN_STATUS,
  ID_PURCHASE_PRODUCT_GRID,
  COIN_RETURN_ITEMS,
  PURCHASE_GRID_HEADERS,
  TITLE_RETURN_COIN_STATUS,
  TITLE_PURCHASE_PRODUCT_GRID,
  VAL_PRODUCT_GRID_COLUMN_SIZE,
  VAL_COIN_GRID_COLUMN_SIZE,
} from './PurchaseProducts.constants.js';

export default class PurchaseProducts {
  constructor() {
    this.section = this.constructor.purchaseProductsTab();
  }

  static purchaseProductsTab() {
    const formContainer = this.createFormContainer();
    const coinStatusContainer = this.createCoinContainer();
    const purchaseContainer = this.createPurchaseContainer();
    return createContainer(
      document.createElement('section'),
      [formContainer, purchaseContainer, coinStatusContainer],
      ID_PURCHASE_TAB,
    );
  }

  static createFormContainer() {
    const formContainer = createContainer(
      document.createElement('div'),
      createElements(CHARGE_MACHINE_FORM_CONTAINER_ITEMS),
    );
    const chargeAmountP = createAmountP(
      STRING_CHARGE_AMOUNT_LABEL,
      ID_PURCHASE_CHARGE_AMOUNT,
    );

    formContainer.append(chargeAmountP);

    return formContainer;
  }

  static createPurchaseContainer() {
    const grid = createContainer(
      document.createElement('div'),
      [createGridDiv(VAL_PRODUCT_GRID_COLUMN_SIZE, PURCHASE_GRID_HEADERS)],
      ID_PURCHASE_PRODUCT_GRID,
    );

    return createContainer(document.createElement('section'), [
      customCreateElement({
        tag: 'h2',
        value: TITLE_PURCHASE_PRODUCT_GRID,
      }),
      grid,
    ]);
  }

  static createCoinContainer() {
    const grid = createContainer(
      document.createElement('div'),
      [createGridDiv(VAL_COIN_GRID_COLUMN_SIZE, COIN_RETURN_ITEMS)],
      ID_RETURN_COIN_STATUS,
    );

    return createContainer(document.createElement('section'), [
      customCreateElement({
        tag: 'h2',
        value: TITLE_RETURN_COIN_STATUS,
      }),
      grid,
    ]);
  }
}

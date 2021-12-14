import { createContainer } from '../utils/createElementUtils.js';
import {
  STRING_COIN_10,
  STRING_COIN_100,
  STRING_COIN_50,
  STRING_COIN_500,
} from '../globalConstants.js';
import { getFromStorage } from '../store.js';
import {
  CoinReturnButton,
  CoinTableSection,
  CoinTableTitle,
  CoinTableWithRows,
  createButtonTD,
  createProductObjects,
  createTR,
  FormTitle,
  InsertFormSection,
  PurchaseChargeInput,
  PurchaseChargeSubmit,
  PurchaseChargeSumLabel,
  PurchaseChargeSumSpan,
  PurchaseTable,
  PurchaseTableSection,
  PurchaseTableTitle,
} from './components.js';

import {
  ID_PURCHASE_TAB,
  ID_PURCHASE_CHARGE_AMOUNT,
  CLASS_PURCHASE_QUANTITY,
  ID_PURCHASE_CHARGE_INPUT,
  ID_PURCHASE_CHARGE_SUBMIT,
  ID_RETURN_COIN_500_QUANTITY,
  ID_RETURN_COIN_100_QUANTITY,
  ID_RETURN_COIN_50_QUANTITY,
  ID_RETURN_COIN_10_QUANTITY,
  CLASS_PURCHASE_NAME,
  ID_PURCHASE_PRODUCT_STATUS,
  ID_RETURN_COIN_BUTTON,
} from './constants.js';
import {
  handlePurchaseCharge,
  handlePurchaseClick,
  handleReturnChange,
} from './eventhandler.js';
import { getTotalAmount } from './models.js';

export default class PurchaseProducts {
  constructor() {
    this.section = this.purchaseProductsTab();
    this.DOMs = {};
    this.handleDOMs();
    this.updateTotalAmount();
    this.addAllPurchaseRows();
  }

  purchaseProductsTab() {
    const formContainer = this.createFormContainer();
    const purchaseContainer = this.constructor.createPurchaseContainer();
    const coinStatusContainer = this.createCoinContainer();

    return createContainer(
      document.createElement('section'),
      [formContainer, purchaseContainer, coinStatusContainer],
      ID_PURCHASE_TAB,
    );
  }

  handleDOMs() {
    this.addDOM('insertInput', ID_PURCHASE_CHARGE_INPUT);
    this.addDOM('insertSubmit', ID_PURCHASE_CHARGE_SUBMIT);
    this.addDOM('chargeAmount', ID_PURCHASE_CHARGE_AMOUNT);
    this.addDOM('returnSubmit', ID_RETURN_COIN_BUTTON);
    this.addDOM(STRING_COIN_500, ID_RETURN_COIN_500_QUANTITY);
    this.addDOM(STRING_COIN_100, ID_RETURN_COIN_100_QUANTITY);
    this.addDOM(STRING_COIN_50, ID_RETURN_COIN_50_QUANTITY);
    this.addDOM(STRING_COIN_10, ID_RETURN_COIN_10_QUANTITY);
    this.addDOM('table', ID_PURCHASE_PRODUCT_STATUS);
  }

  addDOM(key, id) {
    this.DOMs[key] = this.section.querySelector(`#${id}`);
  }

  createFormContainer() {
    const container = InsertFormSection();

    const button = PurchaseChargeSubmit();
    button.addEventListener('click', handlePurchaseCharge.bind(this));
    const purchaseChargeSum = PurchaseChargeSumLabel;
    purchaseChargeSum.appendChild(PurchaseChargeSumSpan);

    container.appendChild(FormTitle);
    container.appendChild(PurchaseChargeInput);
    container.appendChild(button);
    container.appendChild(purchaseChargeSum);

    return container;
  }

  updateTotalAmount() {
    this.DOMs.chargeAmount.innerText = getTotalAmount();
    this.DOMs.insertInput.value = '';
  }

  addPurchaseProductTableRow(name, property) {
    const productData = createProductObjects(name, property);
    const row = createTR(productData);
    const buttonTD = createButtonTD();
    const button = buttonTD.firstChild;
    button.addEventListener('click', (e) => handlePurchaseClick.bind(this)(e));
    row.append(buttonTD);

    this.DOMs.table.appendChild(row);
  }

  addAllPurchaseRows() {
    const products = getFromStorage('products') || {};
    if (products) {
      Object.keys(products).forEach((p) => {
        this.addPurchaseProductTableRow(p, products[p]);
      });
    }
  }

  static updateItemTable(item) {
    const products = getFromStorage('products');
    const name = item.querySelector(`.${CLASS_PURCHASE_NAME}`).dataset
      .productName;
    const newProduct = products[name];
    const target = item.querySelector(`.${CLASS_PURCHASE_QUANTITY}`);
    if (newProduct) {
      target.innerText = newProduct.quantity;
    } else {
      item.parentNode.removeChild(item);
    }
  }

  static createPurchaseContainer() {
    const container = PurchaseTableSection();
    container.appendChild(PurchaseTableTitle);
    container.appendChild(PurchaseTable());
    return container;
  }

  createCoinContainer() {
    const container = CoinTableSection;
    const button = CoinReturnButton;
    button.addEventListener('click', handleReturnChange.bind(this));

    container.appendChild(CoinTableTitle);
    container.appendChild(button);
    container.appendChild(CoinTableWithRows);

    return container;
  }

  renderReturnCoins(coins) {
    Object.keys(coins).forEach((coin) => {
      this.DOMs[coin].innerText = `${coins[coin]}개`;
    });
  }
}

import {
  createAmountP,
  createContainer,
  createElements,
  createGridDiv,
  createObjForElement,
  customCreateElement,
} from '../CreateElementUtils.js';
import MachineOperations from '../MachineOperations/MachineOperation.js';
import { getAllProducts } from '../Utils.js';

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
  CLASS_PURCHASE_ITEM,
  CLASS_PURCHASE_NAME,
  CLASS_PURCHASE_PRICE,
  CLASS_PURCHASE_QUANTITY,
  STRING_PURCHASE_BUTTON,
  CLASS_PURCHASE_BUTTON,
  DATA_PRODUCT_NAME,
  DATA_PRODUCT_PRICE,
  DATA_PRODUCT_QUANTITY,
  ID_PURCHASE_CHARGE_INPUT,
  ID_PURCHASE_CHARGE_SUBMIT,
  STRING_COIN_10,
  STRING_COIN_100,
  STRING_COIN_50,
  STRING_COIN_500,
  ID_RETURN_COIN_500_QUANTITY,
  ID_RETURN_COIN_100_QUANTITY,
  ID_RETURN_COIN_50_QUANTITY,
  ID_RETURN_COIN_10_QUANTITY,
} from './PurchaseProducts.constants.js';

export default class PurchaseProducts {
  constructor() {
    this.section = this.purchaseProductsTab();
    this.DOMs = {};
    this.section.addEventListener('load', this.handleDOMs());
  }

  purchaseProductsTab() {
    const formContainer = this.createFormContainer();
    const coinStatusContainer = this.createCoinContainer();
    const purchaseContainer = this.createPurchaseContainer();
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
    this.addDOM(STRING_COIN_500, ID_RETURN_COIN_500_QUANTITY);
    this.addDOM(STRING_COIN_50, ID_RETURN_COIN_100_QUANTITY);
    this.addDOM(STRING_COIN_100, ID_RETURN_COIN_50_QUANTITY);
    this.addDOM(STRING_COIN_10, ID_RETURN_COIN_10_QUANTITY);
    this.updateTotalAmount();
  }

  addDOM(key, id) {
    this.DOMs[key] = this.section.querySelector(`#${id}`);
  }

  createFormContainer() {
    const formContainer = createContainer(
      document.createElement('div'),
      createElements(CHARGE_MACHINE_FORM_CONTAINER_ITEMS),
    );
    formContainer.children[formContainer.children.length - 1].addEventListener(
      'click',
      this.handleInsertSubmit.bind(this),
    );

    const chargeAmountP = createAmountP(
      STRING_CHARGE_AMOUNT_LABEL,
      ID_PURCHASE_CHARGE_AMOUNT,
    );

    formContainer.append(chargeAmountP);

    return formContainer;
  }

  handleInsertSubmit() {
    const insertValue = this.DOMs.insertInput.value * 1;
    const registered = MachineOperations.registerInsert(insertValue);

    if (registered) {
      this.updateTotalAmount();
    }
  }

  updateTotalAmount() {
    const totalAmount = window.localStorage.getItem('insert') || '';
    this.DOMs.chargeAmount.innerText = totalAmount;
    this.DOMs.insertInput.value = '';
  }

  addPurchaseProductGridRow(container, products) {
    const productItems = this.constructor.getAllItemObjects(products);

    const grid = createGridDiv(
      VAL_PRODUCT_GRID_COLUMN_SIZE,
      productItems,
      '',
      CLASS_PURCHASE_ITEM,
    );

    this.constructor.addDataset(grid, products);
    this.constructor.appendButtonEventHandler(grid);

    container.appendChild(grid);
  }

  static getAllItemObjects(products) {
    Object.keys(products).reduce((array, p) => {
      const items = this.constructor.createProductItemObject(products, p);
      return array.concat(items);
    }, []);
  }

  static addDataset(item, data) {
    Object.keys(data).forEach((name) => {
      item.setAttribute(DATA_PRODUCT_NAME, name);
      item.setAttribute(DATA_PRODUCT_PRICE, data[name].price);
      item.setAttribute(DATA_PRODUCT_QUANTITY, data[name].quantity);
    });
  }

  static appendButtonEventHandler(container) {
    container.lastChild.appendChild(
      customCreateElement({
        tag: 'button',
        attributes: { class: CLASS_PURCHASE_BUTTON, type: 'submit' },
        value: STRING_PURCHASE_BUTTON,
      }),
    );

    container.lastChild.lastChild.addEventListener('click', (e) => {
      this.handlePurchaseClick(e);
    });
  }

  handlePurchaseClick(e) {
    const item = e.target.parentNode.parentNode;
    const { dataset } = item;
    const purchased = MachineOperations.purchaseProduct(dataset);

    if (purchased) {
      this.updateTotalAmount();
      this.constructor.updateItemGrid(item);
    }
  }

  static updateItemGrid(item) {
    const products = getAllProducts();
    const newProduct = products[item.dataset.productName];
    const target = item.querySelector(`.${CLASS_PURCHASE_QUANTITY}`);
    if (newProduct) {
      target.innerText = newProduct.quantity;
    } else {
      item.parentNode.removeChild(item);
    }
  }

  static createProductItemObject(product, key) {
    return [
      createObjForElement('div', { class: CLASS_PURCHASE_NAME }, key),
      createObjForElement(
        'div',
        { class: CLASS_PURCHASE_PRICE },
        product[key].price,
      ),
      createObjForElement(
        'div',
        { class: CLASS_PURCHASE_QUANTITY },
        product[key].quantity,
      ),
      createObjForElement('div'),
    ];
  }

  createPurchaseContainer() {
    const grid = createContainer(
      document.createElement('div'),
      [createGridDiv(VAL_PRODUCT_GRID_COLUMN_SIZE, PURCHASE_GRID_HEADERS)],
      ID_PURCHASE_PRODUCT_GRID,
    );
    this.addAllPurchaseRows(grid);

    return createContainer(document.createElement('section'), [
      customCreateElement({
        tag: 'h2',
        value: TITLE_PURCHASE_PRODUCT_GRID,
      }),
      grid,
    ]);
  }

  createCoinContainer() {
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

  addAllPurchaseRows(grid) {
    const allProducts = getAllProducts();
    if (allProducts) {
      Object.keys(allProducts).forEach((p) => {
        const itemObj = {};
        itemObj[p] = allProducts[p];
        this.addPurchaseProductGridRow(grid, itemObj);
      });
    }
  }
}

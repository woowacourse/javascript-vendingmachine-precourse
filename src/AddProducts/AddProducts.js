import {
  createContainer,
  createElements,
  createGridDiv,
  createObjForElement,
  customCreateElement,
} from '../CreateElementUtils.js';
import {
  PRODUCT_TAB_FORM_CONTAINER_ITEMS,
  ID_PRODUCT_ADD_TAB,
  ID_PRODUCT_ADD_STATUS,
  TITLE_CURRENT_STATUS,
  CURRENT_GRID_HEADERS,
  VAL_GRID_COLUMN_SIZE,
  ID_PRODUCT_NAME_INPUT,
  ID_PRODUCT_PRICE_INPUT,
  ID_PRODUCT_QUANTITY_INPUT,
  CLASS_PRODUCT_NAME,
  CLASS_PRODUCT_PRICE,
  CLASS_PRODUCT_QUANTITY,
  CLASS_PRODUCT_ITEM,
} from './AddProducts.constants.js';

import MachineOperations from '../MachineOperations/MachineOperation.js';
import { getAllProducts, getDOMObj } from '../Utils.js';

const machine = new MachineOperations();

export default class AddProducts {
  constructor() {
    this.section = this.createAddProductTab();
    this.DOMs = {};
    window.addEventListener('load', this.addDOMs.bind(this));
  }

  createAddProductTab() {
    const formContainer = this.createFormContainer();
    const currentContainer = this.createCurrentContainer();

    return createContainer(
      document.createElement('section'),
      [formContainer, currentContainer],
      ID_PRODUCT_ADD_TAB,
    );
  }

  addDOMs() {
    this.DOMs.name = this.section.querySelector(`#${ID_PRODUCT_NAME_INPUT}`);
    this.DOMs.price = this.section.querySelector(`#${ID_PRODUCT_PRICE_INPUT}`);
    this.DOMs.quantity = this.section.querySelector(
      `#${ID_PRODUCT_QUANTITY_INPUT}`,
    );
  }

  createFormContainer() {
    const formItems = createElements(PRODUCT_TAB_FORM_CONTAINER_ITEMS);

    formItems[formItems.length - 1].addEventListener(
      'click',
      this.handleProductFormInput.bind(this),
    );
    return createContainer(document.createElement('div'), formItems);
  }

  handleProductFormInput() {
    const nameVal = this.DOMs.name.value;
    const priceVal = this.DOMs.price.value * 1;
    const quantityVal = this.DOMs.quantity.value * 1;
    const itemObj = {};
    itemObj[nameVal] = { price: priceVal, quantity: quantityVal };

    const register = machine.registerProduct(nameVal, priceVal, quantityVal);

    if (register) {
      this.addStatusGridRow(getDOMObj(`#${ID_PRODUCT_ADD_STATUS}`), itemObj);
      this.clearForm();
    }
  }

  clearForm() {
    this.DOMs.name.value = '';
    this.DOMs.price.value = '';
    this.DOMs.quantity.value = '';
  }

  addStatusGridRow(container, products) {
    const productItems = Object.keys(products).reduce((array, p) => {
      const items = this.constructor.createProductItemObject(products, p);
      return array.concat(items);
    }, []);

    const grid = createGridDiv(
      VAL_GRID_COLUMN_SIZE,
      productItems,
      '',
      CLASS_PRODUCT_ITEM,
    );

    container.appendChild(grid);
  }

  static createProductItemObject(product, key) {
    return [
      createObjForElement('div', { class: CLASS_PRODUCT_NAME }, key),
      createObjForElement(
        'div',
        { class: CLASS_PRODUCT_PRICE },
        product[key].price,
      ),
      createObjForElement(
        'div',
        { class: CLASS_PRODUCT_QUANTITY },
        product[key].quantity,
      ),
    ];
  }

  createCurrentContainer() {
    const grid = createContainer(
      document.createElement('div'),
      [createGridDiv(VAL_GRID_COLUMN_SIZE, CURRENT_GRID_HEADERS)],
      ID_PRODUCT_ADD_STATUS,
    );
    this.addAllProductRows(grid);

    const title = customCreateElement({
      tag: 'h2',
      value: TITLE_CURRENT_STATUS,
    });

    return createContainer(document.createElement('section'), [title, grid]);
  }

  addAllProductRows(grid) {
    const allProducts = getAllProducts();
    if (allProducts) {
      Object.keys(allProducts).forEach((p) => {
        const itemObj = {};
        itemObj[p] = allProducts[p];
        this.addStatusGridRow(grid, itemObj);
      });
    }
  }
}

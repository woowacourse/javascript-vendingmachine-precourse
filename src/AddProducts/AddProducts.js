import {
  createContainer,
  createElements,
  createGridDiv,
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

  createFormContainer() {
    const formItems = createElements(PRODUCT_TAB_FORM_CONTAINER_ITEMS);

    formItems[formItems.length - 1].addEventListener(
      'click',
      this.handleProductFormInput.bind(this),
    );
    return createContainer(document.createElement('div'), formItems);
  }

  handleProductFormInput() {
    const nameVal = getDOMObj(`#${ID_PRODUCT_NAME_INPUT}`).value;
    const priceVal = getDOMObj(`#${ID_PRODUCT_PRICE_INPUT}`).value * 1;
    const quantityVal = getDOMObj(`#${ID_PRODUCT_QUANTITY_INPUT}`).value * 1;
    const itemObj = {};
    itemObj[nameVal] = { price: priceVal, quantity: quantityVal };

    const register = machine.registerProduct(nameVal, priceVal, quantityVal);

    if (register) {
      this.addStatusGridRow(
        document.querySelector(`#${ID_PRODUCT_ADD_STATUS}`),
        itemObj,
      );
    }
  }

  addStatusGridRow(container, products) {
    const productItems = Object.keys(products).reduce((array, p) => {
      const items = this.constructor.createProductItemObject(products, p);
      return array.concat(items);
    }, []);

    const grid = createGridDiv(VAL_GRID_COLUMN_SIZE, productItems);
    grid.class = CLASS_PRODUCT_ITEM;
    container.appendChild(grid);
  }

  static createProductItemObject(productObject, key) {
    const nameItem = {
      tag: 'div',
      attributes: { class: CLASS_PRODUCT_NAME },
      value: key,
    };
    const priceItem = {
      tag: 'div',
      attributes: { class: CLASS_PRODUCT_PRICE },
      value: productObject[key].price,
    };
    const quantityItem = {
      tag: 'div',
      attributes: { class: CLASS_PRODUCT_QUANTITY },
      value: productObject[key].quantity,
    };
    return [nameItem, priceItem, quantityItem];
  }

  createCurrentContainer() {
    const grid = createContainer(
      document.createElement('div'),
      [createGridDiv(VAL_GRID_COLUMN_SIZE, CURRENT_GRID_HEADERS)],
      ID_PRODUCT_ADD_STATUS,
    );
    const allProducts = getAllProducts();
    if (allProducts) this.addStatusGridRow(grid, allProducts);

    const title = customCreateElement({
      tag: 'h2',
      value: TITLE_CURRENT_STATUS,
    });

    return createContainer(document.createElement('section'), [title, grid]);
  }
}

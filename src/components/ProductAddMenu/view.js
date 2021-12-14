import { $, initInput } from '../../utils/dom.js';
import { ID, CLASS } from '../../constants/selector.js';
import { STORAGE_KEY } from '../../constants/storageKey.js';
import { Container } from '../Element/elements.js';
import {
  productAddForm,
  productStatusTable,
  createProductRow,
} from './element.js';
import Product from '../product.js';
import { vendingMachine } from '../vendingMachine.js';
import {
  alertProductErrorMessage,
  isValidProduct,
} from '../../utils/validator.js';
import { getLocalStorage } from '../store.js';

export default function ProductAddMenuView() {
  this.productAddMenu = () => {
    const container = Container(ID.PRODUCT_ADD_VIEW);
    const form = productAddForm(this.onClickAddButton);
    const table = productStatusTable();

    container.append(...form, ...table);

    return container;
  };

  this.onClickAddButton = (e) => {
    e.preventDefault();
    const productInput = [
      $(`#${ID.PRODUCT_NAME_INPUT}`),
      $(`#${ID.PRODUCT_PRICE_INPUT}`),
      $(`#${ID.PRODUCT_QUANTITY_INPUT}`),
    ];
    const productValue = productInput.map((input) => input.value);

    if (!isValidProduct(...productValue)) {
      alertProductErrorMessage(...productValue);
      return;
    }

    const product = new Product(...productValue);

    vendingMachine.addProduct(product);
    this.renderProduct(product.getProduct());
    initInput(...productInput);
  };

  this.renderProduct = (product) => {
    const table = $(`#${ID.PRODUCT_TABLE}`);
    const productRow = createProductRow(
      product,
      CLASS.PRODUCT_MANAGE_ITEM,
      CLASS.PRODUCT_MANAGE
    );

    table.append(productRow);
  };

  this.initProducts = (products) => {
    const productArray = products.map((product) => [
      product.name,
      product.price,
      product.quantity,
    ]);

    productArray.forEach((product) => {
      this.renderProduct(product);
    });
  };

  this.initTable = () => {
    if (getLocalStorage(STORAGE_KEY.PRODUCT)) {
      vendingMachine.products = getLocalStorage(STORAGE_KEY.PRODUCT);
    }
    this.initProducts(vendingMachine.products);
  };

  this.render = () => {
    const container = $(`#${ID.MENU_VIEW}`);

    container.append(this.productAddMenu());
    this.initTable();
  };
}

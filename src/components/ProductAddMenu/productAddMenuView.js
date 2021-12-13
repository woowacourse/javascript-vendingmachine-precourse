import { ID, CLASS } from '../../constants/selector.js';
import { MACHINE } from '../../constants/machine.js';
import { STORAGE_KEY } from '../../constants/storageKey.js';
import { Container, SubTitle } from '../elements.js';
import {
  createProductForm,
  createProductTable,
  createProductRow,
} from './productAddMenu.js';
import Product from '../product.js';
import { vendingMachine } from '../vendingMachine.js';
import { alertProductErrorMessage, isValidProduct } from '../validator.js';

export default function ProductAddMenuView() {
  this.productAddMenu = () => {
    const container = Container(ID.PRODUCT_ADD_VIEW);
    const addProductSubTitle = SubTitle(MACHINE.SUBTITLE.ADD_PRODUCT);
    const productStatusSubTitle = SubTitle(MACHINE.SUBTITLE.PRODUCT_STATUS);
    const productForm = createProductForm(this.onClickAddButton);
    const productTable = createProductTable();

    container.append(
      addProductSubTitle,
      productForm,
      productStatusSubTitle,
      productTable
    );

    return container;
  };

  this.onClickAddButton = (e) => {
    e.preventDefault();
    const productNameInput = document.querySelector(
      `#${ID.PRODUCT_NAME_INPUT}`
    );
    const productPriceInput = document.querySelector(
      `#${ID.PRODUCT_PRICE_INPUT}`
    );
    const productQuantityInput = document.querySelector(
      `#${ID.PRODUCT_QUANTITY_INPUT}`
    );

    if (
      !isValidProduct(
        productNameInput.value,
        productPriceInput.value,
        productQuantityInput.value
      )
    ) {
      alertProductErrorMessage(
        productNameInput.value,
        productPriceInput.value,
        productQuantityInput.value
      );
      return;
    }

    const product = new Product(
      productNameInput.value,
      productPriceInput.value,
      productQuantityInput.value
    );

    vendingMachine.addProduct(product);
    this.renderProduct(product.getProduct());
    this.initInput(productNameInput, productPriceInput, productQuantityInput);
  };

  this.renderProduct = (product) => {
    const table = document.querySelector(`#${ID.PRODUCT_TABLE}`);
    const productRow = createProductRow(
      product,
      CLASS.PRODUCT_MANAGE_ITEM,
      CLASS.PRODUCT_MANAGE
    );

    table.append(productRow);
  };

  this.renderProducts = (products) => {
    const productArray = products.map((product) => [
      product.name,
      product.price,
      product.quantity,
    ]);
    productArray.forEach((product) => {
      this.renderProduct(product);
    });
  };

  this.initInput = (...input) => {
    [...input].forEach((input) => {
      input.value = '';
    });
  };

  this.initTable = () => {
    if (JSON.parse(localStorage.getItem(STORAGE_KEY.PRODUCT))) {
      vendingMachine.products = JSON.parse(
        localStorage.getItem(STORAGE_KEY.PRODUCT)
      );
    }
    this.renderProducts(vendingMachine.products);
  };

  this.render = () => {
    const container = document.querySelector(`#${ID.MENU_VIEW}`);

    container.append(this.productAddMenu());
    this.initTable();
  };
}

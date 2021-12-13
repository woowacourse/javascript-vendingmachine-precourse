import { ID, CLASS } from '../constants/selector.js';
import { Container, SubTitle } from '../components/elements.js';
import {
  createProductForm,
  createProductTable,
  createProductRow,
} from '../components/productAddMenu.js';
import Product from '../components/product.js';
import { vendingMachine } from '../components/vendingMachine.js';
import {
  alertProductErrorMessage,
  isValidProduct,
} from '../components/validator.js';

export default function ProductAddMenuView() {
  this.productAddMenu = () => {
    const container = Container('product-add-view');
    const addProductSubTitle = SubTitle('상품 추가하기');
    const productStatusSubTitle = SubTitle('상품 현황');
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
    const table = document.querySelector('#product-table');
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
    if (JSON.parse(localStorage.getItem('product'))) {
      vendingMachine.products = JSON.parse(localStorage.getItem('product'));
    }
    this.renderProducts(vendingMachine.products);
  };

  this.render = () => {
    const container = document.querySelector('#menu-view');

    container.append(this.productAddMenu());
    this.initTable();
  };
}

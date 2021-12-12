import { ID, CLASS } from '../constants/selector.js';
import { Container, SubTitle } from '../components/elements.js';
import {
  createProductForm,
  createProductTable,
  createProductRow,
} from '../components/productAddMenu.js';
import Product from '../components/product.js';
import { vendingMachine } from '../components/vendingMachine.js';

export default function ProductAddMenuView(container) {
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
    container.setAttribute('class', 'invisible');

    return container;
  };

  this.onClickAddButton = (e) => {
    e.preventDefault();
    const productName = document.querySelector(
      `#${ID.PRODUCT_NAME_INPUT}`
    ).value;
    const productPrice = document.querySelector(
      `#${ID.PRODUCT_PRICE_INPUT}`
    ).value;
    const productQuantity = document.querySelector(
      `#${ID.PRODUCT_QUANTITY_INPUT}`
    ).value;
    const product = new Product(productName, productPrice, productQuantity);

    vendingMachine.addProduct(product);
    this.renderProduct(product.getProduct());
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

  this.initTable = () => {
    if (JSON.parse(localStorage.getItem('product'))) {
      vendingMachine.products = JSON.parse(localStorage.getItem('product'));
    }
    this.renderProducts(vendingMachine.products);
  };

  this.render = () => {
    container.append(this.productAddMenu());
    this.initTable();
  };
}

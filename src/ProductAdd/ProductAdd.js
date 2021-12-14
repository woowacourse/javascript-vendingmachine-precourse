import ProductAddTemplate from './ProductAddTemplate.js';
import ProductAddInputCheck from './ProductAddInputCheck.js';
import Product from '../Product/Product.js';

export default class ProductAdd {
  constructor() {
    const productAddTemplate = new ProductAddTemplate();
    this.product = new Product();
    document.getElementById('product-add-button').onclick =
      this.submitProductInput.bind(this);
  }

  submitProductInput(e) {
    e.preventDefault();
    const productName = document.getElementById('product-name-input').value;
    const productPrice = document.getElementById('product-price-input').value;
    const productQuantity = document.getElementById(
      'product-quantity-input'
    ).value;
    const productAddInputCheckResult = new ProductAddInputCheck().result(
      productName,
      productPrice,
      productQuantity
    );
    if (productAddInputCheckResult) {
      this.addNewProduct(productName, productPrice, productQuantity);
      this.constructor.resetInput();
    }
  }

  addNewProduct(productName, productPrice, productQuantity) {
    this.product.addProduct(
      productName,
      Number(productPrice),
      Number(productQuantity)
    );
    this.makeProductStatusTable();
  }

  makeProductStatusTable() {
    const productStatusTableBody = document.getElementById(
      'product-add-status-table-body'
    );
    productStatusTableBody.innerHTML = '';
    const productStatus = this.product.getProduct();
    productStatus.forEach((product) => {
      const productClass = document.createElement('tr');
      productClass.className = 'product-manage-item';
      productClass.innerHTML = `<td class="product-manage-name">${product.name}</td><td class="product-manage-price">${product.price}</td><td class="product-manage-quantity">${product.quantity}</td>`;
      productStatusTableBody.append(productClass);
    });
  }

  static resetInput() {
    const inputChild = document.getElementById('input-product-add').childNodes;
    inputChild.forEach((input) => {
      input.value = '';
    });
  }

  update() {
    this.makeProductStatusTable();
  }

  updateScreen() {
    this.update();
    return document.getElementById('product-add-screen');
  }
}

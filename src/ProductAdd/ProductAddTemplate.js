import ProductAddInputCheck from './ProductAddInputCheck.js';
import Product from '../Product/Product.js';

export default class ProductAddTemplate {
  constructor() {
    this.app = document.getElementById('app');
    this.productAddScreen = document.createElement('div');
    this.app.append(this.productAddScreen);
    this.product = new Product();
    this.makeBasicTemplate();
  }

  makeBasicTemplate() {
    this.productAddDiv = document.createElement('div');
    this.productStatusDiv = document.createElement('div');
    this.productAddScreen.append(this.productAddDiv, this.productStatusDiv);
    this.makeProductAdd();
  }

  makeProductAdd() {
    this.productAddTitle = document.createElement('h2');
    this.productAddTitle.innerText = '상품 추가하기';
    this.inputProductAdd = document.createElement('form');
    this.inputProductAdd.innerHTML =
      '<input type="text" placeholder="상품명" id="product-name-input" /><input type="text" placeholder="가격" id="product-price-input" /><input type="text" placeholder="수량" id="product-quantity-input" /><button type="submit" id="product-add-button">추가하기</button>';
    this.productAddDiv.append(this.productAddTitle, this.inputProductAdd);
    document.getElementById('product-add-button').onclick =
      this.submitProductInput.bind(this);
  }

  makeProductStatus() {
    this.productStatusTitle = document.createElement('h2');
    this.productStatusTitle.innerText = '상품 현황';
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
    if (!productAddInputCheckResult) return;
    this.product.addProduct(
      productName,
      Number(productPrice),
      Number(productQuantity)
    );
    this.product.printProduct();
  }

  template() {
    return this.productAddScreen;
  }
}

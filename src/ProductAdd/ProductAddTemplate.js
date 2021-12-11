import ProductAddInputCheck from './ProductAddInputCheck.js';

export default class ProductAddTemplate {
  constructor() {
    this.app = document.getElementById('app');
    this.productAddScreen = document.createElement('div');
    this.app.append(this.productAddScreen);
    this.makeBasicTemplate();
  }

  makeBasicTemplate() {
    this.productAddDiv = document.createElement('div');
    this.productAddScreen.append(this.productAddDiv);
    this.makeProductAdd();
  }

  makeProductAdd() {
    this.title = document.createElement('h2');
    this.title.innerText = '상품 추가하기';
    this.inputProductAdd = document.createElement('form');
    this.inputProductAdd.innerHTML =
      '<input type="text" placeholder="상품명" id="product-name-input" /><input type="text" placeholder="가격" id="product-price-input" /><input type="text" placeholder="수량" id="product-quantity-input" /><button type="submit" id="product-add-button">추가하기</button>';
    this.productAddDiv.append(this.title, this.inputProductAdd);
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
  }

  template() {
    return this.productAddScreen;
  }
}

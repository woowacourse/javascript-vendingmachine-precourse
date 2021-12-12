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
    this.makeProductStatus();
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
    this.productStatusTable = document.createElement('table');
    this.makeTableElement();
    this.productStatusDiv.append(
      this.productStatusTitle,
      this.productStatusTable
    );
    this.makeProductStatusTable();
  }

  makeTableElement() {
    this.productStatusTableHead = document.createElement('thead');
    this.productStatusTableHead.innerHTML =
      '<tr><th>상품명</th><th>가격</th><th>수량</th></tr>';
    this.productStatusTableBody = document.createElement('tbody');
    this.productStatusTable.append(
      this.productStatusTableHead,
      this.productStatusTableBody
    );
  }

  makeProductStatusTable() {
    this.productStatusTableBody.innerHTML = '';
    const productStatus = this.product.getProduct();
    productStatus.forEach((product) => {
      const productClass = document.createElement('tr');
      productClass.className = 'product-manage-item';
      productClass.innerHTML = `<td class="product-manage-name">${product.name}</td><td class="product-manage-price">${product.price}</td><td class="product-manage-quantity">${product.quantity}</td>`;
      this.productStatusTableBody.append(productClass);
    });
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
      this.resetInput();
    }
  }

  resetInput() {
    const inputChild = this.inputProductAdd.childNodes;
    inputChild.forEach((input) => {
      input.value = '';
    });
  }

  addNewProduct(productName, productPrice, productQuantity) {
    this.product.addProduct(
      productName,
      Number(productPrice),
      Number(productQuantity)
    );
    this.makeProductStatusTable();
  }

  template() {
    return this.productAddScreen;
  }
}

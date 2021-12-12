import ProductAdd from '../elements/ProductAdd.js';

export default class ProductAddUtil {
  constructor() {
    this.productAdd = new ProductAdd();
    this.productName = '';
    this.productPrice = 0;
    this.productQuantity = 0;
    this.addProduct();
  }

  addProduct() {
    this.productAdd.submit.addEventListener('click', e => {
      e.preventDefault();
      this.getProductName(this.productAdd.nameInput);
      this.getProductPrice(this.productAdd.priceInput);
      this.getProductQuantity(this.productAdd.quantityInput);
    });
  }

  getProductName(input) {
    this.productName = input.value;
  }

  getProductPrice(input) {
    this.productPrice = input.value;
  }

  getProductQuantity(input) {
    this.productQuantity = input.value;
  }
}

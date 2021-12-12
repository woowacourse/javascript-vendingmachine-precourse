export default class ProductAdd {
  constructor() {
    this.nameInput = document.querySelector('#product-name-input');
    this.priceInput = document.querySelector('#product-price-input');
    this.quantityInput = document.querySelector('#product-quantity-input');
    this.submit = document.querySelector('#product-add-button');
    this.tableBody = document.querySelector('.product-manage-item');
  }
}

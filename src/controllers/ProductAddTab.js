import ProductAddTabView from '../views/ProductAddTabView.js';
import { isValidProductAddition } from '../utils/validations.js';
import { ID } from '../constants/selectors.js';

export default class ProductAddTab {
  constructor(storage) {
    this.view = new ProductAddTabView();
    this.storage = storage;
  }

  initialize() {
    this.view.initialRender(this.storage.products);
    this.initInputElements();
    this.setButtonClickEvent();
  }

  initInputElements() {
    this.productNameInput = document.getElementById(ID.PRODUCT_ADD.NAME_INPUT);
    this.productPriceInput = document.getElementById(ID.PRODUCT_ADD.PRICE_INPUT);
    this.productQuantityInput = document.getElementById(ID.PRODUCT_ADD.QUANTITY_INPUT);
  }

  setButtonClickEvent() {
    const productAddButton = document.getElementById(ID.PRODUCT_ADD.BUTTON);
    productAddButton.addEventListener('click', this.onClickProductAddition.bind(this));
  }

  onClickProductAddition(e) {
    e.preventDefault();
    const newProduct = {
      name: this.productNameInput.value,
      price: Number(this.productPriceInput.value),
      quantity: Number(this.productQuantityInput.value),
    };
    if (!isValidProductAddition(newProduct)) return;
    this.storage.updateProducts(newProduct);
    this.view.update(this.storage.products);
  }
}

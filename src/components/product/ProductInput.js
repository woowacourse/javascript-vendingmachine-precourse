import Product from '../../classes/Product.js';
import { $ } from '../../utils/selector.js';
import { ID, LOCAL_DB } from '../../constants/index.js';
import { clearInput } from '../../utils/clearInput.js';
import { getLocalStorage, saveLocalStorage } from '../../utils/localStorage.js';
import { isValidProductInput } from '../../utils/valid.js';
import { productInputTemplate } from '../../utils/template/productTemplate.js';

class ProductInput {
  constructor($target, state) {
    this.$target = $target;
    this.state = state;

    this.render();
  }

  render() {
    this.addTemplate();
    this.selectDom();
    this.addEvent();
  }

  addTemplate() {
    this.$target.innerHTML = productInputTemplate();
  }

  selectDom() {
    this.$nameInput = $(`#${ID.PRODUCT_NAME_INPUT}`);
    this.$priceInput = $(`#${ID.PRODUCT_PRICE_INPUT}`);
    this.$quantityInput = $(`#${ID.PRODUCT_QUANTITY_INPUT}`);
    this.$addButton = $(`#${ID.PRODUCT_ADD_BUTTON}`);
  }

  addEvent() {
    this.$addButton.addEventListener('click', this.clickButton.bind(this));
  }

  clickButton() {
    const name = this.$nameInput.value;
    const price = Number(this.$priceInput.value);
    const quantity = Number(this.$quantityInput.value);

    if (!isValidProductInput(name, price, quantity)) {
      return;
    }
    clearInput(this.$nameInput, this.$priceInput, this.$quantityInput);

    this.updateLocalStorage(name, price, quantity);
    this.state.updateState();
  }

  updateLocalStorage(name, price, quantity) {
    const newProduct = new Product(name, price, quantity);
    const product = getLocalStorage(LOCAL_DB.PRODUCT);
    saveLocalStorage(LOCAL_DB.PRODUCT, [...product, newProduct]);
  }
}

export default ProductInput;

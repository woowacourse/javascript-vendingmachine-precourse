import $ from '../util/domSelector.js';
import { PRODUCT_MANAGEMENT } from '../constants/selector.js';
import InputProduct from '../components/inputProduct.js';
import DisplayProducts from '../components/displayProducts.js';
import displayProducts from '../templates/displayProducts.js';
import { validateProductInput } from '../util/validation.js';
import { setLocalStorage, getLocalStorage } from '../store.js';

export default class ProductManagement {
  constructor() {
    this.render();
  }

  mounted() {
    new InputProduct();
    new DisplayProducts(this.getStore());
  }

  getStore() {
    return getLocalStorage('products') || [];
  }

  setStore(products, productObject) {
    setLocalStorage('products', [...products, productObject]);
    this.update(productObject);
  }

  update(productObject) {
    $(`.${PRODUCT_MANAGEMENT.CLASS.PRODUCT_MANAGE_ITEM}`).innerHTML += displayProducts(productObject);
    $(`#${PRODUCT_MANAGEMENT.ID.PRODUCT_NAME_INPUT}`).value = '';
    $(`#${PRODUCT_MANAGEMENT.ID.PRODUCT_PRICE_INPUT}`).value = '';
    $(`#${PRODUCT_MANAGEMENT.ID.PRODUCT_QUANTITY_INPUT}`).value = '';
  }

  setEvent() {
    $(`#${PRODUCT_MANAGEMENT.ID.PRODUCT_ADD_BUTTON}`).addEventListener('click', () => {
      const productObject = {
        name: $(`#${PRODUCT_MANAGEMENT.ID.PRODUCT_NAME_INPUT}`).value,
        price: $(`#${PRODUCT_MANAGEMENT.ID.PRODUCT_PRICE_INPUT}`).value,
        quantity: $(`#${PRODUCT_MANAGEMENT.ID.PRODUCT_QUANTITY_INPUT}`).value,
      };
      if (validateProductInput(productObject)) {
        this.setStore(this.getStore(), productObject);
      }
    });
  }

  render() {
    this.mounted();
    this.setEvent();
  }
}

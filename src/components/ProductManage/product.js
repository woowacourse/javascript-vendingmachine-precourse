import { SELECTOR, COMMENT } from '../../constants/constant.js';
import { setStateToLocalStorage } from '../../utils/localStorage.js';
import { $ } from '../../utils/selector.js';
import { isValidProductAdd } from '../../utils/valid.js';
import {
  getProductInputToObject,
  clearProductItemInput,
  setProductTable,
} from './productAdd.js';

export default class Product {
  constructor($state) {
    this.$state = $state;
    this.render();
  }

  getProducts() {
    return this.$state.products;
  }

  setStateOfProduct(newState) {
    this.$state.products = [...this.$state.products, newState];
    this.render();
    setStateToLocalStorage(this.$state);
  }

  addProductItem() {
    const product = getProductInputToObject();
    const validation = isValidProductAdd(product);
    if (!validation.valid) {
      alert(validation.errorMessage);
      return;
    }
    this.setStateOfProduct(product);
    clearProductItemInput();
  }

  setEvent() {
    $(`#${SELECTOR.ID.PRODUCT_ADD_BUTTON}`).addEventListener('click', () => {
      this.addProductItem();
    });
  }

  template() {
    return `
      <br/>
      <h2>${COMMENT.PRODUCT_MENU_ADD}</h2>
      <form>
        <input
          type="text"
          id="${SELECTOR.ID.PRODUCT_NAME_INPUT}"
          placeholder="${COMMENT.PRODUCT_NAME_INPUT}"
        />
        <input
          type="number"
          id="${SELECTOR.ID.PRODUCT_PRICE_INPUT}"
          placeholder="${COMMENT.PRODUCT_PRICE_INPUT}"
          step="10" min="100"
        />
        <input
          type="number"
          id="${SELECTOR.ID.PRODUCT_QUANTITY_INPUT}"
          placeholder="${COMMENT.PRODUCT_QUANTITY_INPUT}"
        />
        <button type="button" id="${SELECTOR.ID.PRODUCT_ADD_BUTTON}">
          ${COMMENT.PRODUCT_ADD_BUTTON}
        </button>
      </form>
      <br/>
      <h2>${COMMENT.PRODUCT_MENU_MANAGE}</h2>
      <table id="${SELECTOR.ID.PRODUCT_MANAGE_TABLE}" border="1">
        <tr>
          <th>${COMMENT.PRODUCT_MANAGE_NAME}</th>
          <th>${COMMENT.PRODUCT_MANAGE_PRICE}</th>
          <th>${COMMENT.PRODUCT_MANAGE_QUANTITY}</th>
        </tr>
      </table>
    `;
  }

  render() {
    $(`#${SELECTOR.ID.BODY}`).innerHTML = this.template();
    setProductTable(this.getProducts());
    this.setEvent();
  }
}

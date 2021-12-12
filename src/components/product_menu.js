import { SELECTOR, COMMENT } from '../constants/constant.js';
import { $ } from '../utils/selector.js';
import { isValidProductAdd } from '../utils/valid.js';

export default class Product_Menu {
  constructor() {
    this.render();
    this.bindClickEvents();
  }

  bindClickEvents() {
    $(`#${SELECTOR.ID.PRODUCT_ADD_BUTTON}`).addEventListener(
      'click',
      this.addProductItem
    );
  }

  addProductItem() {
    const validation = isValidProductAdd();
    if (!validation.valid) {
      alert(validation.errorMessage);
      return;
    }
  }

  render() {
    $(`#${SELECTOR.ID.BODY}`).innerHTML = `
      <div id="${SELECTOR.ID.PRODUCT_MENU_CONTAINER}">
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
          <th>${COMMENT.PRODUCT_MANAGE_NAME}</th>
          <th>${COMMENT.PRODUCT_MANAGE_PRICE}</th>
          <th>${COMMENT.PRODUCT_MANAGE_QUANTITY}</th>
        </table>
      </div>
    `;
  }
}

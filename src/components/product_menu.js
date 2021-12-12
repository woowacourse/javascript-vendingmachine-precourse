import { SELECTOR, COMMENT } from '../constants/constant.js';
import { setLocalStorage } from '../utils/localStorage.js';
import { $ } from '../utils/selector.js';
import { isValidProductAdd } from '../utils/valid.js';

export default class Product_Menu {
  constructor(products) {
    this.products = products;
    this.render();
    this.bindClickEvents();
  }

  getProductItemInputObject() {
    const name = $(`#${SELECTOR.ID.PRODUCT_NAME_INPUT}`).value;
    const price = $(`#${SELECTOR.ID.PRODUCT_PRICE_INPUT}`).value;
    const quantity = $(`#${SELECTOR.ID.PRODUCT_QUANTITY_INPUT}`).value;
    const product = {
      name,
      price: Number(price),
      quantity: Number(quantity),
    };
    return product;
  }

  clearProductItemInput() {
    $(`#${SELECTOR.ID.PRODUCT_NAME_INPUT}`).value = '';
    $(`#${SELECTOR.ID.PRODUCT_PRICE_INPUT}`).value = '';
    $(`#${SELECTOR.ID.PRODUCT_QUANTITY_INPUT}`).value = '';
  }

  addProductItemToLocalStorage() {
    setLocalStorage('products', JSON.stringify(this.products));
  }

  addProductItemToTable(product) {
    const table = $(`#${SELECTOR.ID.PRODUCT_MANAGE_TABLE}`);
    table.innerHTML += `
        <tr class="${SELECTOR.CLASS.PRODUCT_MANAGE_ITEM}">
          <td class="${SELECTOR.CLASS.PRODUCT_MANAGE_NAME}">${product.name}</td>
          <td class="${SELECTOR.CLASS.PRODUCT_MANAGE_PRICE}">${product.price}</td>
          <td class="${SELECTOR.CLASS.PRODUCT_MANAGE_QUANTITY}">${product.quantity}</td>
        </tr>
    `;
  }

  addProductItem() {
    const product = this.getProductItemInputObject();
    const validation = isValidProductAdd(product);
    if (!validation.valid) {
      alert(validation.errorMessage);
      return;
    }
    this.products.push(product);
    this.clearProductItemInput();
    this.addProductItemToLocalStorage();
    this.addProductItemToTable(product);
  }

  bindClickEvents() {
    $(`#${SELECTOR.ID.PRODUCT_ADD_BUTTON}`).addEventListener('click', () => {
      this.addProductItem();
    });
  }

  render() {
    $(`#${SELECTOR.ID.BODY}`).innerHTML = `
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

    if (this.products) {
      const table = $(`#${SELECTOR.ID.PRODUCT_MANAGE_TABLE}`);
      table.innerHTML += this.products
        .map(
          ({ name, price, quantity }) => `
            <tr class="${SELECTOR.CLASS.PRODUCT_MANAGE_ITEM}">
              <td class="${SELECTOR.CLASS.PRODUCT_MANAGE_NAME}">${name}</td>
              <td class="${SELECTOR.CLASS.PRODUCT_MANAGE_PRICE}">${price}</td>
              <td class="${SELECTOR.CLASS.PRODUCT_MANAGE_QUANTITY}">${quantity}</td>
            </tr>
        `
        )
        .join('');
    }
  }
}

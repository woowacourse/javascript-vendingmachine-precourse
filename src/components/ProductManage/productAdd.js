import { $ } from '../../utils/selector.js';
import { SELECTOR } from '../../constants/constant.js';

export const setProductTable = (products) => {
  if (products) {
    $(`#${SELECTOR.ID.PRODUCT_MANAGE_TABLE}`).innerHTML += products
      .map(
        ({ name, price, quantity }) => `
          <tr class="${SELECTOR.CLASS.PRODUCT_MANAGE_ITEM}">
            <td class="${SELECTOR.CLASS.PRODUCT_MANAGE_NAME}">${name}</td>
            <td class="${SELECTOR.CLASS.PRODUCT_MANAGE_PRICE}">${price}</td>
            <td class="${SELECTOR.CLASS.PRODUCT_MANAGE_QUANTITY}">${quantity}</td>
          </tr>`
      )
      .join('');
  }
};

export const getProductInputToObject = () => {
  const name = $(`#${SELECTOR.ID.PRODUCT_NAME_INPUT}`).value;
  const price = $(`#${SELECTOR.ID.PRODUCT_PRICE_INPUT}`).value;
  const quantity = $(`#${SELECTOR.ID.PRODUCT_QUANTITY_INPUT}`).value;
  const product = {
    name,
    price: Number(price),
    quantity: Number(quantity),
  };
  return product;
};

export const clearProductItemInput = () => {
  $(`#${SELECTOR.ID.PRODUCT_NAME_INPUT}`).value = '';
  $(`#${SELECTOR.ID.PRODUCT_PRICE_INPUT}`).value = '';
  $(`#${SELECTOR.ID.PRODUCT_QUANTITY_INPUT}`).value = '';
};

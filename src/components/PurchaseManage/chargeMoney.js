import { $ } from '../../utils/selector.js';
import { COMMENT, SELECTOR } from '../../constants/constant.js';

export const getMoneyInput = () => {
  return Number($(`#${SELECTOR.ID.PURCHASE_CHARGE_INPUT}`).value);
};

export const setPurchaseProductTable = (products) => {
  if (products) {
    $(`#${SELECTOR.ID.PURCHASE_TABLE}`).innerHTML += products
      .map(
        ({ name, price, quantity }) => `
          <tr class="${SELECTOR.CLASS.PURCHASE_ITEM}">
            <td class="${SELECTOR.CLASS.PURCHASE_NAME}">${name}</td>
            <td class="${SELECTOR.CLASS.PURCHASE_PRICE}">${price}</td>
            <td class="${SELECTOR.CLASS.PURCHASE_QUANTITY}">${quantity}</td>
            <td><button class="${SELECTOR.CLASS.PURCHASE_BUTTON}">${COMMENT.PURCHASE_ITEM_BUTTON}</button></td>
          </tr>
          `
      )
      .join('');
  }
};

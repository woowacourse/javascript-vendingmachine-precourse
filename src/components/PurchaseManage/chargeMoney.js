import { $ } from '../../utils/selector.js';
import { COMMENT, SELECTOR, LIMIT } from '../../constants/constant.js';

export const getMoneyInput = () => {
  return Number($(`#${SELECTOR.ID.PURCHASE_CHARGE_INPUT}`).value);
};

export const setPurchaseProductTable = (products) => {
  if (products) {
    $(`#${SELECTOR.ID.PURCHASE_TABLE}`).innerHTML += products
      .map(
        ({ name, price, quantity }) => `
          <tr class="${SELECTOR.CLASS.PURCHASE_ITEM}">
            <td ${SELECTOR.DATA_SET.DATA_PRODUCT_NAME}="${name}" class="${SELECTOR.CLASS.PURCHASE_NAME}">${name}</td>
            <td ${SELECTOR.DATA_SET.DATA_PRODUCT_PRICE}="${price}" class="${SELECTOR.CLASS.PURCHASE_PRICE}">${price}</td>
            <td ${SELECTOR.DATA_SET.DATA_PRODUCT_QUANTITY}="${quantity}" class="${SELECTOR.CLASS.PURCHASE_QUANTITY}">${quantity}</td>
            <td><button class="${SELECTOR.CLASS.PURCHASE_BUTTON}">${COMMENT.PURCHASE_ITEM_BUTTON}</button></td>
          </tr>
          `
      )
      .join('');
  }
};

export const isAbleToPurchase = (product, charge) => {
  return product.quantity > 0 && product.price <= charge;
};

export const addCoinToReturnTable = (coins) => {
  $(`#${SELECTOR.ID.PURCHASE_COIN_500}`).innerHTML = `${
    coins[LIMIT.COIN_500]
  }개`;
  $(`#${SELECTOR.ID.PURCHASE_COIN_100}`).innerHTML = `${
    coins[LIMIT.COIN_100]
  }개`;
  $(`#${SELECTOR.ID.PURCHASE_COIN_50}`).innerHTML = `${coins[LIMIT.COIN_50]}개`;
  $(`#${SELECTOR.ID.PURCHASE_COIN_10}`).innerHTML = `${coins[LIMIT.COIN_10]}개`;
};

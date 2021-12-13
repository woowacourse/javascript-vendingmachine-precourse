import { $ } from '../../utils/selector.js';
import { COMMENT, SELECTOR, LIMIT } from '../../constants/constant.js';

export const setChargeAmount = (charge) => {
  if (charge != 0) {
    $(
      `#${SELECTOR.ID.PURCHASE_CHARGE_AMOUNT_DIV}`
    ).innerHTML = `${COMMENT.PURCHASE_CHARGE_AMOUNT}: <span id="${SELECTOR.ID.PURCHASE_CHARGE_AMOUNT}">${charge}</span>원`;
  }
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

export const getMoneyInput = () => {
  return Number($(`#${SELECTOR.ID.PURCHASE_CHARGE_INPUT}`).value);
};

export const getClickedProduct = (e, products) => {
  const clickProductName = e.path[2].children[0].dataset.productName;
  const clickProduct = products.find((item) => item.name === clickProductName);
  return clickProduct;
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

export const handleQuantity = (item, product, products) => {
  if (item.name == product.name) {
    item.quantity--;
    if (item.quantity == 0) {
      removeProduct(item, products);
    }
  }
};

const removeProduct = (item, products) => {
  const idx = products.indexOf(item);
  products.splice(idx, 1);
};

export const getReturnCoins = (amount, charge, coins) => {
  let coinList = [500, 100, 50, 10];
  let returnCoins = { 500: 0, 100: 0, 50: 0, 10: 0 };
  let idx = 0;
  while (amount > 0 && charge > 0) {
    if (coinList[idx] > charge || coins[coinList[idx]] == 0) {
      idx++;
    }
    if (idx > coinList.length) {
      break;
    }
    returnCoins[coinList[idx]]++;
    charge -= coinList[idx];
    coins[coinList[idx]]--;
    amount -= coinList[idx];
  }
  return returnCoins;
};

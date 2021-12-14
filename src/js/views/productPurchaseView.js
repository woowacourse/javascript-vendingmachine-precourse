import $ from '../utils/dom.js';
import store from '../utils/store.js';
import { PRICE } from '../utils/constants.js';

export const resetChargeInput = () => {
  $('#charge-input').value = '';
};

export const renderProducts = () => {
  $('#product-purchase-list').innerHTML = store
    .getLocalStorage('products')
    .map((product, idx) => {
      return `
        <tr class="product-purchase-item">
            <td data-product-name=${product.name} class="product-purchase-name">${product.name}</td>
            <td data-product-price=${product.price} class="product-purchase-price">${product.price}</td>
            <td data-product-quantity=${idx} class="product-purchase-quantity">${product.quantity}</td>
            <td><button class="purchase-button">구매하기</button></td>
        </tr>
      `;
    })
    .join('');
};

export const renderInputMoney = () => {
  $('#charge-amount').innerHTML = store.getLocalStorage('inputMoney');
};

export const renderCountCharge = countCharge => {
  const coinKinds = [PRICE.FIVE_HUNDRED_WON, PRICE.ONE_HUNDRED_WON, PRICE.FIFTY_WON, PRICE.TEN_WON];
  coinKinds.forEach((coin, idx) => {
    $(`#coin-${coin}-quantity`).innerText = `${countCharge[idx]}개`;
  });
};

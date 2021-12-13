import $ from '../utils/dom.js';
import store from '../utils/store.js';

export const resetPurchaseInput = () => {
  $('#charge-input').value = '';
};

export const printInputCharge = holdAmount => {
  $('#charge-amount').innerText = holdAmount;
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

export const renderHoldAmount = () => {
  $('#charge-amount').innerHTML = store.getLocalStorage('holdAmount');
};

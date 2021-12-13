import { convertObjectToArray } from '../utils/general.js';

export const purchaseProductsTemplate = products =>
  products
    ? products
        .map(product => {
          const { name, price, quantity } = product.getInformation();
          return `
            <tr class="product-purchase-item">
                <td class="product-purchase-name" data-product-name="${name}">${name}</td>
                <td class="product-purchase-price" data-product-price="${price}">${price}원</td>
                <td class="product-purchase-quantity" data-product-quantity="${quantity}개">${quantity}</td>
                <td><button class="purchase-button">구매하기</button></td>
            </tr>
  `;
        })
        .join('')
    : '';

export const changeStatusTemplate = coins =>
  convertObjectToArray(coins)
    .map(([unit, quantity]) => {
      return `
        <tr>
            <td>${unit}원</td>
            <td id="coin-${unit}-quantity">${quantity}개</td>
        </tr>
  `;
    })
    .join('');

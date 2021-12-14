import { convertObjectToArray } from '../utils/general.js';
import { PURCHASE_ELEMENT } from '../utils/constants.js';

const generateProductTemplate = product => {
  const { name, price, quantity } = product.getInformation();
  return `
    <tr class=${PURCHASE_ELEMENT.PRODUCT_ITEM}>
        <td class=${PURCHASE_ELEMENT.PRODUCT_NAME} data-product-name="${name}">${name}</td>
        <td class=${PURCHASE_ELEMENT.PRODUCT_PRICE} data-product-price="${price}">${price}원</td>
        <td class=${PURCHASE_ELEMENT.PRODUCT_QUANT} data-product-quantity="${quantity}개">${quantity}</td>
        <td><button class=${PURCHASE_ELEMENT.PURCHASE_BUTTON}>구매하기</button></td>
    </tr>`;
};

const generateChangeStatusTemplate = ([unit, quantity]) => `
  <tr>
    <td>${unit}원</td>
    <td id=${PURCHASE_ELEMENT.COIN_QUANT(unit)}>${quantity}개</td>
  </tr>
`;

export const purchaseProductsTemplate = products =>
  products ? products.map(generateProductTemplate).join('') : '';

export const changeStatusTemplate = coins =>
  convertObjectToArray(coins).map(generateChangeStatusTemplate).join('');
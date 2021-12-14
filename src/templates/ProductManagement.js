import { PRODUCT_ELEMENT } from '../utils/constants.js';

export const productListTemplate = products =>
  products
    ? products
        .map(product => {
          const { name, price, quantity } = product.getInformation();
          return `
        <tr class=${PRODUCT_ELEMENT.MANAGE_ITEM}>
          <td class=${PRODUCT_ELEMENT.MANAGE_NAME}>${name}</td>
          <td class=${PRODUCT_ELEMENT.MANAGE_PRICE}>${price}원</td>
          <td class=${PRODUCT_ELEMENT.MANAGE_QUANT}>${quantity}개</td>
        </tr>`;
        })
        .join('')
    : '';

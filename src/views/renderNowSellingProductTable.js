import {
  DRINK_MENU_KEY,
  DRINK_PRICE_KEY,
  DRINK_QUANTITY_KEY,
} from '../constants/drinkConstants.js';

export default function renderNowSellingProductTable(drinkStorage) {
  return drinkStorage
    .map((item, index) => {
      return `<tr class="product-purchase-item">
    <td class="product-purchase-name" data-product-name='name-${index}'>${item[DRINK_MENU_KEY]}</td>
    <td class="product-purchase-price" data-product-price= 'price-${index}'>${item[DRINK_PRICE_KEY]}</td>
    <td class="product-purchase-quantity" data-product-quantity= 'quantity-${index}'>${item[DRINK_QUANTITY_KEY]}</td>
    <td><button class="purchase-button">구매하기</button>
    </tr>`;
    })
    .join('');
}

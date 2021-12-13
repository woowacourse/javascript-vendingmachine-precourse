import {
  DRINK_STORAGE_NAME,
  NOW_PRODUCT_TABLE_TITLE,
} from '../constants/constants.js';
import {
  DRINK_MENU_KEY,
  DRINK_PRICE_KEY,
  DRINK_QUANTITY_KEY,
} from '../constants/drinkConstants.js';
import { $ } from '../dom/dom.js';
import store from '../storage/store.js';

function createProductInfoTable(productinfoelements) {
  const tabTitleElement = NOW_PRODUCT_TABLE_TITLE.map((item) => {
    return `<th>${item}</th>`;
  }).join('');
  const tableContainerTemplate = `
  <table class="product-table">
    <tr>
     ${tabTitleElement} 
    </tr>
    ${productinfoelements}
  </table>
  `;
  return tableContainerTemplate;
}

function createProductInfoElement(drinkMenuObjectList) {
  const drinkInfoElementTemplate = drinkMenuObjectList
    .map((item) => {
      return `<tr><td>${item[DRINK_MENU_KEY]}</td><td>${item[DRINK_PRICE_KEY]}</td><td>${item[DRINK_QUANTITY_KEY]}</td></tr>`;
    })
    .join('');
  return drinkInfoElementTemplate;
}

export default function renderNowProductInfo() {
  const drinkMenuObjectList = store.getLocalStorage(DRINK_STORAGE_NAME);
  if (drinkMenuObjectList) {
    $('.now-product-table-container').innerHTML = createProductInfoTable(
      createProductInfoElement(drinkMenuObjectList)
    );
  } else {
    $('.now-product-table-container').innerHTML = createProductInfoTable('');
  }
}

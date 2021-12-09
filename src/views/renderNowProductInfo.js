import {
  DRINK_STORAGE_NAME,
  NOW_PRODUCT_TABLE_TITLE,
} from '../constants/constants.js';
import { $ } from '../dom/dom.js';
import store from '../storage/store.js';

function createProductInfoTable() {
  const tableContainer = document.createElement('table');
  tableContainer.className = 'product-table';
  const tr = document.createElement('tr');
  NOW_PRODUCT_TABLE_TITLE.forEach((item) => {
    const th = document.createElement('th');
    th.innerText = item;
    tr.appendChild(th);
  });
  tableContainer.appendChild(tr);
  return tableContainer;
}

function createProductInfoElement(drinkMenuObjectList) {
  return drinkMenuObjectList.forEach((item) => {
    const tr = document.createElement('tr');
    const name = document.createElement('td');
    name.innerText = item['menu'];
    const price = document.createElement('td');
    price.innerText = item['price'];
    const quantity = document.createElement('td');
    quantity.innerText = item['quantity'];
    tr.appendChild(name);
    tr.appendChild(price);
    tr.appendChild(quantity);
    $('.product-table').appendChild(tr);
  });
}

export default function renderNowProductInfo() {
  const drinkMenuObjectList = store.getLocalStorage(DRINK_STORAGE_NAME);
  $('.now-product-table-container').appendChild(createProductInfoTable());
  if (drinkMenuObjectList) {
    createProductInfoElement(drinkMenuObjectList);
  }
}

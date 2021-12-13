import { $ } from '../util/dom.js';
import { headerConstants } from '../constant/string.js';
import { getSpanValue } from '../core/manageInputAmount.js';
import { COINS, COINS_PRICE } from '../constant/constant.js';
import { store } from '../store/store.js';
import { localStorageConstants } from '../constant/localstorage.js';

export const initRender = () => {
  makeHtmlTemplate();
  renderHeader();
};

export const makeHtmlTemplate = () => {
  const header = document.createElement('header');
  $('#app').appendChild(header);
  const main = document.createElement('main');
  $('#app').appendChild(main);
};

export const renderHeader = () => {
  const template = () => {
    return `
          <h1>${headerConstants.HEADER_TITLE}</h1>
          <div>
              <button type='button' id='product-add-menu'>${headerConstants.TAB_BUTTONS[0]}</button>
              <button type='button' id='vending-machine-manage-menu'>${headerConstants.TAB_BUTTONS[1]}</button>
              <button type='button' id='product-purchase-menu'>${headerConstants.TAB_BUTTONS[2]}</button>
          </div>`;
  };
  $('header').innerHTML = template();
};

export const renderMain = () => {
  $('main').innerHTML = '';
};

export const renderFormTypes = formConstants => {
  // prettier-ignore
  $('main').innerHTML += 
    `<h2>${formConstants.TITLE}</h2><form id=${formConstants.FORM_ID}></form>`;

  for (let i = 0; i < formConstants.INPUT_IDS.length; i++) {
    // prettier-ignore
    $(`#${formConstants.FORM_ID}`).innerHTML += 
      `<input id=${formConstants.INPUT_IDS[i]} placeholder="${formConstants.INPUT_PLACEHOLDERS[i]}"> </input>`;
  }
  // prettier-ignore
  $(`#${formConstants.FORM_ID}`).innerHTML += 
    `<button id=${formConstants.BUTTON_ID}>${formConstants.BUTTON_VALUE}</button>`;
  $('main').innerHTML += `<span id='amountSpan'></span>`;
};

export const renderTableTypes = tableConstants => {
  // prettier-ignore
  $('main').innerHTML += 
    `<h2>${tableConstants.TITLE}</h2>`
  if (tableConstants.TITLE === '잔돈') {
    $('main').innerHTML += `<button id='coin-return-button'>반환하기</button>`;
  }
  // prettier-ignore
  $('main').innerHTML +=
    `<table><thead id='${tableConstants.THEAD_ID}'><tr></tr></thead><tbody id='${tableConstants.TBODY_ID}'></tbody></table>`;
  // prettier-ignore
  for (let i=0; i<tableConstants.TH_IDS.length; i++){
      $(`#${tableConstants.THEAD_ID}`).firstChild.innerHTML +=
      `<th class='table-item' id=${tableConstants.TH_IDS[i]}>${tableConstants.TH_VALUE[i]}</th>`
    }
};

export const renderAmountSpan = (spanConstants, dataToImport, e) => {
  const spanValue = getSpanValue(dataToImport, e);
  // prettier-ignore
  $('#amountSpan').innerHTML = 
  `<p>${spanConstants.P_VALUE}: <span id="${spanConstants.SPAN_ID}">${spanValue}</span>원</p>`;
};

export const renderCoinsItems = itemConstants => {
  $(itemConstants.CONTAINER_ID).innerHTML = '';
  for (let i = 0; i < COINS.length; i++) {
    let numberOfCoins = store.getItem(COINS[i]);
    if (numberOfCoins === null) {
      numberOfCoins = 0;
    }
    $(itemConstants.CONTAINER_ID).innerHTML += ` 
      <tr>
        <td class='table-item'>${COINS_PRICE[i]}</td>
        <td class='table-item' id=${itemConstants.ITEM_ID[i]}>${numberOfCoins}개</td>
      </tr>`;
  }
};

//15줄 이하로 함수 줄이기 checkNull 만들까?
export const renderMenuItems = itemConstants => {
  $(itemConstants.CONTAINER_ID).innerHTML = '';
  const menus = store.getItem(localStorageConstants.MENU);
  if (menus === null) {
    return;
  }
  for (let menu in menus) {
    let newTr = document.createElement('tr');
    newTr.innerHTML = `<td class='table-item ${itemConstants.TD_ID[0]}' id=${itemConstants.TD_ID[0]} data-product-name=${menus[menu].name}>${menus[menu].name}</td>
    <td class='table-item ${itemConstants.TD_ID[1]}' id=${itemConstants.TD_ID[1]} data-product-price=${menus[menu].price}>${menus[menu].price}</td>
    <td class='table-item ${itemConstants.TD_ID[2]}' id=${itemConstants.TD_ID[2]} data-product-quantity=${menus[menu].quantity}>${menus[menu].quantity}</td>`;
    if (itemConstants.CONTAINER_ID === '#purchasable-product-table-body') {
      newTr.innerHTML += `<td class='table-item'><button class='purchase-button'>구매하기</button></td>`;
    }
    $(itemConstants.CONTAINER_ID).appendChild(newTr);
  }
};

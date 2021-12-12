import { $ } from '../util/dom.js';
import { COINS, COINS_PRICE } from '../constant/constant.js';
import { store } from '../store/store.js';
import { localStorageConstants } from '../constant/localstorage.js';
// prettier-ignore
import { addProductFormConstants, chargeChangesFormConstants, inputAmountFormConstants, headerConstants, productItemsTableConstants, coinItemsTableConstants, purchasableProductItemsTableConstants, changesCoinItemsTableConstants} from '../constant/string.js';

export const renderProductAddMenu = () => {
  renderMain();
  renderFormTypes(addProductFormConstants);
  renderTableTypes(productItemsTableConstants);
  renderProductItems();
};
export const renderVendingMachineManageMenu = () => {
  renderMain();
  renderFormTypes(chargeChangesFormConstants);
  renderChargeChangetAmount();
  renderTableTypes(coinItemsTableConstants);
  renderCoinsItems();
};
export const renderProductPurchaseMenu = () => {
  renderMain();
  renderFormTypes(inputAmountFormConstants);
  renderInputedMoneyAmount();
  renderTableTypes(purchasableProductItemsTableConstants);
  renderPurchableProductItems();
  renderTableTypes(changesCoinItemsTableConstants);
  renderChangesCoinsItems();
};

// initRender
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

// 공통부분
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

// productAddMenu
export const renderProductItems = () => {
  const menu = store.getItem(localStorageConstants.MENU);
  if (menu === null) {
    return;
  }
  const template = menu.map(item => {
    return `
      <tr>
        <td class='table-item' id='product-manage-name'>${item.name}</td>
        <td class='table-item' id='product-manage-price'>${item.price}</td>
        <td class='table-item' id='product-manage-quantity'>${item.quantity}</td>
      </tr>
    `;
  });
  $('tbody').innerHTML = template.join('');
};

//VendingMachineManageMenu
export const renderChargeChangetAmount = () => {
  let chargedMoney = 0;
  if (localStorage.getItem('changes') !== null) {
    chargedMoney = parseInt(localStorage.getItem('changes'), 10);
  }
  const template = () => {
    return `
      <p id='vending-machine-charge-amount'>보유 금액: ${chargedMoney}원</p>
    `;
  };
  $('main').innerHTML += template();
};
export const renderCoinsItems = () => {
  $('tbody').innerHTML = '';
  for (let i = 0; i < COINS.length; i++) {
    let numberOfCoin = store.getItem(COINS[i]);
    if (numberOfCoin === null) {
      numberOfCoin = 0;
    }
    const template = () => {
      return `
        <tr>
          <td class='table-item'>${COINS_PRICE[i]}</td>
          <td class='table-item' id='vending-machine-coin-${COINS_PRICE[i]}-quantity'>${numberOfCoin}개</td>
        </tr>
      `;
    };
    $('tbody').innerHTML += template();
  }
};

//ProductPurchaseMenu
export const renderInputedMoneyAmount = () => {
  let InputedMoney = 0;
  if (JSON.parse(localStorage.getItem('inputAmount')) !== null) {
    InputedMoney = parseInt(
      JSON.parse(localStorage.getItem('inputAmount')),
      10,
    );
  }
  const template = () => {
    return `
      <p>투입한 금액: <span id='charge-amount'>${InputedMoney}</span>원</p>
    `;
  };
  $('main').innerHTML += template();
};
export const renderPurchableProductItems = () => {
  const menu = store.getItem(localStorageConstants.MENU);
  if (menu === null) {
    return;
  }
  const template = menu.map(item => {
    return `
      <tr>
        <td class='table-item product-purchase-name' data-product-name='${item.name}'>${item.name}</td>
        <td class='table-item product-purchase-price' data-product-price='${item.price}'>${item.price}</td>
        <td class='table-item product-purchase-quantity' data-product-quantity='${item.quantity}'>${item.quantity}</td>
        <td class='table-item'><button class='purchase-button'>구매하기</button></td>
      </tr>
    `;
  });
  $('#purchasable-product-table-body').innerHTML = template.join('');
};
export const renderChangesCoinsItems = () => {
  $('#changes-coins-table-body').innerHTML = '';
  for (let i = 0; i < COINS.length; i++) {
    let numberOfCoins = store.getItem(COINS[i]);
    if (numberOfCoins === null) {
      numberOfCoins = 0;
    }
    $('#changes-coins-table-body').innerHTML += ` 
      <tr>
        <td class='table-item'>${COINS_PRICE[i]}</td>
        <td class='table-item' id='coin-${COINS_PRICE[i]}-quantity'>${numberOfCoins}개</td>
      </tr>`;
  }
};

// 외부호출
export const renderMoney = () => {
  console.log('renderMoney');
  const changes = store.getItem(localStorageConstants.CHANGES);
  $('#vending-machine-charge-amount').innerText = `보유 금액: ${changes}원`;
};
export const renderInputedMoney = () => {
  console.log('renderInputedMoney');
  const money = $('#charge-input').value;
  const localStorageValue = JSON.parse(localStorage.getItem('inputAmount'));
  let chargedMoney = 0;
  if (localStorageValue !== null) {
    chargedMoney = parseInt(localStorageValue, 10);
  }
  chargedMoney += parseInt(money);
  $('#charge-amount').innerText = `${chargedMoney}`;
  return chargedMoney;
};
export const renderReturnChanges = () => {
  console.log('renderReturnChanges');
  const localStorageValue = JSON.parse(localStorage.getItem('inputAmount'));
  let chargedMoney = 0;
  if (localStorageValue !== null) {
    chargedMoney = parseInt(localStorageValue, 10);
  }
  $('#charge-amount').innerText = `${chargedMoney}`;
};

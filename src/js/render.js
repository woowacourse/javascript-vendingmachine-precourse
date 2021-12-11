import { getCoins } from './changes.js';
import { $ } from './util/dom.js';
import { COINS, COINS_PRICE } from './constant/constant.js';

export const renderProductAddMenu = () => {
  renderCommonPart();
  renderAddProductForm();
  renderProductItemsTable();
  renderProductItems();
};
export const renderVendingMachineManageMenu = () => {
  renderCommonPart();
  renderChargeChangesForm();
  renderChargeChangetAmount();
  renderCoinTable();
  renderCoinsItems();
};
export const renderProductPurchaseMenu = () => {
  renderCommonPart();
  renderInputMoneyForm();
  renderInputedMoneyAmount();
  renderPurchableProductItemsTable();
  renderPurchableProductItems();
  renderChangesTable();
  renderChangesItems();
};

export const renderCommonPart = () => {
  $('#app').innerHTML = '';
  renderTitle();
  renderTabButtons();
};
export const renderTitle = () => {
  let title = document.createElement('h1');
  title.innerHTML = '🥤자판기🥤';
  $('#app').appendChild(title);
};
export const renderTabButtons = () => {
  const template = () => {
    return `
        <div>
            <button type='button' id='product-add-menu'>상품 관리</button>
            <button type='button' id='vending-machine-manage-menu'>잔돈 충전</button>
            <button type='button' id='product-purchase-menu'>상품 구매</button>
        </div>`;
  };
  $('#app').innerHTML += template();
};
export const renderAddProductForm = () => {
  const template = () => {
    return `
      <h2>상품 추가하기</h2>
      <form id="product-add-form">
        <input placeholder='상품명' id='product-name-input'></input>
        <input placeholder='가격' id='product-price-input'></input>
        <input placeholder='수량' id='product-quantity-input'></input>
        <button type='submit' id='product-add-button'>추가하기</button>
      </form>
    `;
  };
  $('#app').innerHTML += template();
};
export const renderChargeChangesForm = () => {
  const template = () => {
    return `
      <h2>자판기 동전 충전하기</h2>
      <form id='vending-machine-charge-form'>
        <input placeholder='자판기가 보유할 금액' id='vending-machine-charge-input'></input>
        <button type='submit' id='vending-machine-charge-button'>충전하기</button>
      </form>
    `;
  };
  $('#app').innerHTML += template();
};
export const renderChargeChangetAmount = () => {
  let chargedMoney = 0;
  if (JSON.parse(localStorage.getItem('changes')) !== null) {
    chargedMoney = parseInt(JSON.parse(localStorage.getItem('changes')), 10);
  }
  const template = () => {
    return `
      <p id='vending-machine-charge-amount'>보유 금액: ${chargedMoney}원</p>
    `;
  };
  $('#app').innerHTML += template();
};
export const renderCoinTable = () => {
  const template = () => {
    return `
      <h2>자판기가 보유한 동전</h2>
      <table class='coin-table'>
        <thead class='item-table-head'>
          <tr>
            <th class='product-items-header'>동전</th>
            <th class='product-items-header'>개수</th>
          </tr>
        </thead>
        <tbody class='item-table-body'></tbody>
      </table>
    `;
  };
  $('#app').innerHTML += template();
};
export const renderMoney = () => {
  const money = $('#vending-machine-charge-input').value;
  const localStorageValue = JSON.parse(localStorage.getItem('changes'));
  let chargedMoney = 0;
  if (localStorageValue !== null) {
    chargedMoney = parseInt(localStorageValue, 10);
  }
  chargedMoney += parseInt(money);
  $(
    '#vending-machine-charge-amount',
  ).innerText = `보유 금액: ${chargedMoney}원`;
  return chargedMoney;
};

export const renderCoinsItems = () => {
  $('.item-table-body').innerHTML = '';
  for (let i = 0; i < COINS.length; i++) {
    let coinNum = localStorage.getItem(`${COINS[i]}`);
    if (coinNum === null) {
      coinNum = 0;
    }
    const template = () => {
      return `
        <tr class='product-manage-item'>
          <td class='product-items-header'>${COINS_PRICE[i]}</td>
          <td class='product-items-header' id='vending-machine-coin-${COINS_PRICE[i]}-quantity'>${coinNum}개</td>
        </tr>
      `;
    };
    $('.item-table-body').innerHTML += template();
  }
};

export const testRender = value => {
  const template = () => {
    return `
      <div id='1'>${value}</div>
    `;
  };
  $('#app').innerHTML += template();
};

export const renderProductItemsTable = () => {
  const template = () => {
    return `
      <h2>상품 현황</h2>
      <table class='item-table'>
        <thead class='item-table-head'>
          <tr>
            <th class='product-items-header' id='product-items-name'>상품명</th>
            <th class='product-items-header' id='product-items-price'>가격</th>
            <th class='product-items-header' id='product-items-quantity'>수량</th>
          </tr>
        </thead>
        <tbody class='item-table-body'>
        </tbody>
      </table>
    `;
  };
  $('#app').innerHTML += template();
};
export const renderProductItems = () => {
  const menu = JSON.parse(localStorage.getItem('menu'));
  if (menu !== null) {
    const template = menu.map(item => {
      return `
        <tr class='product-manage-item'>
          <td class='product-items-header' id='product-manage-name'>${item.name}</td>
          <td class='product-items-header' id='product-manage-price'>${item.price}</td>
          <td class='product-items-header' id='product-manage-quantity'>${item.quantity}</td>
        </tr>
      `;
    });
    $('.item-table-body').innerHTML = template.join('');
  }
};
export const renderInputMoneyForm = () => {
  const template = () => {
    return `
      <h2>금액 투입</h2>
      <form id='charge-form'>
        <input placeholder='투입할 금액' id='charge-input'></input>
        <button type='submit' id='charge-button'>투입하기</button>
      </form>
    `;
  };
  $('#app').innerHTML += template();
};
export const renderInputedMoneyAmount = () => {
  let InputedMoney = 0;
  if (JSON.parse(localStorage.getItem('money')) !== null) {
    InputedMoney = parseInt(JSON.parse(localStorage.getItem('money')), 10);
  }
  const template = () => {
    return `
      <p>투입한 금액: <span id='charge-amount'>${InputedMoney}</span>원</p>
    `;
  };
  $('#app').innerHTML += template();
};
export const renderInputedMoney = () => {
  const money = $('#charge-input').value;
  const localStorageValue = JSON.parse(localStorage.getItem('money'));
  let chargedMoney = 0;
  if (localStorageValue !== null) {
    chargedMoney = parseInt(localStorageValue, 10);
  }
  chargedMoney += parseInt(money);
  $('#charge-amount').innerText = `${chargedMoney}`;
  return chargedMoney;
};
export const renderPurchableProductItemsTable = () => {
  const template = () => {
    return `
      <h2>구매할 수 있는 상품 현황</h2>
      <table class='item-table'>
        <thead class='item-table-head'>
          <tr>
            <th class='product-items-header'>상품명</th>
            <th class='product-items-header'>가격</th>
            <th class='product-items-header'>수량</th>
            <th class='product-items-header'>구매</th>
          </tr>
        </thead>
        <tbody class='item-table-body'>
        </tbody>
      </table>
    `;
  };
  $('#app').innerHTML += template();
};
export const renderPurchableProductItems = () => {
  const menu = JSON.parse(localStorage.getItem('menu'));
  if (menu !== null) {
    const template = menu.map(item => {
      return `
        <tr class='product-manage-item'>
          <td class='product-items-header product-purchase-name' data-product-name='${item.name}'>${item.name}</td>
          <td class='product-items-header product-purchase-price' data-product-price='${item.price}'>${item.price}</td>
          <td class='product-items-header product-purchase-quantity' data-product-quantity='${item.quantity}'>${item.quantity}</td>
          <td class='product-items-header'><button class='purchase-button'>구매하기</button></td>
        </tr>
      `;
    });
    $('.item-table-body').innerHTML = template.join('');
  }
};
export const renderChangesTable = () => {
  const template = () => {
    return `
      <h2>잔돈</h2>
      <button id='coin-return-button'>반환하기</button>
      <table class='coin-table'>
        <thead class='coin-table-head'>
          <tr>
            <th class='product-items-header'>동전</th>
            <th class='product-items-header'>개수</th>
          </tr>
        </thead>
        <tbody class='coin-table-body'></tbody>
      </table>
    `;
  };
  $('#app').innerHTML += template();
};
export const renderChangesItems = () => {
  $('.coin-table-body').innerHTML = '';
  for (let i = 0; i < COINS.length; i++) {
    let coinNum = localStorage.getItem(`${COINS[i]}`);
    if (coinNum === null) {
      coinNum = 0;
    }
    const template = () => {
      return `
        <tr class='product-manage-item'>
          <td class='product-items-header' id='coin-name'>${COINS_PRICE[i]}</td>
          <td class='product-items-header' id='coin-${COINS_PRICE[i]}-quantity'>${coinNum}개</td>
        </tr>
      `;
    };
    $('.coin-table-body').innerHTML += template();
  }
};
export const renderReturnChanges = () => {
  const localStorageValue = JSON.parse(localStorage.getItem('money'));
  let chargedMoney = 0;
  if (localStorageValue !== null) {
    chargedMoney = parseInt(localStorageValue, 10);
  }
  $('#charge-amount').innerText = `${chargedMoney}`;
};

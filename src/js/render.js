import { $ } from './util/dom.js';

export const renderProductAddMenu = () => {
  renderCommonPart();
  renderAddProductForm();
  renderProductItemsTable();
  renderProductItems();
};
export const renderVendingMachineManageMenu = () => {
  renderCommonPart();
  renderChangeChangesForm();
};
export const renderProductPurchaseMenu = () => {
  renderCommonPart();
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
export const renderChangeChangesForm = () => {
  const template = () => {
    return `
      <h2>상품 추가하기</h2>
      <form id='vending-machine-charge-form'>
        <input placeholder='자판기가 보유할 금액' id='vending-machine-charge-input'></input>
        <button type='submit' id='vending-machine-charge-button'>충전하기</button>
      </form>
      <p id='vending-machine-charge-amount'>보유 금액:</p>
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

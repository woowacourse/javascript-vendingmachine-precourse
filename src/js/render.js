import { $ } from './util/dom.js';

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
        <button type='submit' value='추가하기' id='product-add-button'>추가하기</button>
      </form>
    `;
  };
  $('#app').innerHTML += template();
};

export const renderProductItemsTable = () => {
  const template = () => {
    return `
      <h2>상품 현황</h2>
      <div class='product-items-table'>
        <div class='product-items-header' id='product-items-name'>상품명</div>
        <div class='product-items-header' id='product-items-price'>가격</div>
        <div class='product-items-header' id='product-items-quantity'>수량</div>
      </div>
    `;
  };
  $('#app').innerHTML += template();
};

export const renderProductItems = () => {
  const template = () => {
    return `
      <div class='product-manage-item'>
        <div id='product-manage-name'>상품명</div>
        <div id='product-manage-price'>가격</div>
        <div id='product-manage-quantity'>수량</div>
      </div>
    `;
  };
  $('#app').innerHTML += template();
};

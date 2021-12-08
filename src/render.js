import { $ } from './util/dom.js';

const renderTitle = () => {
  let title = document.createElement('h1');
  title.innerHTML = '🥤자판기🥤';
  $('#app').appendChild(title);
};

const renderTabButtons = () => {
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

renderTitle();
renderTabButtons();

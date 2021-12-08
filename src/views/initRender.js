import { $ } from '../dom/dom.js';

function createTabContentContainer() {
  const tabContentContainer = document.createElement('div');
  tabContentContainer.className = 'tab-content-container';
  return tabContentContainer;
}

function createButtonElement(id) {
  const button = document.createElement('button');
  button.id = id;
  if (id === 'product-add-menu') {
    button.innerText = '상품관리';
  } else if (id === 'vending-machine-manage-menu') {
    button.innerText = '잔돈충전';
  } else if (id === 'product-purchase-menu') {
    button.innerText = '상품구매';
  }
  button.style.marginRight = '10px';
  return button;
}

function createtabElementList() {
  const tabElementListContainer = document.createElement('div');
  const buttonIdList = [
    'product-add-menu',
    'vending-machine-manage-menu',
    'product-purchase-menu',
  ];
  buttonIdList.forEach((item) => {
    tabElementListContainer.appendChild(createButtonElement(item));
  });
  return tabElementListContainer;
}

function createtitleElement() {
  const titleContainer = document.createElement('h1');
  titleContainer.innerText = '🥤자판기🥤';
  titleContainer.style.marginBottom = '40px';
  return titleContainer;
}

export default function initRender() {
  $('#app').appendChild(createtitleElement());
  $('#app').appendChild(createtabElementList());
  $('#app').appendChild(createTabContentContainer());
}

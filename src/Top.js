import { HEADER, MENU } from './common/constants.js';
import createDiv from './common/CreateElement.js';
import $app from './common/elements.js';

function createMainHeader() {
  const mainHeader = document.createElement('h1');
  mainHeader.innerText = HEADER.MAIN;

  return mainHeader;
}

function createButton(attr) {
  const button = document.createElement('button');
  const [id, innerText] = attr;
  button.setAttribute('id', id);
  button.innerText = innerText;

  return button;
}

function createMenuButtons() {
  const buttonAttrs = [
    ['product-add-menu', MENU.PRODUCT_MANAGE],
    ['vending-machine-manage-menu', MENU.CHANGE_CHARGE],
    ['product-purchase-menu', MENU.PRODUCT_PURCHASE],
  ];
  const menuButtons = buttonAttrs.map((attr) => createButton(attr));

  return menuButtons;
}

function createTabMenu() {
  const menuDiv = createDiv();
  const menuButtons = createMenuButtons();
  menuButtons.forEach((button) => menuDiv.append(button));

  return menuDiv;
}

export default function createTop() {
  const mainHeader = createMainHeader();
  $app.appendChild(mainHeader);
  const tabMenu = createTabMenu();
  $app.appendChild(tabMenu);
}

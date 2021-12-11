import { HEADER, MENU } from './constants.js';
import $app from './elements.js';

function createMainHeader() {
  const mainHeader = document.createElement('h1');
  mainHeader.innerText = HEADER.MAIN;
  $app.appendChild(mainHeader);
}

createMainHeader();

function createDiv() {
  return document.createElement('div');
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
    ['product-add-menu', MENU.PRODUCT_ADD],
    ['vending-machine-manage-menu', MENU.VENDING_MACHINE_MANAGE],
    ['product-purchase-menu', MENU.PRODUCT_PURCHASE],
  ];
  const menuButtons = buttonAttrs.map((attr) => createButton(attr));

  return menuButtons;
}

function createTabMenu() {
  const menuDiv = createDiv();
  const menuButtons = createMenuButtons();
  menuButtons.forEach((button) => menuDiv.append(button));
  $app.appendChild(menuDiv);
}

createTabMenu();

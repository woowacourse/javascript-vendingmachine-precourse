import { HEADER, MENU } from './common/constants.js';
import { createButton, createDiv } from './common/CreateElement.js';
import $app from './common/elements.js';

function createMainHeader() {
  const mainHeader = document.createElement('h1');
  mainHeader.innerText = HEADER.MAIN;

  return mainHeader;
}

function createMenuButtons() {
  const buttonAttrs = [
    ['product-add-menu', MENU.PRODUCT_MANAGE],
    ['vending-machine-manage-menu', MENU.CHANGE_CHARGE],
    ['product-purchase-menu', MENU.PRODUCT_PURCHASE],
  ];
  const menuButtons = buttonAttrs.map((attr) => {
    const [id, innerText] = attr;

    return createButton(id, innerText);
  });

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
  $app.append(mainHeader);
  const tabMenu = createTabMenu();
  $app.append(tabMenu);
}

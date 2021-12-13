import { MENU } from '../common/constants.js';
import { createButton, createDiv } from '../common/CreateElement.js';

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

export default function createTabMenu() {
  const tabMenuDiv = createDiv();
  const menuButtons = createMenuButtons();
  menuButtons.forEach((button) => tabMenuDiv.append(button));

  return tabMenuDiv;
}

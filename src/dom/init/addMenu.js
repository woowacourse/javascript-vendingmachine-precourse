import { app } from '../domElement.js';
import {
  ID,
  DIV,
  BUTTON,
  PRODUCT_MANAGE_TEXT,
  CHANGES_CHARGE_TEXT,
  PRODUCT_PURCHASE_TEXT,
} from '../../constants.js';

export const addMenu = () => {
  const menu = document.createElement(DIV);

  menu.append(
    createProductAddMenuButton(),
    createVendingMachineManageMenuButton(),
    createProductPurchaseMenu()
  );

  app.appendChild(menu);
};

const createProductAddMenuButton = () => {
  const productAddMenuButton = document.createElement(BUTTON);
  productAddMenuButton.setAttribute(ID, 'product-add-menu');
  productAddMenuButton.innerHTML = PRODUCT_MANAGE_TEXT;

  return productAddMenuButton;
};

const createVendingMachineManageMenuButton = () => {
  const vendingMachineManageMenuButton = document.createElement(BUTTON);
  vendingMachineManageMenuButton.setAttribute(
    ID,
    'vending-machine-manage-menu'
  );
  vendingMachineManageMenuButton.innerHTML = CHANGES_CHARGE_TEXT;

  return vendingMachineManageMenuButton;
};

const createProductPurchaseMenu = () => {
  const productPurchaseMenuButton = document.createElement(BUTTON);
  productPurchaseMenuButton.setAttribute(ID, 'product-purchase-menu');
  productPurchaseMenuButton.innerHTML = PRODUCT_PURCHASE_TEXT;

  return productPurchaseMenuButton;
};

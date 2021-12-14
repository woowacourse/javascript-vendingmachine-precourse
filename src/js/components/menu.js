import { $ } from '../utils/querySelector.js';
import { showProductAddMenu } from '../view/productManage.js';
import { showManageMenu } from './charge/coinCharge.js';
import { showProductPurchaseMenu } from '../view/productPurchase.js';

export const vendingMachineMenuEvent = () => {
  $('#product-add-menu').addEventListener('click', showProductAddMenu);
  $('#vending-machine-manage-menu').addEventListener('click', showManageMenu);
  $('#product-purchase-menu').addEventListener('click', showProductPurchaseMenu);
};

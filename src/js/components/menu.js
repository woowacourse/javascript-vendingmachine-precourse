import { $ } from '../utils/querySelector.js';
import { showProductAddMenu } from '../view/productManage.js';
import { showVendingMachineManageMenu } from '../view/coinCharge.js';
import { showProductPurchaseMenu } from '../view/productPurchase.js';

export const vendingMachineMenuEvent = () => {
  $('#product-add-menu').addEventListener('click', showProductAddMenu);
  $('#vending-machine-manage-menu').addEventListener('click', showVendingMachineManageMenu);
  $('#product-purchase-menu').addEventListener('click', showProductPurchaseMenu);
};

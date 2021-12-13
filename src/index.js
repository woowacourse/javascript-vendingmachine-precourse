import createChangeCharge from './ChangeCharge/ChangeCharge.js';
import setCoinChargeClick from './ChangeCharge/Charge.js';
import { setProductAddClick } from './ProductManage/Add.js';
import createProductManage from './ProductManage/ProductManage.js';
import setMoneyInputClick from './ProductPurchase/Input.js';
import createProductPurchase from './ProductPurchase/ProductPurchase.js';
import { createTop, setTabMenu } from './Top/index.js';

function createElements() {
  createTop();
  createProductManage();
  createChangeCharge();
  createProductPurchase();
}

function initialize() {
  createElements();
  setTabMenu();
  setProductAddClick();
  setCoinChargeClick();
  setMoneyInputClick();
}

initialize();

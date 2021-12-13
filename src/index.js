import createChangeCharge from './ChangeCharge/ChangeCharge.js';
import setProductAddClick from './ProductManage/Add.js';
import createProductManage from './ProductManage/ProductManage.js';
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
}

initialize();

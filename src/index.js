import createChangeCharge from './ChangeCharge/ChangeCharge.js';
import createProductManage from './ProductManage/ProductManage.js';
import { createTop, setTabMenu } from './Top/index.js';

function createElements() {
  createTop();
  createProductManage();
  createChangeCharge();
}

function initialize() {
  createElements();
  setTabMenu();
}

initialize();

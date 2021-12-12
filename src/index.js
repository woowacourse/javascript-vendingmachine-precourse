import createProductManage from './ProductManage/ProductManage.js';
import { createTop, setTabMenu } from './Top/index.js';

function createElements() {
  createTop();
  createProductManage();
}

function initialize() {
  createElements();
  setTabMenu();
}

initialize();

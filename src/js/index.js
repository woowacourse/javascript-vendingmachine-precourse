import {
  renderTitle,
  renderTabButtons,
  renderAddProductForm,
  renderProductItemsTable,
} from './render.js';
import { $ } from './util/dom.js';
import { addMenu } from './addMenu.js';
import store from './store/store.js';

renderTitle();
renderTabButtons();
renderAddProductForm();
renderProductItemsTable();

$('#product-add-form').addEventListener('submit', addMenu);

const menu = store.getLocalStorage();
console.log(menu);

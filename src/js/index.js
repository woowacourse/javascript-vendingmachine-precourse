import {
  renderTitle,
  renderTabButtons,
  renderAddProductForm,
  renderProductItemsTable,
  renderProductItems,
} from './render.js';
import { $ } from './util/dom.js';
import { addMenu } from './addMenu.js';

renderTitle();
renderTabButtons();
renderAddProductForm();
renderProductItemsTable();
renderProductItems();

$('#product-add-form').addEventListener('submit', addMenu);
$('#product-add-button').addEventListener('click', addMenu);

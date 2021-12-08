import {
  renderTitle,
  renderTabButtons,
  renderAddProductForm,
  renderProductItemsTable,
} from './render.js';
import { $ } from './util/dom.js';

renderTitle();
renderTabButtons();
renderAddProductForm();
renderProductItemsTable();

const addMenu = e => {
  e.preventDefault();
  const menuName = $('#product-name-input').value;
  const menuPrice = $('#product-price-input').value;
  const menuQuantity = $('#product-quantity-input').value;
};

const checkMenuName = menuName => {
  return menuName === '';
};

$('#product-add-form').addEventListener('submit', addMenu);

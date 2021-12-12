import $ from '../common/selector.js';
import { addProductTemplates } from '../../constants/addProductTemplates.js';
import { TITLES } from '../../constants/constants.js';

export const renderProducts = state => {
  const { addMenuInputs, addMenuTable, productItem } = addProductTemplates;

  const productList = state.products
    .map(product => {
      return productItem(product);
    })
    .join('');

  $('#tab-title').innerText = TITLES.ADD_MENU_TAB;
  $('#contents').innerHTML = addMenuTable;
  $('#input_form').innerHTML = addMenuInputs;
  $('#product-list').innerHTML = productList;
};

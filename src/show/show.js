import { $ } from '../dom/dom.js';
import { SELECTOR } from '../constants/constants.js';

export const insertToHTML = () => {
  const $app = $('#app');
  const appNodes = $app.childNodes;

  $app.insertAdjacentHTML('afterbegin', SELECTOR.HEADER);
  $app.insertAdjacentHTML('beforeend', SELECTOR.PRODUCT_MANAGE);
  $app.insertAdjacentHTML('beforeend', SELECTOR.VENDING_MANAGE);
  $app.insertAdjacentHTML('beforeend', SELECTOR.PRODUCT_PURCHASE);

  appNodes[0].style.display = 'block';
  appNodes[1].style.display = 'block';
  appNodes[2].style.display = 'none';
  appNodes[3].style.display = 'none';
};

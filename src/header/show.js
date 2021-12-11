import { $ } from '../dom/dom.js';
import { SELECTOR } from './constants.js';

export const insertHTML = () => {
  const $app = $('#app');
  const appNodes = $app.childNodes;

  $app.insertAdjacentHTML('afterbegin', SELECTOR.HEADER);
  appNodes[0].style.display = 'block';
};

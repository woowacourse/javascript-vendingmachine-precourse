import {
  HTML_OF_PRODUCT_ADD_MENU,
  HTML_OF_MANAGE_MENU,
  HTML_OF_PRODUCT_PURCHASE_MENU,
} from '../utils/html.js';

export default function showMenu() {
  const $app = document.getElementById('app');

  $app.innerHTML +=
    HTML_OF_PRODUCT_ADD_MENU +
    HTML_OF_MANAGE_MENU +
    HTML_OF_PRODUCT_PURCHASE_MENU;
}

import {
  HTML_OF_TITLE,
  HTML_OF_PRODUCT_ADD_MENU_BUTTON,
  HTML_OF_MANAGE_MENU_BUTTON,
  HTML_OF_PRODUCT_PURCHASE_MENU_BUTTON,
} from '../utils/html.js';

export default function showMain() {
  const $app = document.getElementById('app');

  $app.innerHTML +=
    HTML_OF_TITLE +
    HTML_OF_PRODUCT_ADD_MENU_BUTTON +
    HTML_OF_MANAGE_MENU_BUTTON +
    HTML_OF_PRODUCT_PURCHASE_MENU_BUTTON;
}

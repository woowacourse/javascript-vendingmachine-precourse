import {
  HTML_OF_TITLE,
  HTML_OF_MENU_BUTTONS,
  HTML_OF_BOTTOM_CONTAINER,
} from '../utils/html.js';

export default function showMain() {
  const $app = document.getElementById('app');

  $app.innerHTML +=
    HTML_OF_TITLE + HTML_OF_MENU_BUTTONS + HTML_OF_BOTTOM_CONTAINER;
}

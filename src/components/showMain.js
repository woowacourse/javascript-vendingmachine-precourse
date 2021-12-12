import { HTML_OF_TITLE, HTML_OF_MENU_BUTTONS, HTML_OF_BOTTOM_CONTAINER} from '../utils/html.js';

export default function showMain() {
  document.getElementById('app').innerHTML +=
    HTML_OF_TITLE + HTML_OF_MENU_BUTTONS + HTML_OF_BOTTOM_CONTAINER;
}

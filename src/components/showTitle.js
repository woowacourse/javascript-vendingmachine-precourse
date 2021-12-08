import { HTML_OF_TITLE } from '../utils/html.js';

export default function showTitle() {
  const $app = document.getElementById('app');

  $app.insertAdjacentHTML('beforeend', HTML_OF_TITLE);
}

import { DOM } from '../utils/constant.js';

export default function importCss() {
  const link = document.createElement('link');

  link.setAttribute('rel', 'stylesheet');
  link.setAttribute('href', 'src/style/style.css');

  document.querySelector(DOM.$HEAD).appendChild(link);
}

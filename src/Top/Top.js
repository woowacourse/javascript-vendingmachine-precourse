import { HEADER } from '../common/constants.js';
import { $app } from '../common/elements.js';
import createTabMenu from './CreateTabMenu.js';

function createMainHeader() {
  const mainHeader = document.createElement('h1');
  mainHeader.innerText = HEADER.MAIN;

  return mainHeader;
}

export default function createTop() {
  const mainHeader = createMainHeader();
  $app.append(mainHeader);
  const tabMenu = createTabMenu();
  $app.append(tabMenu);
}

import HEADER from './constants.js';
import $app from './elements.js';

function createMainHeader() {
  const mainHeader = document.createElement('h1');
  mainHeader.innerText = HEADER.MAIN;
  $app.appendChild(mainHeader);
}

createMainHeader();

import { $, createDiv, ID } from './utils/dom.js';
import TabMenu from './components/TabMenu.js';

export default class VendingMachine {
  constructor() {
    this.init();
  }
  init = () => {
    // createTitle
    const $title = document.createElement('h1');
    $title.innerHTML = '자판기';
    $('#app').appendChild($title);

    new TabMenu();

    // createPageContentContainer
    const $pageContentContainer = createDiv(ID.PAGE_CONTENT);
    $('#app').appendChild($pageContentContainer);
  };
}

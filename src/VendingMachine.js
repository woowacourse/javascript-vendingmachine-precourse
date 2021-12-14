import { $ } from './utils/dom.js';
import MenuBar from './components/MenuBar.js';

export default class VendingMachine {
  constructor() {
    this.init();
  }
  init = () => {
    const $title = document.createElement('h1');
    $title.innerHTML = '🥤자판기🥤';
    $('#app').appendChild($title);

    new MenuBar();
  };
}

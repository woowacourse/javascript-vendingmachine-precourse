import { COMMENT } from '../constants/constant.js';
import { createElementWithId } from '../utils/dom.js';
import Menu from './menu.js';

export default class App {
  constructor($target) {
    this.$target = $target;
    this.menu;
    this.init();
  }

  init() {
    this.createTitle();
    this.createMenu();
  }

  createTitle() {
    const title = createElementWithId('h1', COMMENT.VENDING_MACHINE);
    this.$target.appendChild(title);
  }

  createMenu() {
    this.menu = new Menu(this.$target);
    console.log(this.menu);
  }
}

import Menu from './menu.js';

export default class App {
  constructor($target) {
    this.$target = $target;
    this.init();
  }

  init() {
    this.createMenuTabs();
  }

  createMenuTabs() {
    new Menu(this.$target);
  }
}

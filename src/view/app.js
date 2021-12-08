import createElement from '../utils/dom-utils.js';
import MenuComponents from './components/menu/menu.js';

export default class App {
  constructor($target) {
    this.$root = $target;
    this.init();
  }

  init() {
    this.$menu = new MenuComponents(this.$root);
  }
}

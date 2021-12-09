import createElement from '../utils/dom-utils.js';
import TabComponents from './components/tab/tab.js';
import { ID } from '../constant/selector.js';

export default class App {
  constructor($target) {
    this.$root = $target;
    this.tab = ID.MENU.ADD;
    this.init();
  }

  init() {
    this.$menu = new TabComponents(this.$root);
  }
}

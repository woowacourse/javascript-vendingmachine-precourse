import Menu from './components/menu.js';
import { $ } from './utils/selector.js';

export default class App {
  constructor() {
    this.$target = $('#app');
    this.init();
  }

  init() {
    new Menu(this.$target);
  }
}

new App();

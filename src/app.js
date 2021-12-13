import Header from './components/header.js';
import $ from './util/domSelector.js';

export default class App {
  constructor() {
    this.$target = $('#app');
    this.init();
  }

  init() {
    new Header(this.$target);
  }
}

new App();

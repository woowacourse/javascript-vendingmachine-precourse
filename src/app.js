import Header from './components/header.js';
import $ from './util/domSelector.js';
import globalStyle from './components/globalStyle.js';

export default class App {
  constructor() {
    this.$target = $('#app');
    this.init();
  }

  init() {
    $('head').innerHTML += globalStyle();
    new Header(this.$target);
  }
}

new App();

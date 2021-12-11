import Header from './component/Header.js';

export default class App {
  constructor($target) {
    this.$target = $target;
  }

  init() {
    this.header = new Header(this.$target);
  }
}

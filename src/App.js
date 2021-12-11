import Header from './component/Header.js';
import TabContainer from './container/TabContainer.js';

export default class App {
  constructor($target) {
    this.$target = $target;
  }

  init() {
    this.header = new Header(this.$target);
    this.tabContainer = new TabContainer(this.$target);
  }
}

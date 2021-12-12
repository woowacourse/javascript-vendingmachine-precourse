import Component from './container/root/Component.js';
import Header from './container/Header/index.js';
import Main from './container/Main/index.js';
import { CURRENT_TAB, DEFAULT_VALUES } from './constants/index.js';
import { isEmpty } from './common/helper.js';

export default class App extends Component {
  initialized() {
    this.initStorage();
  }

  template() {
    return `
      <header></header>
      <main></main>
    `;
  }

  mount() {
    new Header('header', this.$props);
    new Main('main');
  }

  initStorage() {
    if (!isEmpty(this.$storage.read(CURRENT_TAB))) return;

    const tabs = Object.keys(DEFAULT_VALUES);
    tabs.forEach((tab, index) =>
      this.$storage.create(tab, DEFAULT_VALUES[tab], tabs.length - 1 === index),
    );
  }
}

import Header from './container/Header.js';
import Main from './container/Main.js';
import Component from './container/root/Component.js';

export default class App extends Component {
  initialized() {
    this.$props = {
      ...this.$props,
      component: 'product-add-menu',
      tabData: this.$storage.read('product-add-menu'),
    };
  }

  template() {
    return `
      <header></header>
      <main></main>
    `;
  }

  mount() {
    new Header('header', this.$props);
    new Main('main', this.$props);
  }
}

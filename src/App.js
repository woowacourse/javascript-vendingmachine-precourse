import Header from './container/Header.js';
import Main from './container/Main.js';
import Component from './container/root/Component.js';

export default class App extends Component {
  template() {
    return `
      <header></header>
      <main></main>
    `;
  }

  mount() {
    new Header('header', this.$props);
    new Main('main', { ...this.$props, component: 'product-add-menu' });
  }
}

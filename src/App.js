import Header from './container/Header.js';
import Main from './container/Main.js';

export default class App {
  constructor(element) {
    this.$element = element;

    this.render();
  }

  template() {
    return `
      <header></header>
      <main></main>
    `;
  }

  render() {
    this.$element.innerHTML = this.template();
    this.mount();
  }

  mount() {
    new Header(document.querySelector('header'));
    new Main(document.querySelector('main'), { component: 'product-add-menu' });
  }
}

import showMain from './showMain.js';
import ProductAddView from './ProductAddView.js';

export default class App {
  constructor() {
    this.main = showMain();

    document
      .getElementById('product-add-menu')
      .addEventListener('click', (e) => {
        e.preventDefault();
        ProductAddView.render();
      });
  }
}

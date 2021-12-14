import ProductAddView from './productAddView.js';

export default class ProductAddComponent {
  constructor() {
    this.productAddView = new ProductAddView();
  }

  render() {
    this.productAddView.render();
  }
}

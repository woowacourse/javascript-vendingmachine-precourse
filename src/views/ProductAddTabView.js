import productAddTemplate from '../templates/product-add-template.js';

export default class ProductAddTabView {
  constructor() {
    this.contentContainer = document.querySelector('#content-container');
  }

  render() {
    this.contentContainer.innerHTML = productAddTemplate.main;
  }
}

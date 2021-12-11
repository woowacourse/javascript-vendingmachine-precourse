export default class VendingMachineView {
  constructor(products) {
    this.products = products;
  }

  renderProducts(element, templateMaker) {
    let template = '';

    this.products.forEach(product => {
      template += templateMaker(product);
    });

    element.innerHTML = template;
  }
}
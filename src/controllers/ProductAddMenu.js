export default class ProductAddMenu {
  constructor(view) {
    this.view = view;
    this.render();
  }

  render() {
    this.view.showProductAddComponent();
  }
}

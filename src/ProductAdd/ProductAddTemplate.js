export default class ProductAddTemplate {
  constructor() {
    this.makeBasicTemplate();
  }

  makeBasicTemplate() {
    this.productAddScreen = document.createElement('div');
    this.title = document.createElement('h2');
    this.title.innerText = '상품 추가하기';
    this.productAddScreen.append(this.title);
  }

  template() {
    return this.productAddScreen;
  }
}

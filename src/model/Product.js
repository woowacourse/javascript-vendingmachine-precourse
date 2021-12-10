export default class Product {
  constructor(productsInformation) {
    this.productsInformation = productsInformation;
    this.currentProductInformation = [];
  }

  getInformation = () => this.currentProductInformation;

  setInformation = (productInformation) => {
    this.currentProductInformation = productInformation;
    this.productsInformation.push(this.currentProductInformation);
  };
}

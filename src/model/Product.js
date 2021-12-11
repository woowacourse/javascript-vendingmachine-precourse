export default class Product {
  constructor(productsInformation) {
    this.productsInformation = productsInformation;
    this.currentProductInformation = [];
  }

  getProductsInformation = () => this.productsInformation;

  replaceInformation = (targetName, targetPrice, targetQuantity) => {
    this.productsInformation.find((product) => product[0] === targetName)[2] = targetQuantity;
  };

  getInformation = () => this.currentProductInformation;

  setInformation = (productInformation) => {
    this.currentProductInformation = productInformation;
    this.productsInformation.push(this.currentProductInformation);
  };
}

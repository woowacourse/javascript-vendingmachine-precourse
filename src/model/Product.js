import { PRODUCT } from '../utils/constant.js';

export default class Product {
  constructor(productsInformation) {
    this.productsInformation = productsInformation;
    this.currentProductInformation = [];
  }

  getProductsInformation = () => this.productsInformation;

  replaceInformation = (targetName, targetPrice, targetQuantity) => {
    this.productsInformation.find((product) => product[PRODUCT.NAME] === targetName)[PRODUCT.QUANTITY] = targetQuantity;
  };

  getInformation = () => this.currentProductInformation;

  setInformation = (productInformation) => {
    this.currentProductInformation = productInformation;
    this.productsInformation.push(this.currentProductInformation);
  };
}

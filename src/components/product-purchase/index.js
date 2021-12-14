import Component from '../../essential/component.js';
import * as CONSTANTS from '../../utils/constants.js';
import { loadFromStorage, saveToStorage } from '../../utils/storage.js';
import Header from './header.js';
import Inserted from './inserted.js';
import Products from './products.js';

const CONTENT = `
  <div data-component="header"></div>
  <div data-component="inserted"></div>
  <div data-component="products"></div>
`;

export default class ProductPurchase extends Component {
  template() {
    return CONTENT;
  }

  mounted() {
    new Header(this.$("[data-component='header']"), {
      sendInserted: this.sendInserted.bind(this),
    });

    new Inserted(this.$("[data-component='inserted']"));

    new Products(this.$("[data-component='products']"), {
      checkPurchase: this.checkPurchase.bind(this),
    });
  }

  sendInserted(inserted) {
    new Inserted(this.$("[data-component='inserted']"), {
      inserted,
    });
  }

  checkPurchase(index) {
    let products = loadFromStorage(CONSTANTS.STORAGE_PRODUCTS_KEY);
    let inserted = loadFromStorage(CONSTANTS.STORAGE_INSERTED_KEY);

    if (inserted < products[index].price) {
      alert(CONSTANTS.INVALID_PURCHASE_PRICE);
      return;
    }

    this.purchase(index, products, inserted);
  }

  purchase(index, products, inserted) {
    inserted -= products[index].price;
    products[index].quantity -= 1;

    if (products[index].quantity == 0) {
      products.splice(index, 1);
    }

    saveToStorage(CONSTANTS.STORAGE_PRODUCTS_KEY, products);
    saveToStorage(CONSTANTS.STORAGE_INSERTED_KEY, inserted);

    new Inserted(this.$("[data-component='inserted']"));
  }
}

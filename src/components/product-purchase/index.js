import Component from '../../essential/component.js';
import * as CONSTANTS from '../../utils/constants.js';
import { loadFromStorage, saveToStorage } from '../../utils/storage.js';
import Header from './header.js';
import Inserted from './inserted.js';
import Products from './products.js';
import Changes from './changes.js';

const CONTENT = `
  <div data-component="header"></div>
  <div data-component="inserted"></div>
  <div data-component="products"></div>
  <div data-component="changes"></div>
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

    new Changes(this.$("[data-component='changes']"), {
      checkReturnChanges: this.checkReturnChanges.bind(this),
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

  checkReturnChanges(returnedChanges) {
    let inserted = loadFromStorage(CONSTANTS.STORAGE_INSERTED_KEY);
    let remains = loadFromStorage(CONSTANTS.STORAGE_REMAINS_KEY);

    if (inserted === 0 || remains === 0) {
      alert(CONSTANTS.INVALID_RETURN_INSERTED);
      this.initReturnedChanges(returnedChanges);
      return;
    }

    this.returnChanges(
      returnedChanges,
      inserted,
      loadFromStorage(CONSTANTS.STORAGE_CHANGES_KEY),
      remains,
    );
  }

  initReturnedChanges(returnedChanges) {
    CONSTANTS.COINS.forEach(function (unit) {
      returnedChanges[unit] = 0;
    });
  }

  returnChanges(returnedChanges, inserted, changes, remains) {
    CONSTANTS.COINS.forEach(function (unit) {
      let changeRemained = changes[unit];
      let quotient = Math.floor(inserted / unit);

      inserted -= changeRemained <= quotient ? unit * changeRemained : unit * quotient;

      let quantity = changeRemained <= quotient ? changeRemained : quotient;

      returnedChanges[unit] = quantity;
      changes[unit] -= quantity;
      remains -= unit * quantity;
    });

    this.updateChanges(inserted, changes, remains);
  }

  updateChanges(inserted, changes, remains) {
    saveToStorage(CONSTANTS.STORAGE_CHANGES_KEY, changes);
    saveToStorage(CONSTANTS.STORAGE_REMAINS_KEY, remains);
    saveToStorage(CONSTANTS.STORAGE_INSERTED_KEY, inserted);

    new Inserted(this.$("[data-component='inserted']"));
  }
}

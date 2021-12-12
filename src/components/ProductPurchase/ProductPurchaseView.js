import { USER_CHARGE, VALUES, PRODUCT, USER_COINS} from '../../utils/constants.js';
import { HTML_OF_PRODUCT_PURCHASE_PART, HTML_OF_PRODUCT_PURCHASE_PART_MID, HTML_OF_PRODUCT_PURCHASE_TABLE, HTML_OF_USER_CHANGE_TABLE } from '../../utils/html.js';

export default class ProductPurchaseView {
  static render() {
    this.showPage();

    if(localStorage.getItem(USER_CHARGE) !== null) {
      this.showUserCharge();
    }
    if(localStorage.getItem(PRODUCT) !== null) {
      this.showProductTable();
    }
    if(localStorage.getItem(USER_COINS) !== null) {
      this.showUserCoinTable();
    }
  }

  static showPage() {
    document.getElementById('bottom-container').innerHTML =
      HTML_OF_PRODUCT_PURCHASE_PART + HTML_OF_PRODUCT_PURCHASE_TABLE + HTML_OF_PRODUCT_PURCHASE_PART_MID + HTML_OF_USER_CHANGE_TABLE;
  }

  static showUserCharge() {
    const userMoney = JSON.parse(localStorage.getItem(USER_CHARGE));

    document.getElementById('charge-amount').innerHTML = `${userMoney[VALUES]}`;
  }

    static showProductTable() {
      const product = JSON.parse(localStorage.getItem(PRODUCT));
  
      document.getElementById('product-purchase-table').innerHTML = HTML_OF_PRODUCT_PURCHASE_TABLE + `
      ${Object.keys(product).map((name) => `
      <tr class="product-purchase-item">
        <td class="product-purchase-name" data-product-name=${name}>${name}</td>
        <td class="product-purchase-price" data-product-price=${product[name][VALUES][0]}>${product[name][VALUES][0]}</td>
        <td class="product-purchase-quantity" data-product-quantity=${product[name][VALUES][1]}>${product[name][VALUES][1]}</td>
        <td><button class="purchase-button">구매하기</button></td>
      </tr>`).join('')}`
    }

  static showUserCoinTable() {
    const userCoins = JSON.parse(localStorage.getItem(USER_COINS));

    document.getElementById('coin-500-quantity').innerHTML = `${userCoins[500]}개`;
    document.getElementById('coin-100-quantity').innerHTML = `${userCoins[100]}개`;
    document.getElementById('coin-50-quantity').innerHTML = `${userCoins[50]}개`;
    document.getElementById('coin-10-quantity').innerHTML = `${userCoins[10]}개`;
  }
}

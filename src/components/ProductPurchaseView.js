import { ERROR_MESSAGE, USER_CHARGE, VALUES, PRODUCT } from '../utils/constants.js';
import { HTML_OF_PRODUCT_PURCHASE_PART, HTML_OF_PRODUCT_PURCHASE_PART_MID, HTML_OF_PRODUCT_PURCHASE_TABLE, HTML_OF_USER_CHANGE_TABLE } from '../utils/html.js';
import ProductPurchaseCheck from './ProductPurchaseCheck.js';

export default class ProductPurchaseView {
  static render() {
    document.getElementById('bottom-container').innerHTML =
      HTML_OF_PRODUCT_PURCHASE_PART + HTML_OF_PRODUCT_PURCHASE_TABLE + HTML_OF_PRODUCT_PURCHASE_PART_MID + HTML_OF_USER_CHANGE_TABLE;
  }

  static addEvent() {
    document.getElementById('charge-button').addEventListener('click', (e) => {
      e.preventDefault();
      const userCharge = document.getElementById('charge-input').value;
      const productPurchaseCheck = new ProductPurchaseCheck(userCharge);

      if(productPurchaseCheck.checkAll()){
        this.addUserCharge(userCharge);
      } else {
        alert(ERROR_MESSAGE);
      }

    })
  }

  static addUserCharge(userCharge) {
    const userInput = JSON.parse(localStorage.getItem(USER_CHARGE));

    if(localStorage.getItem(USER_CHARGE) === null) {
      localStorage.setItem(USER_CHARGE, JSON.stringify({values: userCharge}));
      this.showFirstUserCharge(userCharge);
    } else {
      userInput[VALUES] = parseInt(userInput[VALUES]) + parseInt(userCharge);
      localStorage.setItem(USER_CHARGE, JSON.stringify(userInput));
      this.showUserCharge(userInput);
    }
  }

  static showFirstUserCharge(userCharge) {
    document.getElementById('charge-amount').innerHTML = `${userCharge}원`;
  }

  static showUserCharge(userInput) {
    document.getElementById('charge-amount').innerHTML = `${userInput[VALUES]}원`;
  }

  //상품 표 보여주는거
  static showProductTable() {
    const product = JSON.parse(localStorage.getItem(PRODUCT));

    document.getElementById('product-purchase-table').innerHTML = HTML_OF_PRODUCT_PURCHASE_TABLE + `
    ${Object.keys(product).map((name) => `
    <tr class="product-purchase-item">
          <td class="product-purchase-name" data-product-name>${name}</td>
          <td class="product-purchase-price" data-product-price>${product[name][VALUES][0]}</td>
          <td class="product-purchase-quantity" data-product-quantity>${product[name][VALUES][1]}</td>
          <td><button class="purchase-button">구매하기</button></td>
        </tr>`).join('')}`
  }
}

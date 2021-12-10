import { ERROR_MESSAGE, USER_CHARGE, VALUES } from '../utils/constants.js';
import { HTML_OF_PRODUCT_PURCHASE_PART } from '../utils/html.js';
import ProductPurchaseCheck from './ProductPurchaseCheck.js';

export default class ProductPurchaseView {
  static render() {
    document.getElementById('bottom-container').innerHTML =
      HTML_OF_PRODUCT_PURCHASE_PART;
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
    } else {
      userInput[VALUES] = parseInt(userInput[VALUES]) + parseInt(userCharge);
      localStorage.setItem(USER_CHARGE, JSON.stringify(userInput));
    }
  }
}

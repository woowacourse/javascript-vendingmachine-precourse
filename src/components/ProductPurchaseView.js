import { ERROR_MESSAGE } from '../utils/constants.js';
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
        // localStorage에 저장
      } else {
        alert(ERROR_MESSAGE);
      }

    })
  }
}

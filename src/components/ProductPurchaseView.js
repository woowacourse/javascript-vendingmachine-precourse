import { HTML_OF_PRODUCT_PURCHASE_PART } from '../utils/html.js';

export default class ProductPurchaseView {
  static render() {
    document.getElementById('bottom-container').innerHTML =
      HTML_OF_PRODUCT_PURCHASE_PART;
  }

  // 이벤트 리스너 추가
}

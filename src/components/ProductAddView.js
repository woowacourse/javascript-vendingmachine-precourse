import { HTML_OF_PRODUCT_ADD_PART } from '../utils/html.js';

export default class ProductAddView {
  static render() {
    document.getElementById('bottom-container').innerHTML =
      HTML_OF_PRODUCT_ADD_PART;
  }
}

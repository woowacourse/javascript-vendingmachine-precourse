import Component from '../../essential/component.js';
import * as CONSTANTS from '../../utils/constants.js';
import { isNotEmpty, isValidPrice, isValidQuantity } from '../../utils/validator.js';
import Product from '../../model/product.js';

const CONTENT = `
  <h3>상품 추가하기</h3>
  <input type="text" id="product-name-input" placeholder="상품명" />
  <input type="number" id="product-price-input" placeholder="가격" />
  <input type="number" id="product-quantity-input" placeholder="수량" />
  <input type="button" id="product-add-button" value="추가하기" />
`;

export default class Header extends Component {
  template() {
    return CONTENT;
  }

  checkValidation() {
    let name = this.$('#product-name-input').value;
    let price = this.$('#product-price-input').value;
    let quantity = this.$('#product-quantity-input').value;

    return isNotEmpty(name) && isValidPrice(price) && isValidQuantity(quantity);
  }

  addProduct() {
    this.$props.sendProduct(
      new Product(
        this.$('#product-name-input').value,
        this.$('#product-price-input').value,
        this.$('#product-quantity-input').value,
      ),
    );
  }

  setEvent() {
    this.addEvent('click', '#product-add-button', () => {
      // 유효성 검사
      if (!this.checkValidation()) {
        alert(CONSTANTS.INVALID_PRODUCT_INPUT);
        return false;
      }

      this.addProduct();
    });
  }
}

import { items } from '../model/store.js';

class ManageValidator {
  static isProudctNameDuplicated(name) {
    if (items.some((item) => item.name === name)) {
      alert('중복된 상품은 추가할 수 없습니다.');
      return true;
    }
  }

  static isProductNameBlank(name) {
    if (name === '') {
      alert('상품명을 입력해주세요.');
      return true;
    }
  }

  static isProductPriceUnder100(price) {
    if (price < 100) {
      alert('상품 가격은 100원 이상으로 입력해주세요.');
      return true;
    }
  }

  static isInvalidAddItemInput({ name, price, quantity }) {
    if (this.isProudctNameDuplicated(name)) return true;
    if (this.isProductNameBlank(name)) return true;
    if (this.isProductPriceUnder100(price)) return true;
    return false;
  }
}

export default ManageValidator;

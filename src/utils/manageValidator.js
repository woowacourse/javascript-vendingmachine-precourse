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

  static isInvalidAddItemInput({ name, price, quantity }) {
    if (this.isProudctNameDuplicated(name)) return true;
    if (this.isProductNameBlank(name)) return true;
    return false;
  }
}

export default ManageValidator;

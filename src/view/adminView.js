import {
  ADMIN_ELEMENT_CLASS,
  ADMIN_ELEMENT_ID,
} from '../constants/constants.js';
import AdminModel from '../model/adminModel.js';
import TapView from './tapView.js';

export default class AdminView extends TapView {
  static render() {
    super.removeTap();
    super.appendComponentToApp(this.adminComponent());
  }

  static adminComponent() {
    const divEl = document.createElement('div');
    divEl.id = 'tap';
    super.addHtmlToElement(divEl, this.productInputComponent());
    super.addHtmlToElement(divEl, this.productListComponent());
    return divEl;
  }

  static productInputComponent() {
    return `
    <h3>상품 추가하기</h3>
    <input id=${ADMIN_ELEMENT_ID.productNameInput} type='text' placeholder='상품명'></input>
    <input id=${ADMIN_ELEMENT_ID.productPriceInput} type='number' placeholder='가격'></input>
    <input id=${ADMIN_ELEMENT_ID.productQuantityInput} type='number' placeholder='수량'></input>
    <button id=${ADMIN_ELEMENT_ID.productAddButton}>추가하기</button>
    </br>
    `;
  }

  static productListComponent() {
    return `
    <h3>상품 현황</h3>
    <table border="1">
      <td>상품명</td>
      <td>가격</td>
      <td>현황</td>
    </table>
    `;
  }

  static addProductList(adminObject) {
    const productStorage = adminObject.getProductStorage();
    if (productStorage) {
      productStorage.forEach((product) => {
        super.addHtmlToElement(
          document.querySelector('table'),
          this.productTable(product),
        );
      });
    }
  }

  static productTable({ name, price, quantity }) {
    return `
    <tr class=${ADMIN_ELEMENT_CLASS.productManageItem}>
      <td class=${ADMIN_ELEMENT_CLASS.productManageName}>${name}</td>
      <td class=${ADMIN_ELEMENT_CLASS.productManagePrice}>${price}</td>
      <td class=${ADMIN_ELEMENT_CLASS.productManageQuantity}>${quantity}</td>
    </tr>
    `;
  }

  static addNewProduct(adminObject) {
    const productStorage = adminObject.getProductStorage();
    const newProduct = productStorage[productStorage.length - 1];
    super.addHtmlToElement(
      document.querySelector('table'),
      this.productTable(newProduct),
    );
    adminObject.resetProductAddInput();
  }
}

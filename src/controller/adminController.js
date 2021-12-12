import { ADMIN_ELEMENT_ID } from '../constants/constants.js';
import AdminModel from '../model/adminModel.js';
import AdminView from '../view/adminView.js';

export default class AdminController {
  static init() {
    AdminView.render();
    const adminObject = new AdminModel();
    AdminView.addProductList(adminObject);
    this.bindEventListener(adminObject);
  }

  static bindEventListener(adminObject) {
    document
      .querySelector(`#${ADMIN_ELEMENT_ID.productAddButton}`)
      .addEventListener('click', () => {
        if (adminObject.isValidProductAdd()) {
          adminObject.addProductStorage();
          AdminView.addNewProduct(adminObject);
        }
      });
  }
}

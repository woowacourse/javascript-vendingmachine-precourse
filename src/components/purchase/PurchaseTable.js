import { CLASS, LOCAL_DB } from '../../constants/index.js';
import { getLocalStorage, saveLocalStorage } from '../../utils/localStorage.js';
import { addTableStyle } from '../../utils/tableStyles.js';
import { purchaseTableTemplate } from '../../utils/template/purchaseTemplate.js';
import { isPurchasePossible } from '../../utils/valid.js';

class PurchaseTable {
  constructor($target, state) {
    this.$target = $target;
    this.state = state;

    this.render();
  }

  render() {
    this.addTemplate();
    this.addEvent();
  }

  addTemplate() {
    this.$target.innerHTML = purchaseTableTemplate();
    addTableStyle();
  }

  addEvent() {
    this.$target.addEventListener('click', this.clickButton.bind(this));
  }

  clickButton(e) {
    if (!e.target.classList.contains(CLASS.PURCHASE_BUTTON)) {
      return;
    }
    const tr = e.target.closest('tr');
    const { productName } = tr.children[0].dataset;
    const { productPrice } = tr.children[1].dataset;

    if (!isPurchasePossible(productPrice)) {
      return;
    }

    this.updateLocalStorage(productName, productPrice);
    this.updateView();
  }

  updateLocalStorage(productName, productPrice) {
    this.updateProductStorage(productName);
    this.updatePurchaseStorage(productPrice);
  }

  updateProductStorage(productName) {
    const products = getLocalStorage(LOCAL_DB.PRODUCT);
    const index = products.findIndex(({ name }) => name === productName);
    products[index].quantity--;
    if (products[index].quantity === 0) {
      products.splice(index, 1);
    }

    saveLocalStorage(LOCAL_DB.PRODUCT, products);
  }

  updatePurchaseStorage(productPrice) {
    const purchase = getLocalStorage(LOCAL_DB.PURCHASE);

    saveLocalStorage(LOCAL_DB.PURCHASE, purchase - Number(productPrice));
  }

  updateView() {
    this.state.updateState();
    this.addTemplate();
  }
}

export default PurchaseTable;

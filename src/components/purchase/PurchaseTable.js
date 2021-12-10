import { CLASS, LOCAL_DB } from '../../constants/index.js';
import { getLocalStorage, saveLocalStorage } from '../../utils/localStorage.js';
import { addTableStyle } from '../../utils/tableStyles.js';
import { purchaseTableTemplate } from '../../utils/template/purchaseTemplate.js';
import { isPurchaseAvailable } from '../../utils/valid.js';

class PurchaseTable {
  constructor($target) {
    this.$target = $target;

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

    if (!isPurchaseAvailable(productPrice)) {
      return;
    }

    this.updateProductStorage(productName);
    this.updatePurchaseStorage(productPrice);
  }

  updateProductStorage(productName) {
    const products = getLocalStorage(LOCAL_DB.PRODUCT);
    const index = products.findIndex(({ name }) => name === productName);
    products[index].quantity--;

    saveLocalStorage(LOCAL_DB.PRODUCT, products);
  }

  updatePurchaseStorage(productPrice) {
    const purchase = getLocalStorage(LOCAL_DB.PURCHASE);

    saveLocalStorage(LOCAL_DB.PURCHASE, purchase - Number(productPrice));
  }
}

export default PurchaseTable;

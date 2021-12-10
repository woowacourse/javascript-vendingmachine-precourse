import { CLASS } from '../../constants/index.js';
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
  }
}

export default PurchaseTable;

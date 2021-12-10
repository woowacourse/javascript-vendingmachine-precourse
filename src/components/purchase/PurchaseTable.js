import { addTableStyle } from '../../utils/tableStyles.js';
import { purchaseTableTemplate } from '../../utils/template/purchaseTemplate.js';

class PurchaseTable {
  constructor($target) {
    this.$target = $target;

    this.render();
  }

  render() {
    this.addTemplate();
  }

  addTemplate() {
    this.$target.innerHTML = purchaseTableTemplate();
    addTableStyle();
  }
}

export default PurchaseTable;

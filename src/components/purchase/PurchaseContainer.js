import { $ } from '../../utils/selector.js';
import { ID } from '../../constants/index.js';
import State from '../../observer/State.js';
import PurchaseInput from './PurchaseInput.js';
import PurchaseTable from './PurchaseTable.js';
import ReturnCoinTable from './ReturnCoinTable.js';

class PurchaseContainer {
  constructor($target) {
    this.$target = $target;
    this.state = new State();

    this.render();
  }

  render() {
    this.addContainer();
    this.selectDom();
    this.mounted();
  }

  addContainer() {
    this.$target.innerHTML = `
      <div id=${ID.PURCHASE_INPUT_CONTAINER}></div>
      <div id=${ID.PURCHASE_TOTAL_CONTAINER}></div>
      <div id=${ID.PURCHASE_TABLE_CONTAINER}></div>
      <div id=${ID.RETURN_COIN_TABLE_CONTAINER}></div>
    `;
  }

  selectDom() {
    this.$inputContainer = $(`#${ID.PURCHASE_INPUT_CONTAINER}`);
    this.$totalContainer = $(`#${ID.PURCHASE_TOTAL_CONTAINER}`);
    this.$tableContainer = $(`#${ID.PURCHASE_TABLE_CONTAINER}`);
    this.$returnContainer = $(`#${ID.RETURN_COIN_TABLE_CONTAINER}`);
  }

  mounted() {
    new PurchaseInput(this.$inputContainer, this.$totalContainer, this.state);
    new PurchaseTable(this.$tableContainer, this.state);
    new ReturnCoinTable(this.$returnContainer, this.state);
  }
}

export default PurchaseContainer;

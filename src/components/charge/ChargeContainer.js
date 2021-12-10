import { $ } from '../../utils/selector.js';
import { ID } from '../../constants/index.js';
import ChargeInput from './ChargeInput.js';

class ChargeContainer {
  constructor($target) {
    this.$target = $target;

    this.render();
  }

  render() {
    this.addContainer();
    this.selectDom();
    this.mounted();
  }

  addContainer() {
    this.$target.innerHTML = `
      <div id=${ID.CHARGE_INPUT_CONTAINER}></div>
      <div id=${ID.CHARGE_TOTAL_CONTAINER}></div>
      <div id=${ID.CHARGE_TABLE_CONTAINER}></div>
    `;
  }

  selectDom() {
    this.$inputContainer = $(`#${ID.CHARGE_INPUT_CONTAINER}`);
    this.$totalContainer = $(`#${ID.CHARGE_TOTAL_CONTAINER}`);
    this.$tableContainer = $(`#${ID.CHARGE_TABLE_CONTAINER}`);
  }

  mounted() {
    new ChargeInput(this.$inputContainer, this.$totalContainer);
  }
}

export default ChargeContainer;

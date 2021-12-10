import { addTableStyle } from '../../utils/tableStyles.js';
import { chargeTableTemplate } from '../../utils/template/chargeTemplate.js';

class ChargeTable {
  constructor($target, state) {
    this.$target = $target;
    this.state = state;
    this.state.event.subscribe(this.render.bind(this));

    this.render();
  }

  render() {
    this.addTemplate();
  }

  addTemplate() {
    this.$target.innerHTML = chargeTableTemplate();
    addTableStyle();
  }
}

export default ChargeTable;

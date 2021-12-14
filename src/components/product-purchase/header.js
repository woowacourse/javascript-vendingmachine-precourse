import Component from '../../essential/component.js';
import * as CONSTANTS from '../../utils/constants.js';
import { isValidMoney } from '../../utils/validator.js';

const CONTENT = `
  <h3>금액 투입</h3>
  <input type="number" id="charge-input" placeholder="투입할 금액" />
  <input type="button" id="charge-button" value="투입하기" />
`;

export default class Header extends Component {
  template() {
    return CONTENT;
  }

  setEvent() {
    this.addEvent('click', '#charge-button', () => {
      let chargeInput = this.$('#charge-input').value;

      if (!isValidMoney(chargeInput)) {
        alert(CONSTANTS.INVALID_INSERT_INPUT);
        this.render();
        this.$('#charge-input').focus();
        return false;
      }

      this.$props.sendInserted(Number(chargeInput));
    });
  }
}

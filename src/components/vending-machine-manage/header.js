import Component from '../../essential/component.js';
import * as CONSTANTS from '../../utils/constants.js';
import { isValidMoney } from '../../utils/validator.js';

const CONTENT = `
  <h3>자판기 동전 충전하기</h3>
  <input type="number" id="vending-machine-charge-input" placeholder="자판기가 보유할 금액" />
  <input type="button" id="vending-machine-charge-button" value="충전하기" />
`;

export const RANDOM_PICK = arr => window.MissionUtils.Random.pickNumberInList(arr);

export default class Header extends Component {
  template() {
    return CONTENT;
  }

  setEvent() {
    this.addEvent('click', '#vending-machine-charge-button', () => {
      let forCharge = this.$('#vending-machine-charge-input').value;

      if (!isValidMoney(forCharge)) {
        alert(CONSTANTS.INVALID_CHARGE_INPUT);
        this.render();
        this.$('#vending-machine-charge-input').focus();
        return false;
      }

      this.$props.chargeChanges(this.makeChanges(Number(forCharge)));
    });
  }

  makeChanges(forCharge) {
    let makedCharges = { 500: 0, 100: 0, 50: 0, 10: 0 };

    while (forCharge !== 0) {
      let currCoin = RANDOM_PICK(CONSTANTS.COINS);

      if (forCharge >= currCoin) {
        forCharge -= currCoin;
        makedCharges[currCoin] += 1;
      }
    }

    return makedCharges;
  }
}

import Component from '../../../core/Component.js';
import { COINS } from '../../../constants/index.js';
import { isValidChargeInput } from '../../../validations/index.js';

const { pickNumberInList } = MissionUtils.Random;

export default class MachineChargeForm extends Component {
  template() {
    const { chargedCoins } = this.$props;

    return `
      <h3>자판기 동전 충전하기</h3>
      <form>
        <input type="number" id="vending-machine-charge-input" placeholder="자판기가 보유할 금액" />
        <button id="vending-machine-charge-button">충전하기</button>
      </form>
      <p id="vending-machine-charge-amount">보유 금액: 
        ${chargedCoins.reduce((acc, { unit, count }) => acc + unit * count, 0)}원</p>
    `;
  }

  setEvent() {
    const { chargeMachine } = this.$props;

    this.addEvent('click', '#vending-machine-charge-button', () => {
      let { value: remain } = this.$target.querySelector('#vending-machine-charge-input');

      if (!isValidChargeInput(remain)) {
        return;
      }

      while (remain > 0) {
        const randomUnit = pickNumberInList(COINS);
        if (remain - randomUnit >= 0) {
          remain -= randomUnit;
          chargeMachine(randomUnit, 1);
        }
      }
    });
  }
}

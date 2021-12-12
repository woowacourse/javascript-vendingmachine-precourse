import Component from "../root/Component.js";
import { isValidCharge } from "../../utils/validation.js";

export default class InputForm extends Component {
  setup() {
    console.log("charge input form", this);
  }

  template() {
    const { chargeAmount } = this.$props;

    return `
        <h3>자판기 동전 충전하기</h3>
            <form>
                <input id="vending-machine-charge-input" type="number" placeholder="자판기가 보유할 금액"/>
                <button id="vending-machine-charge-button">투입하기</button>
            </form>
        <p>투입한 금액: <span id="vending-machine-charge-amount">
            ${this.getChargeAmountText(chargeAmount)}
        </span></p>
      `;
  }

  mounted() {
    this.addEvent("submit", this.$target, (e) => this.onSubmitHandler(e));
  }

  onSubmitHandler(e) {
    e.preventDefault();
    const { addChargeAmount } = this.$props;
    const [money] = e.target;
    const charge = Number(money.value);

    if (isValidCharge(charge)) {
      addChargeAmount(charge);
    }
  }

  getChargeAmountText(chargeAmount) {
    return chargeAmount ? `${chargeAmount}원` : ``;
  }
}

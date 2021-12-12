import Component from "../root/Component.js";

export default class InputForm extends Component {
  setup() {
    console.log("charge input form", this);
  }

  template() {
    return `
        <h3>자판기 동전 충전하기</h3>
            <form>
                <input id="vending-machine-charge-input" type="number" placeholder="자판기가 보유할 금액"/>
                <button id="vending-machine-charge-button">투입하기</button>
            </form>
        <p>투입한 금액: <span id="vending-machine-charge-amount">999</span></p>
      `;
  }
}

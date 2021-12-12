import Component from "../root/Component.js";

export default class InputForm extends Component {
  setup() {
    console.log("input form");
  }

  template() {
    return `
        <h3>금액 투입</h3>
            <form>
                <input id="charge-input" type="number" placeholder="투입할 금액"/>
                <button id="charge-button">투입하기</button>
            </form>
        <p>투입한 금액: <span id="charge-amount">000</span></p>
    `;
  }
}

import Component from '../../../core/Component.js';

export default class PurchaseChargeForm extends Component {
  template() {
    const { userMoney } = this.$props.tabData;

    return `
      <h3>금액 투입</h3>
      <form>
        <input type="number" id="charge-input" placeholder="투입할 금액" />
        <button id="charge-button">투입하기</button>
      </form>
      <p>투입한 금액: <span id="charge-amount">${userMoney}원</span></p>
    `;
  }

  setEvent() {
    const { chargeUserMoney } = this.$props;

    this.addEvent('click', '#charge-button', () => {
      const { value } = this.$target.querySelector('#charge-input');
      chargeUserMoney(value);
    });
  }
}

import Component from '../../essential/component.js';

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

      this.$props.sendInserted(Number(chargeInput));
    });
  }
}

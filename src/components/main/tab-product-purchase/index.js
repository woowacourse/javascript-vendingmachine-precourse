import Component from '../../../core/Component.js';
import PurchaseChargeForm from '../purchase-charge-form/index.js';

export default class ProductPurchaseTab extends Component {
  setup() {
    this.$state = {
      money: 0,
    };
  }

  template() {
    return `
        <div data-component="purchase-charge-form"></div>
        <br>
        <div data-component="purchase-table"></div>
        <br>
        <div data-component="coin-return"></div>
      `;
  }

  mounted() {
    const { charge } = this;
    const { money } = this.$state;
    const $chargeForm = this.$target.querySelector('[data-component="purchase-charge-form"]');

    new PurchaseChargeForm($chargeForm, {
      money,
      charge: charge.bind(this),
    });
  }

  charge(amount) {
    const { money } = this.$state;
    this.setState({ money: money + Number(amount) });
  }
}

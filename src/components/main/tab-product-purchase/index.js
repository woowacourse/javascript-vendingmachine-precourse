import Component from '../../../core/Component.js';
import PurchaseChargeForm from '../purchase-charge-form/index.js';
import PurchaseTable from '../purchase-table/index.js';

export default class ProductPurchaseTab extends Component {
  setup() {
    this.$state = {
      money: 0,
      stock: this.$props.stock,
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
    const { charge, purchase } = this;
    const { money } = this.$state;
    const { stock } = this.$props;

    const $chargeForm = this.$target.querySelector('[data-component="purchase-charge-form"]');
    const $table = this.$target.querySelector('[data-component="purchase-table"]');

    new PurchaseChargeForm($chargeForm, {
      money,
      charge: charge.bind(this),
    });
    new PurchaseTable($table, {
      stock,
      purchase: purchase.bind(this),
    });
  }

  charge(amount) {
    const { money } = this.$state;
    this.setState({ money: money + Number(amount) });
  }

  purchase(name) {
    const { stock, money } = this.$state;
    const index = stock.findIndex(v => v.name == name);
    const { price, quantity } = stock[index];

    if (money < price || quantity <= 0) {
      return;
    }

    stock[index].quantity -= 1;
    this.setState({ stock });
  }
}

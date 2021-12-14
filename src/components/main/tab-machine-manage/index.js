import Component from '../../../core/Component.js';
import MachineChargeForm from '../machine-charge-form/index.js';
import CoinTable from '../coin-table/index.js';

export default class MachineManageTab extends Component {
  setup() {
    this.$state = {
      chargedCoins: this.$props.chargedCoins,
    };
  }

  template() {
    return `
        <div data-component="machine-charge-form"></div>
        <br>
        <div data-component="machine-charge-table"></div>
      `;
  }

  mounted() {
    const { charge, apply } = this;
    const { chargedCoins } = this.$state;
    const $chargeForm = this.$target.querySelector('[data-component="machine-charge-form"]');
    const $chargeTable = this.$target.querySelector('[data-component="machine-charge-table"]');

    new MachineChargeForm($chargeForm, {
      chargedCoins,
      charge: charge.bind(this),
      apply: apply.bind(this),
    });
    new CoinTable($chargeTable, {
      chargedCoins,
      title: '자판기가 보유하고 있는 동전',
    });
  }

  charge(unit, count) {
    const { chargedCoins } = this.$state;
    const index = chargedCoins.findIndex(v => v.unit == unit);

    chargedCoins[index].count += count;
  }

  apply() {
    const { chargedCoins } = this.$state;
    this.setState(chargedCoins);
    console.log(chargedCoins);
  }
}

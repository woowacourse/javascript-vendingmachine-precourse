import Component from '../../../core/Component.js';
import MachineChargeForm from '../machine-charge-form/index.js';
import CoinTable from '../coin-table/index.js';

export default class MachineManageTab extends Component {
  template() {
    return `
        <div data-component="machine-charge-form"></div>
        <br>
        <div data-component="machine-charge-table"></div>
      `;
  }

  mounted() {
    const { tabData, chargeMachine } = this.$props;
    const $chargeForm = this.$target.querySelector('[data-component="machine-charge-form"]');
    const $chargeTable = this.$target.querySelector('[data-component="machine-charge-table"]');

    new MachineChargeForm($chargeForm, {
      chargedCoins: tabData.chargedCoins,
      chargeMachine,
    });
    new CoinTable($chargeTable, {
      coins: tabData.chargedCoins,
      description: '자판기가 보유하고 있는 동전',
    });
  }
}

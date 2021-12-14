import Component from '../../core/Component.js';
import ChargeCoinSection from './ChargeCoinSection.js';
import ChargedCoinSection from './ChargedCoinSection.js';
import $ from '../../helpers.js';

export default class VendingMachineManageMenu extends Component {
  setup() {
    const { coins } = this.props;
    this.state = { coins };
  }

  template() {
    return `
      <section id='charge-coin-section'></section>
      <section id='charged-coin-section'></section>
    `;
  }

  mounted() {
    const { coins, refill } = this.props;
    new ChargeCoinSection($('#charge-coin-section'), { coins, refill });
    new ChargedCoinSection($('#charged-coin-section'), { coins });
  }
}

import Component from '../../core/Component.js';
import ChargeCoinSection from './sections/ChargeCoinSection.js';
import ChargedCoinSection from './sections/ChargedCoinSection.js';
import $ from '../../utils/helpers.js';

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

  afterMount() {
    const { coins, refill } = this.props;
    new ChargeCoinSection($('#charge-coin-section'), { coins, refill });
    new ChargedCoinSection($('#charged-coin-section'), { coins });
  }
}

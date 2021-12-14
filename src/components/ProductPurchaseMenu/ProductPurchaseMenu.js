import Component from '../../core/Component.js';
import ChargeSection from './sections/ChargeSection.js';
import CoinReturnSection from './sections/CoinReturnSection.js';
import ProductPurchaseSection from './sections/ProductPurchaseSection.js';
import $ from '../../utils/helpers.js';

export default class ProductPurchaseMenu extends Component {
  template() {
    return `
      <section id='charge-section'></section>
      <section id='product-purchase-section'></section>
      <section id='coin-return-section'></section>
    `;
  }

  afterMount() {
    const {
      chargedAmount,
      items,
      returnedCoins,
      charge,
      purchase,
      returnChange,
    } = this.props;

    new ChargeSection($('#charge-section'), { chargedAmount, charge });
    new ProductPurchaseSection($('#product-purchase-section'), {
      items,
      chargedAmount,
      purchase,
    });
    new CoinReturnSection($('#coin-return-section'), {
      returnedCoins,
      returnChange,
    });
  }
}

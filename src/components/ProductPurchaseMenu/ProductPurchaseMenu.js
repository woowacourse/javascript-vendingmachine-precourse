import Component from '../../core/Component.js';
import ChargeSection from './ChargeSection.js';
import CoinReturnSection from './CoinReturnSection.js';
import ProductPurchaseSection from './ProductPurchaseSection.js';
import $ from '../../helpers.js';

export default class ProductPurchaseMenu extends Component {
  template() {
    return `
      <section id='charge-section'></section>
      <section id='product-purchase-section'></section>
      <section id='coin-return-section'></section>
    `;
  }

  mounted() {
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
      purchase,
    });
    new CoinReturnSection($('#coin-return-section'), {
      returnedCoins,
      returnChange,
    });
  }
}

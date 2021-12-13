import Component from '../../../core/Component.js';

export default class ProductPurchaseTab extends Component {
  template() {
    return `
        <div data-component="purchase-charge"></div>
        <div data-component="product-manage"></div>
        <div data-component="coin-return"></div>
      `;
  }

  mounted() {}
}

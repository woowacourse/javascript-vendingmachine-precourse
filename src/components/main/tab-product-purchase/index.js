import Component from '../../../core/Component.js';

export default class ProductPurchaseTab extends Component {
  template() {
    return `
        <div data-component="purchase-charge"></div>
        <br>
        <div data-component="product-manage"></div>
        <br>
        <div data-component="coin-return"></div>
      `;
  }

  mounted() {}
}

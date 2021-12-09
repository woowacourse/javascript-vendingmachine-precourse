import { $ } from '../common/helper.js';
import Content from '../presentational/Content.js';
import Component from './root/Component.js';

export default class Main extends Component {
  initialized() {
    const tabData = this.$storage.read(this.$props.component);
    this.$props = { ...this.$props, tabData };
    this.$eventBus.addEvent('form', 'button', 'click', this, this.addProduct);
  }

  template() {
    return `
    <div data-component=${this.$props.component}>
      ${Content(this.$props)}
    <div>
    `;
  }

  mount() {
    this.$eventBus.dispatch('form', 'button', 'click');
  }

  addProduct(event, scope) {
    const { component } = scope.$props;

    event.preventDefault();
    const name = $('#product-name-input');
    const price = $('#product-price-input');
    const quantity = $('#product-quantity-input');

    // 유효성 검사

    scope.$storage.add(component, {
      name: name.value,
      price: price.value,
      quantity: quantity.value,
    });
  }
}

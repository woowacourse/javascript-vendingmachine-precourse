import { $, isIncludes, isNull } from '../common/helper.js';
import { isValidate } from '../common/validations.js';
import { EMPTY } from '../constants/index.js';
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
    event.preventDefault();
    const items = scope.$storage.read(scope.$props.component);

    const inputValues = [
      $('#product-name-input'),
      $('#product-price-input'),
      $('#product-quantity-input'),
    ];

    const [name, price, quantity] = Array.from(inputValues).reduce((result, target, _, array) => {
      if (!isValidate(target, items)) {
        array.splice(1);
        return [...result];
      }
      return [...result, target];
    }, []);

    if (isIncludes(undefined, [name, price, quantity])) {
      inputValues.forEach((_, index) => {
        inputValues[index].value = EMPTY;
      });
      return;
    }

    scope.$storage.add(scope.$props.component, {
      name: name.value,
      price: price.value,
      quantity: quantity.value,
    });

    inputValues.forEach((_, index) => {
      inputValues[index].value = EMPTY;
    });
  }
}

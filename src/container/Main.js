import Content from '../presentational/Content.js';
import Component from './root/Component.js';

export default class Main extends Component {
  initialized() {
    this.$props = {
      ...this.$props,
      component: this.$props.component || 'product-add-menu',
    };
  }

  template() {
    return `
    <div data-component=${this.$props.component}>
      ${Content(this.$props)}
    <div>
    `;
  }
}

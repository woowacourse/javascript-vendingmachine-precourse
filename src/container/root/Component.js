import { $ } from '../../common/index.js';

export default class Component {
  constructor(selector, props) {
    this.$element = $(selector);
    this.$props = props;

    this.render();
  }

  template() {
    return ``;
  }

  render() {
    this.$element.innerHTML = this.template();
    this.mount();
  }

  mount() {}
}

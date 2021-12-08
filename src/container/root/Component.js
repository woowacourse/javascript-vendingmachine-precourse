import { $ } from '../../common/index.js';
import Storage from '../../storage/Storage.js';

export default class Component {
  constructor(selector, props) {
    this.$element = $(selector);
    this.$props = props;
    this.$storage = Storage;

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

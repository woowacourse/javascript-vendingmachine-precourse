import { $ } from '../../common/helper.js';
import Storage from '../../storage/Storage.js';
import EventBus from '../../common/EventBus.js';

export default class Component {
  constructor(selector, props) {
    this.$element = $(selector);
    this.$props = props;
    this.$storage = Storage;
    this.$eventBus = EventBus;

    this.initialized();
    this.render();
  }

  set initProps({ APP_TITLE, APP_MENU, component }) {
    this.$props = {
      APP_TITLE,
      APP_MENU,
      component,
      tabData: this.itemGetter(component),
    };
  }

  initialized() {}

  template() {
    return ``;
  }

  render() {
    this.$element.innerHTML = this.template();
    this.mount();
  }

  mount() {}

  itemGetter(key) {
    return this.$storage.read(key);
  }
}

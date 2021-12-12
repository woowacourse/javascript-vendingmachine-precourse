export default class Component {
  constructor($target, $props) {
    this.$target = $target;
    this.$props = $props;
    this.$state = {};
    this.init();
    this.render();
    this.setEvent();
  }

  init() {}

  mounted() {}

  template() {
    return '';
  }

  render() {
    this.$target.innerHTML = this.template();
    this.mounted();
  }

  setEvent() {}

  setState(newState) {
    this.$state = Object.assign(this.$state, newState);
    this.render();
  }

  addEvent(eventType, selector, handler) {
    const eventTarget = this.$target.querySelector(selector);

    eventTarget.addEventListener(eventType, handler);
  }
}

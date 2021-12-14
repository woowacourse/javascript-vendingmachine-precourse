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
    const children = [...this.$target.querySelectorAll(selector)];

    const isTarget = (target) => children.includes(target) || target.closest(selector);
    this.$target.addEventListener(eventType, (event) => {
      if (!isTarget(event.target)) return;
      handler(event);
    });
  }
}

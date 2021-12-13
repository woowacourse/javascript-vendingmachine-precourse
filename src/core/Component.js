import tc from './utils/tc.js';

export default class Component {
  constructor(
    $target,
    props = null,
    _0 = tc($target, HTMLElement),
    _1 = tc(props, 'object')
  ) {
    this.$target = $target;
    this.props = props;
    this.setup();
    this.setEvent();
    this.render();
  }

  setup() {}

  mounted() {}

  template() {
    return '';
  }

  render() {
    this.$target.innerHTML = this.template();
    this.mounted();
  }

  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.render();
  }

  setEvent() {}

  addEvent(
    type,
    selector,
    callback,
    _0 = tc(type, 'string'),
    _1 = tc(selector, 'string'),
    _2 = tc(callback, 'function')
  ) {
    const children = [...this.$target.querySelectorAll(selector)];
    const isTarget = (target) =>
      children.includes(target) || target.closest(selector);

    this.$target.addEventListener(type, (e) => {
      if (!isTarget(e.target)) return false;

      e.preventDefault();
      callback(e);
    });
  }
}

export default class Component {
  constructor($target, $props) {
    this.$target = $target;
    this.$props = $props;
    this.$state;
    this.setup();
    this.render();
  }

  setup() {}
  template() {
    return ``;
  }
  mounted() {}
  render() {
    this.$target.innerHTML = this.template();
    this.mounted();
  }
  setState() {}
  addEvent(eventType, selector, callback) {}
}

/* eslint-disable class-methods-use-this */

export default class Component {
  $target;

  $state;

  $props;

  constructor($target, $props) {
    this.$target = $target;
    this.$props = $props;
    this.initialize();
    this.setEvent();
    this.render();
  }

  initialize() {}

  componentDidMount() {}

  template() {
    return "";
  }

  render() {
    this.$target.innerHTML = this.template();
    this.componentDidMount();
  }

  setEvent() {}

  setState(newState) {
    this.$state = { ...this.$state, ...newState };
    this.render();
  }
}

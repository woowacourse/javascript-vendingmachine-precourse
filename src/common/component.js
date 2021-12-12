/* eslint-disable class-methods-use-this */

export default class Component {
  $target;

  $state;

  $props;

  constructor($target, $props) {
    this.$target = $target;
    this.$props = $props;
    this.initialize();
    this.render();
    this.setEvent();
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

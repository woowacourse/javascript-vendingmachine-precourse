/* eslint-disable class-methods-use-this */
class Component {
  $element;

  $children;

  state;

  onStateChanged;

  constructor($element, props) {
    this.$element = $element;
    this.children = [];
    this.state = {};

    Object.entries(props || {}).forEach(([key, value]) => {
      this.$element[key] = value;
    });
  }

  setEvent() {}

  setState(newStateParams) {
    this.state = { ...this.state, ...newStateParams };
    this.render();
    this.onStateChanged?.(newStateParams);
  }

  render() {
    this.beforeRender();
    this.$element.innerHTML = '';
    this.children.forEach((child) => {
      this.$element.appendChild(child.$element);
      child.render();
    });
    this.afterRender();
  }

  beforeRender() {}

  afterRender() {}
}

export default Component;

/* eslint-disable class-methods-use-this */
class Component {
  $element;

  $children;

  #state;

  onStateChanged;

  constructor($element, props) {
    this.$element = $element;

    this.children = [];

    Object.entries(props || {}).forEach(([key, value]) => {
      this.$element[key] = value;
    });
  }

  setEvent() {}

  get state() {
    return this.#state;
  }

  setState(newStateParams) {
    this.#state = { ...this.#state, ...newStateParams };
    this.update();
    this.onStateChanged?.(newStateParams);
  }

  render() {
    this.$element.innerHTML = '';
    this.children.forEach((child) => {
      this.$element.appendChild(child.$element);
      child.render();
    });
  }

  update() {}
}

export default Component;

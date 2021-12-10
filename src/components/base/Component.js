/* eslint-disable class-methods-use-this */
class Component {
  $element;

  #state;

  onStateChanged;

  constructor($element, props) {
    this.$element = $element;

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
    this.onStateChanged?.(newStateParams);
  }

  render() {}

  renderChildrenView(children) {
    this.$element.innerHTML = '';
    children.forEach(($child) => {
      this.$element.appendChild($child.$element);
      $child.render();
    });
  }

  // 제거 예정
  renderText(text) {
    this.$element.innerHTML = text;
  }

  update() {}
}

export default Component;

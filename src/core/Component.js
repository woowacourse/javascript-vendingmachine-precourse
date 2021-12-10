import { storeObserver } from './Store.js';

export default class Component {
  constructor(htmlElement, props = {}) {
    this.$container = htmlElement;
    this.props = props;
    this.children = [];
    this.state = {};
    this.setUp();
  }

  initDom() {}

  bindEvents() {}

  initChildren() {}

  getGlobalState() {}

  render() {}

  setUp() {
    this.initDom();
    this.initChildren();
    this.mount();
    storeObserver(
      () => this.getGlobalState(),
      () => this.updateComponent()
    );
  }

  mount() {
    this.render();
    this.bindEvents();
    this.children.forEach(child =>
      this.$container.appendChild(child.returnRoot())
    );
  }

  returnRoot() {
    return this.$container;
  }

  renderChildren() {
    this.children.updateComponent();
    this.children.forEach(child =>
      this.$container.appendChild(child.returnRoot())
    );
  }

  updateComponent() {
    this.render();
    this.renderChildren();
  }

  setState(nextState) {
    this.state = { ...this.state, ...nextState };
    this.updateComponent();
  }
}

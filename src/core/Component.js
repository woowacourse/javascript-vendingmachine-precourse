import { storeObserver } from './Store.js';
import { $ } from '../utils/dom.js';
import { EVENT_TYPE } from '../utils/constants.js';
import { isObjectEmpty } from '../utils/general.js';

export default class Component {
  constructor(htmlElement, props = {}) {
    this.$container = htmlElement;
    this.props = props;
    this.propsKeys = Object.keys(props);
    this.children = [];
    this.state = {};
    this.setUp();
  }

  bindEvents() {}

  initState() {}

  initChildren() {}

  getGlobalState() {}

  render() {}

  setUp() {
    this.initState();
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

  returnId() {
    return `#${this.$container.id}`;
  }

  returnRoot() {
    return this.$container;
  }

  renderChildren() {
    this.children.forEach(child => {
      if (child.setProps(this.state)) {
        $(child.returnId()).replaceWith(child.returnRoot());
      }
    });
  }

  updateComponent() {
    this.render();
    this.renderChildren();
  }

  setState(nextState) {
    this.state = { ...this.state, ...nextState };
    this.updateComponent();
  }

  setProps(nextProps) {
    const newProps = {};
    this.propsKeys.forEach(key => {
      if (nextProps[key] && nextProps[key] !== this.props[key])
        newProps[key] = nextProps[key];
    });
    if (isObjectEmpty(newProps)) return false;
    this.props = { ...this.props, ...newProps };
    this.updateComponent();
    return true;
  }

  appendRootEvents(type, handler) {
    this.$container.addEventListener(type, event => {
      if (type === EVENT_TYPE.SUBMIT) event.preventDefault();
      handler(event);
    });
  }
}

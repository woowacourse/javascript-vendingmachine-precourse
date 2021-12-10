import { isEquals } from '../common/helper.js';

class Storage {
  constructor() {
    this.state = localStorage;
    this.listeners = [];
    this.excludeKeys = '';
    this.optionalKey = '';
  }

  get keys() {
    return Array.from({ length: this.state.length }).map((_, index) => this.state.key(index));
  }

  subscribe(listener) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => !isEquals(l, listener));
    };
  }

  notify(component, items) {
    this.listeners.forEach(listener => listener(component, items));
  }

  create(key, value, afterSet) {
    this.setState({ key, value }, afterSet);
  }

  creation(key, items) {
    Object.keys(items).forEach($key => {
      const isExcludeKey = isEquals(this.excludeKeys, $key);
      this.state.setItem(
        isExcludeKey ? key : $key,
        isExcludeKey ? JSON.stringify(items) : JSON.stringify(items[$key]),
      );
    });
    this.notify(key, items);
  }

  add(key, item) {
    const value = this.read(key) || {};
    this.setState({ key, value: [...value, item] });
  }

  read(key) {
    const item = this.state.getItem(key);
    return isEquals(item, 'undefined') ? [] : JSON.parse(item);
  }

  update(key, subKey, newItem) {
    const value = { ...this.read(key), [subKey]: newItem };
    this.setState({ key, value }, false);
  }

  setState({ key, value }, afterSet = true) {
    this.state.setItem(key, JSON.stringify(value));
    if (afterSet && !isEquals(this.excludeKeys, key)) this.afterSetState(key, value);

    this.notify(key, value);
  }

  afterSetState(key, value) {
    const $key = this.optionalKey;
    this.state.setItem($key, JSON.stringify({ ...this.read($key), [key]: value }));
  }
}

export default new Storage();

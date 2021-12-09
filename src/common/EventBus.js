import { $all, $closest } from './helper.js';

class EventBus {
  constructor() {
    this.handlers = {};
  }

  addEvent(elements, selector, type, scope, callback, useCapture = false) {
    const eventKey = this.generateKey(elements, selector, type);
    if (!this.hasProperty(eventKey))
      this.handlers[eventKey] = { elements, selector, type, scope, callback, useCapture };
  }

  dispatch(elements, selector, type) {
    this.delegation(this.handlers[this.generateKey(elements, selector, type)]);
  }

  remove(elements, selector, type) {
    if (!this.hasProperty(this.generateKey(elements, selector, type))) return false;
    return delete this.handlers[type];
  }

  hasProperty(key) {
    return Object.prototype.hasOwnProperty.call(this.handlers, key);
  }

  generateKey(elements, selector, type) {
    return `${elements}-${selector}-${type}`;
  }

  delegation({ elements, selector, type, scope, callback, useCapture }) {
    return Array.prototype.map.call($all(elements), element =>
      this.delegate(element, selector, type, scope, callback, useCapture),
    );
  }

  delegate(element, selector, type, scope, callback, useCapture) {
    const callbackListener = this.listener(element, selector, callback);
    element.addEventListener(
      type,
      event => {
        callbackListener(event, scope);
      },
      useCapture,
    );
    return {
      destroy: () => element.removeEventListener(type, callbackListener, useCapture),
    };
  }

  listener(element, selector, callback) {
    return (event, scope) => {
      if ($closest(event.target, selector)) callback.call(element, event, scope);
    };
  }
}

export default new EventBus();

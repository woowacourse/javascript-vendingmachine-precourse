import { $all, $closest, generateKey } from '../common/helper.js';

class EventBus {
  constructor() {
    this.handlers = {};
  }

  addEvent(elements, selector, type, callback) {
    const eventKey = generateKey(elements, selector, type);
    this.handlers[eventKey] = { elements, selector, type, callback };
    return () => delete this.handlers[type];
  }

  delegation(parent, target, eventType) {
    const { elements, selector, type, callback } =
      this.handlers[generateKey(parent, target, eventType)];
    return Array.prototype.map.call($all(elements), element =>
      this.delegate(element, selector, type, callback),
    );
  }

  delegate(element, selector, type, callback) {
    element.addEventListener(type, event => {
      if ($closest(event.target, selector)) callback(event);
    });
    return {
      destroy: () => element.removeEventListener(type, callback),
    };
  }
}

export default new EventBus();

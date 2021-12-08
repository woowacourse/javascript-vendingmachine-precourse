import { $closest } from './helper.js';

class EventBus {
  listener(element, selector, callback) {
    return event => {
      if ($closest(event.target, selector)) callback.call(element, event);
    };
  }

  delegate(element, selector, type, callback, useCapture) {
    const callbackListener = this.listener(element, selector, callback);
    element.addEventListener(type, callbackListener, useCapture);
    return {
      destroy: () => {
        element.removeEventListener(type, callbackListener, useCapture);
      },
    };
  }

  delegation(elements, selector, type, callback, useCapture = false) {
    return Array.prototype.map.call(document.querySelectorAll(elements), element =>
      this.delegate(element, selector, type, callback, useCapture),
    );
  }
}

export default new EventBus();

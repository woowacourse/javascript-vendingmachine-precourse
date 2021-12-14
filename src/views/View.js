import { ERROR_MESSAGE, STYLE_DISPLAY } from '../constants.js';
import { emit, on } from '../utils/index.js';

export default class View {
  constructor(element) {
    if (!element) throw new Error(ERROR_MESSAGE.NO_SELECTOR);

    this.element = element;
    this.originalDisplay = this.element.style.display || '';

    return this;
  }

  hide() {
    this.element.style.display = STYLE_DISPLAY.NONE;
    return this;
  }

  show() {
    this.element.style.display = this.originalDisplay;
    return this;
  }

  on(eventName, handler) {
    on(this.element, eventName, handler);
    return this;
  }

  emit(eventName, data) {
    emit(this.element, eventName, data);
    return this;
  }
}

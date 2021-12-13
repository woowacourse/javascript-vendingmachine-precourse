import { ERROR_MESSAGE } from '../constants.js';

export function on(target, eventName, handler) {
  target.addEventListener(eventName, handler);
}

export function emit(target, eventName, detail) {
  const event = new CustomEvent(eventName, { detail });
  target.dispatchEvent(event);
}

export function qs(selector, scope = document) {
  if (!selector) throw new Error(ERROR_MESSAGE.NO_SELECTOR);

  return scope.querySelector(selector);
}

export function qsAll(selector, scope = document) {
  if (!selector) throw new Error(NO_SELECTOR);

  return Array.from(scope.querySelectorAll(selector));
}

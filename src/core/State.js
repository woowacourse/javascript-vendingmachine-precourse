import { storageManager } from '../utils/data-utils.js';

export default class State {
  constructor(value, storageKey = '') {
    this._value = storageKey ? storageManager.get(storageKey, value) : value;
    this._components = new Set();
    this._storageKey = storageKey;
  }

  // 등록된 컴포넌트에 렌더링을 요청한다.
  _notify() {
    this._components.forEach((component) => component.render());
  }

  // 수정된 값을 로컬스토리지에 저장한다.
  _sync() {
    storageManager.set(this._storageKey, this._value);
  }

  // 해당 상태를 사용할 컴포넌트를 연결한다.
  add(component) {
    this._components.add(component);
  }

  // 해당 상태의 값을 가져온다.
  get value() {
    return this._value;
  }

  // 해당 상태의 값을 변경한다.
  set value(data) {
    this._value = data;
    this._notify();

    if (this._storageKey !== '') this._sync();
  }
}

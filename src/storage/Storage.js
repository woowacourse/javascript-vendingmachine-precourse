class Storage {
  constructor() {
    this.state = localStorage;
    this.listeners = [];
  }

  subscribe(listener) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  notify(component, items) {
    this.listeners.forEach(listener => listener(component, items));
  }

  /**
   * 로컬 스토리지에 아이템을 생성합니다.
   *
   * @param {object{key:string, value:array}} params
   */
  create(key, value) {
    this.setState({ key, value });
  }

  /**
   * 로컬 스토리지에 접근하여 해당 key의 item에 값을 추가합니다.
   *
   * @param {string} key
   * @param {any} item
   */
  add(key, item) {
    const value = this.read(key) || {};
    this.setState({ key, value: [...value, item] });
  }

  /**
   * 로컬 스토리지에 접근하여 해당 key로 저장된 아이템을 가져옵니다.
   *
   * @param {string} key
   * @returns any[]
   */
  read(key) {
    if (!key) throw new Error('올바른 값을 입력해주세요.');
    const item = this.state.getItem(key);
    return !item ? [] : JSON.parse(item);
  }

  /**
   * 로컬 스토리지에 접근하여 해당 key로 저장된 아이템 중 일부를 수정합니다.
   *
   * @param {string} key
   * @param {string} subKey
   * @param {any} newItem
   */
  update(key, subKey, newItem) {
    const value = { ...this.read(key), [subKey]: newItem };
    this.setState({ key, value });
  }

  /**
   * 로컬 스토리지에 접근하여 해당 key로 저장된 아이템 중 일부를 삭제합니다.
   *
   * @param {string} key
   * @param {any} target
   */
  remove(key, target) {
    const value = this.read(key).filter(item => item !== target);
    this.setState({ key, value });
  }

  /**
   * 로컬 스토리지에 key, item으로 데이터를 저장합니다.
   *
   * @param {object{key:string, value:array}} param
   */
  setState({ key, value }) {
    this.state.setItem(key, JSON.stringify(value));
    this.notify(key, value);
  }
}

export default new Storage();

export default class Storage {
  constructor(key, deserializer, storage = localStorage) {
    this.key = key;
    this.deserializer = deserializer;
    this.storage = storage;
  }

  get() {
    const items = this.storage.getItem(this.key);
    if (!items) return null;
    const parsedItem = JSON.parse(items);
    return this.deserializer ? this.deserializer(parsedItem) : parsedItem;
  }

  set(items) {
    this.storage.setItem(this.key, JSON.stringify(items));
  }
}

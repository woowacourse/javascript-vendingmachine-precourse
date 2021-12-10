class Storage {
  fields;

  items;

  constructor() {
    this.items = [];
  }

  getItem(idx) {
    return { ...this.items[idx] };
  }

  setItem(idx, item) {
    this.items[idx] = { ...item };
  }

  appendItem(item) {
    this.items.push({ ...item });
  }

  removeItem(itemIdx) {
    this.items = this.items.filter((_, idx) => idx !== itemIdx);
  }

  hasEnoughItem(idx, count = 1) {
    return this.items[idx].count >= count;
  }

  addItem(idx, count = 1) {
    this.items[idx].count += count;
  }

  useItem(idx, count = 1) {
    this.items[idx].count -= count;
  }
}

export default Storage;

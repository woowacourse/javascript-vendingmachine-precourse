export default class MachineModel {
  constructor() {
    this.items = [];
  }

  setitems(items) {
    this.items = items;
  }

  addItem(item) {
    this.items = [...this.items, { ...item }];
  }
}

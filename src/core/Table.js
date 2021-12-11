import { createElement, combineElement } from '../utils/element-utils.js';

export default class TableCreate {
  constructor(title) {
    this.$title = createElement('H3', title);
    this.$table = createElement('TABLE');
    this.$tableBody = createElement('TBODY');
    this.$tableBody.append(this.columnHead());
    this.$table.append(this.$tableBody);

    this.init();
  }

  init() {}

  columnHead() {}

  columnBody() {}

  setContents(contents) {
    contents.forEach((value, index) =>
      this.$tableBody.append(this.columnBody(value, index))
    );
    return this;
  }

  get result() {
    return combineElement([this.$title, this.$table]);
  }
}

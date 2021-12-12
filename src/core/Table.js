import { createElement, combineElement } from '../utils/element-tools.js';

export default class TableCreate {
  constructor(title, columnHead) {
    this.$title = createElement('H3', title);
    this.columnHead = [...columnHead];

    this.init();
  }

  init() {
    this.$table = createElement('TABLE');
    this.$tableBody = createElement('TBODY');
    this.$table.append(this.$tableBody);
    this.$tableBody.append(this.renderColumnHead());
  }

  renderColumnHead() {
    const $column = createElement('TR');
    $column.innerHTML = this.columnHead
      .map((head) => `<th>${head}</th>`)
      .join('');
    return $column;
  }

  renderColumnBody() {}

  setContents(contents) {
    contents.forEach((value, index) =>
      this.$tableBody.append(this.renderColumnBody(value, index))
    );
    return this;
  }

  get result() {
    return combineElement([this.$title, this.$table]);
  }
}

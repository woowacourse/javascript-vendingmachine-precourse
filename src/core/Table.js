import { createElement, combineElement } from '../utils/element-tools.js';

export default class TableCreate {
  constructor(title, columnHead) {
    this.$title = createElement('H3', title);
    this.columnHead = [...columnHead];

    this.init();
  }

  // 테이블을 다시 만들어 초기화한다.
  init() {
    this.$table = createElement('TABLE');
    this.$tableBody = createElement('TBODY');
    this.$table.append(this.$tableBody);
    this.$tableBody.append(this._renderColumnHead());
  }

  // 테이블의 내용을 설정한다.
  setContents(contents) {
    contents.forEach((value, index) =>
      this.$tableBody.append(this._renderColumnBody(value, index))
    );
    return this;
  }

  // 테이블 타이틀 컬럼을 작성한다
  _renderColumnHead() {
    const $column = createElement('TR');
    $column.innerHTML = this.columnHead
      .map((head) => `<th>${head}</th>`)
      .join('');
    return $column;
  }

  // 테이블 컬럼를 작성한다.
  _renderColumnBody() {}

  get result() {
    return combineElement([this.$title, this.$table]);
  }
}

/* eslint-disable class-methods-use-this */
import { TAG } from '../../constant/dom.js';

export default class Table {
  constructor(props) {
    this.$target = document.createElement(TAG.TAG_TABLE);
    this.props = props;
    this.render(props.initialData);
  }

  render(renderingData) {
    this.$target.setAttribute('border', 1);
    this.$target.setAttribute('style', 'border-collaspe collapse');
    this.$target.innerHTML = '';
    this.renderHeader();
    this.renderBody(renderingData);
  }

  renderHeader() {
    const { columns } = this.props;
    const $tr = document.createElement(TAG.TAG_TR);

    columns.forEach((column) => {
      const $td = document.createElement(TAG.TAG_TH);
      $td.innerText = column;
      $tr.appendChild($td);
    });

    this.$target.appendChild($tr);
  }

  renderBody() {}

  templateBody() {}

  getTarget() {
    return this.$target;
  }
}

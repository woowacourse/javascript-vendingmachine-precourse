import { TAG } from '../constant/dom.js';

export default class Table {
  constructor(props) {
    this.$target = document.createElement(TAG.TAG_TABLE);
    this.props = props;

    this.render();
  }

  render() {
    this.$target.setAttribute('border', 1);
    this.$target.setAttribute('style', 'border-collaspe collapse');
    this.renderHeader();
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

  getTarget() {
    return this.$target;
  }
}

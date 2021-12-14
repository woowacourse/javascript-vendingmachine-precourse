import Component from "../common/component.js";

export default class Table extends Component {
  template() {
    return `
      <h2>${this.$props.title}</h2>
      ${this.getOptionalButton()}
      <table>
        <tr>${this.getTableHeader()}</tr>
        ${this.getTableContents()}
      </table>
    `;
  }

  getTableHeader() {
    return this.$props.tableHeaders
      .map((header) => `<th>${header}</th>`)
      .join("");
  }

  getTableContents() {
    if (this.$props.tableContents === undefined) return "";
    return this.$props.tableContents.map((c) => this.getTableRow(c)).join("");
  }

  getTableRow(tableRow) {
    const classStr = this.$props.tableRowClass ? this.$props.tableRowClass : "";
    return `<tr class=${classStr}>${tableRow
      .map((entry, index) => this.getSingleEntry(entry, index))
      .join("")}</tr>`;
  }

  getSingleEntry(entry, index) {
    const classStr = this.$props.tableEntryClass
      ? this.$props.tableEntryClass[index]
      : "";
    return `<td class=${classStr}>${entry}</td>`;
  }

  getOptionalButton() {
    const { buttonInfo } = this.$props;

    if (buttonInfo === undefined) return "";
    return `<button id=${buttonInfo.id}>${buttonInfo.value}</button>`;
  }
}

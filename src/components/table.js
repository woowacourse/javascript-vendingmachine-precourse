import Component from "../common/component.js";

export default class Table extends Component {
  template() {
    return `
      <h2>${this.$props.title}</h2>
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
    return `<tr>${tableRow.map((entry) => `<td>${entry}</td>`).join("")}</tr>`;
  }
}

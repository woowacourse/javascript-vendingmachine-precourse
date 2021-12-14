import Table from "./table.js";

export default class CoinTable extends Table {
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

  getTableRow(tableRow) {
    return `<tr>
      <td>${tableRow[0]}원</td>
      <td id=${this.$props.getQuantityId(tableRow[0])}>${tableRow[1]}개</td>
     </tr>`;
  }
}

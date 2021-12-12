export default class CoinTable extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
      <style>
        table {
          width:135px; 
          border-collapse: collapse; 
          margin-top:10px;
        }
        th, td {
          padding:10px;
        }
      </style>
      <table border="1">
        <thead>
          <tr>
            <th>동전</th>
            <th>개수</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>500원</td>
            <td id="${this.getAttribute('coin500id')}"></td>
          </tr>
          <tr>
            <td>100원</td>
            <td id="${this.getAttribute('coin100id')}"></td>
          </tr>
          <tr>
            <td>50원</td>
            <td id="${this.getAttribute('coin50id')}"></td>
          </tr>
          <tr>
            <td>10원</td>
            <td id="${this.getAttribute('coin10id')}"></td>
          </tr>
        </tbody>
      </table>`;
  }
}

window.customElements.define('coin-table', CoinTable);

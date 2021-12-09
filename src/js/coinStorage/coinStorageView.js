export default class CoinStorageView {
  renderPage = (container) => {
    const template = `
      <h2>자판기 동전 추가하기</h2>
      <div>
        <input id="vending-machine-charge-input" type="number"/>
        <button id="vending-machine-charge-button">충전하기</button>
      </div>
      <br/>
      <div id="vending-machine-charge-amount">보유 금액:</div>
      <br/>
      <h2>자판기가 보유한 동전</h2>
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
            <td id="vending-machine-coin-500-quantity"></td>
          </tr>
          <tr>
            <td>100원</td>
            <td id="vending-machine-coin-100-quantity"></td>
          </tr>
          <tr>
            <td>50원</td>
            <td id="vending-machine-coin-50-quantity"></td>
          </tr>
          <tr>
            <td>10원</td>
            <td id="vending-machine-coin-10-quantity"></td>
          </tr>
        </tbody>
      </table>
    `;
    this.render(container, template);
  };

  renderChangesComponent = (container) => {
    const template = `
      <h3>잔돈</h3>
      <button id="coin-return-button">반환하기</button>
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
            <td id="coin-500-quantity"></td>
          </tr>
          <tr>
            <td>100원</td>
            <td id="coin-100-quantity"></td>
          </tr>
          <tr>
            <td>50원</td>
            <td id="coin-50-quantity"></td>
          </tr>
          <tr>
            <td>10원</td>
            <td id="coin-10-quantity"></td>
          </tr>
        </tbody>
      </table>
    `;
    this.render(container, template);
  };

  renderTotalMoney = (container, amount) => {
    container.innerText = `보유 금액: ${amount}`;
  };

  render = (container, template) => {
    container.insertAdjacentHTML("beforeend", template);
  };

  renderCoinAmount = (coins) => {
    const $coin500 = document.getElementById("vending-machine-coin-500-quantity");
    const $coin100 = document.getElementById("vending-machine-coin-100-quantity");
    const $coin50 = document.getElementById("vending-machine-coin-50-quantity");
    const $coin10 = document.getElementById("vending-machine-coin-10-quantity");

    $coin500.innerText = this.formatCoinAmount(coins[500]);
    $coin100.innerText = this.formatCoinAmount(coins[100]);
    $coin50.innerText = this.formatCoinAmount(coins[50]);
    $coin10.innerText = this.formatCoinAmount(coins[10]);
  };

  formatCoinAmount = (amount) => {
    return `${amount}개`;
  };
}

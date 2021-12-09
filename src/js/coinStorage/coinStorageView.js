export default class CoinStorageView {
  renderInputForm = (container) => {
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

  renderTotalMoney = (container, amount) => {
    container.innerText = `보유 금액: ${amount}`;
  };

  render = (container, template) => {
    container.insertAdjacentHTML("beforeend", template);
  };
}

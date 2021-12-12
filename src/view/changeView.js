class ChangeView {
  constructor() {}

  render() {}

  template() {
    return `
      <section id="change-tab">
        <form>
          <h3>자판기 동전 충전하기</h3>
          <input id="vending-machine-charge-input" type="number" placeholder="자판기가 보유할 금액" />
          <button id="vending-machine-charge-button">충전하기</button>
          <div>보유 금액: <span id="vending-machine-charge-amount">0원</span></div>
        </form>
        <h3>자판기가 보유한 동전</h3>
        <table>
          <tr>
            <th>동전</th>
            <th>개수</th>
          </tr>
          <tr>
            <td>500원</td>
            <td id="vending-machine-coin-500-quantity">0개</td>
          </tr>
          <tr>
            <td>100원</td>
            <td id="vending-machine-coin-100-quantity">0개</td>
          </tr>
          <tr>
            <td>50원</td>
            <td id="vending-machine-coin-50-quantity">0개</td>
          </tr>
          <tr>
            <td>10원</td>
            <td id="vending-machine-coin-10-quantity">0개</td>
          </tr>
        </table>
      </section>
      `;
  }
}

export default ChangeView;

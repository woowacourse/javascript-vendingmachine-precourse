export default class PurchaseView {
  renderPage = (container) => {
    const template = `
      <h2>금액 투입</h2>
      <div>
        <input type="number" id="charge-input"/>
        <button id="charge-button">투입하기</button>
      </div>
      <br/>
      <div id="charge-amount">투입한 금액: </div>
      <br/>
      <h2>구매할 수 있는 상품 현황</h2>
      <table>
        <thead>
          <tr>
            <th>상품명</th>
            <th>가격</th>
            <th>수량</th>
            <th>구매</th>
          </tr>
        </thead>
      </table>
    `;
    this.render(container, template);
  };

  renderChargedAmount = (container, amount) => {
    container.innerText = `투입한 금액: ${amount}`;
  };

  render = (container, template) => {
    container.insertAdjacentHTML("beforeend", template);
  };
}

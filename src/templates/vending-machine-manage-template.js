const vendingMachineManageTemplate = {
  main: `
  <section>
    <h3>자판기 동전 충전하기</h3>
    <form>
      <input id="vending-machine-charge-input" placeholder="자판기가 보유할 금액" type="number"/>
      <button id="vending-machine-charge-button">충전하기</button>
    </form><br />
    보유 금액: <span id="vending-machine-charge-amount"></span>
  </section><br />
  <section>
    <h3>자판기가 보유한 동전</h3>
    <table id="vending-machine-coin-table">
      <thead>
        <tr>
          <th>동전</th><th>개수</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>500원</td><td id="vending-machine-coin-500-quantity"></td>
        </tr>
        <tr>
          <td>100원</td><td id="vending-machine-coin-100-quantity"></td>
        </tr>
        <tr>
          <td>50원</td><td id="vending-machine-coin-50-quantity"></td>
        </tr>
        <tr>
          <td>10원</td><td id="vending-machine-coin-10-quantity"></td>
        </tr>
      </tbody>
    </table>
  </section>
  `,
};

export default vendingMachineManageTemplate;

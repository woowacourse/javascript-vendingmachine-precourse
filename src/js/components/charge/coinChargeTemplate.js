const coinChargeTemplate = `
  <div>
    <h2>자판기 동전 충전하기</h2>
    <form>
      <input type="number" id="vending-machine-charge-input" maxlength="20" placeholder="자판기가 보유할 금액" />
      <button id="vending-machine-charge-button">충전하기</button>
    </form>
    <p id="vending-machine-charge-amount">보유 금액:</p>
  </div>
  <div>
    <h2>자판기가 보유한 동전</h2>
    <table>
      <thead>
        <tr>
          <th>동전</th>
          <th>개수</th>
        </tr>
      </thead>
      <tbody>
          <tr>
            <td>원</td>
            <td id="vending-machine-coin-500-quantity">개</td>
          </tr>
      </tbody>
    </table>
  </div>
`;

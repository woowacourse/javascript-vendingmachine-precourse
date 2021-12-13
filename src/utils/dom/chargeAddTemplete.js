export const chargeAddTemplete = `
  <h2>자판기 동전 추가하기</h2>
  <form id="vending-machine-charge-form">
  <input id="vending-machine-charge-input" type="number" placeholder="자판기가 보유할 금액" />
  <button id="vending-machine-charge-button">충전하기</button>
  </form>
  <div>
    <span>보유 금액:</span>
    <span id="vending-machine-charge-amount"></span>
  </div>
  <h2>자판기가 보유한 동전</h2>
  <table style="border: 1px solid black">
    <tbody>
      <thead>
        <td style="border: 1px solid black">동전</td>
        <td style="border: 1px solid black">개수</td>
      </thead>
      <tr>
        <td style="border: 1px solid black">500원</td>
        <td id="vending-machine-coin-500-quantity"" style="border: 1px solid black"></td>
      </tr>
      <tr>
        <td style="border: 1px solid black">100원</td>
        <td id="vending-machine-coin-100-quantity"" style="border: 1px solid black"></td>
      </tr>
      <tr>
        <td style="border: 1px solid black">50원</td>
        <td id="vending-machine-coin-50-quantity" style="border: 1px solid black"></td>
      </tr>
      <tr>
        <td style="border: 1px solid black">10원</td>
        <td id="vending-machine-coin-10-quantity" style="border: 1px solid black"></td>
      </tr>
  </tbody>
  </table>
`;
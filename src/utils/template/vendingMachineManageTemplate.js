export const getVendingMachineCoinListTemplate = (coinList) => {
  return `
    <tr>
      <th>동전</th>
      <th>개수</th>
    </tr>
    <tr>
      <th >500원</th>
      <td id="vending-machine-coin-500-quantity">${coinList['500']}개</td>
    </tr>
    <tr>
      <th>100원</th>
      <td id="vending-machine-coin-100-quantity">${coinList['100']}개</td>
    </tr>
    <tr>
      <th>50원</th>
      <td id="vending-machine-coin-50-quantity">${coinList['50']}개</td>
    </tr>
    <tr>
      <th>10원</th>
      <td id="vending-machine-coin-10-quantity">${coinList['10']}개</td>
    </tr>
  `;
};

export const getVendingMachineManageTemplate = (vendingMachineManageMenu) => {
  return `
    <section>
      <h4>자판기 동전 충전하기</h4>
      <form id="vending-machine-charge-form">
        <input type="number" id="vending-machine-charge-input" placeholder="자판기가 보유할 금액"/>
        <button id="vending-machine-charge-button">충전하기</button>
      </form>
      <p>보유 금액: <span id="vending-machine-charge-amount">${vendingMachineManageMenu.chargeAmount}</span></p>
    </section>
    <section>
      <h4>자판기가 보유한 동전</h4>
      <table id="vending-machine-coin-list">
        <tr>
          <th>동전</th>
          <th>개수</th>
        </tr>
        <tr>
          <th>500원</th>
          <td id="vending-machine-coin-500-quantity">${vendingMachineManageMenu.coinList['500']}개</td>
        </tr>
        <tr>
          <th>100원</th>
          <td id="vending-machine-coin-100-quantity">${vendingMachineManageMenu.coinList['100']}개</td>
        </tr>
        <tr>
          <th>50원</th>
          <td id="vending-machine-coin-50-quantity">${vendingMachineManageMenu.coinList['50']}개</td>
        </tr>
        <tr>
          <th>10원</th>
          <td id="vending-machine-coin-10-quantity">${vendingMachineManageMenu.coinList['10']}개</td>
        </tr>
      </table>
    </section>
  `;
};

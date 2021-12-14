import { $ } from '../../utils/querySelector.js';

export const coinChargeTemplate = `
  <div>
    <h3>자판기 동전 충전하기</h3>
    <form>
      <input type="number" id="vending-machine-charge-input" maxlength="20" placeholder="자판기가 보유할 금액" />
      <button id="vending-machine-charge-button">충전하기</button>
    </form>
    <p>보유 금액: <span id="vending-machine-charge-amount"></span></p>
  </div>
  <br>
  <div>
    <h3>자판기가 보유한 동전</h3>
    <table>
      <thead>
        <tr>
          <th>동전</th>
          <th>개수</th>
        </tr>
      </thead>
      <tbody id="vending-machine-coin-list">
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
  </div>
`;

const haveCoinTemplate = (unit, quantity) => `
  <tr>
    <td>${unit}원</td>
    <td id="vending-machine-coin-${unit}-quantity">${quantity}개</td>
  </tr>
`;

const addConvertedCoins = (unit, quantity) => {
  const haveCoin = haveCoinTemplate(unit, quantity);
  $('#vending-machine-coin-list').insertAdjacentHTML('afterbegin', haveCoin);
};

export const showConvertedCoins = (convertedCoins) => {
  $('#vending-machine-coin-list').innerHTML = '';

  // eslint-disable-next-line no-restricted-syntax
  for (const unit in convertedCoins) {
    addConvertedCoins(unit, convertedCoins[unit]);
  }
};

import { COINS, NONE } from './constants.js';

export const changeTemplates = {
  changeInputs(money) {
    return `
      <input id="vending-machine-charge-input" type="number" placeholder="잔돈 충전" />   
      <button id="vending-machine-charge-button">충전하기</button>
      <h4 id="vending-machine-charge-amount">보유 금액: ${money}원</h4>
    `;
  },

  coinList(change) {
    return `
    <table>
      <thead>
        <tr>
          <th>동전</th>
          <th>개수</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>500원</td>
          <td vending-machine-coin-500-quantity>${
            change[COINS[0]] ? change[COINS[0]] : NONE
          }개</td>
        </tr>
        <tr>
          <td>100원</td>
          <td>${change[COINS[1]] ? change[COINS[1]] : NONE}개</td>
        </tr>
        <tr>
          <td>50원</td>
          <td>${change[COINS[2]] ? change[COINS[2]] : NONE}개</td>
        </tr>
        <tr>
          <td>10원</td>
          <td>${change[COINS[3]] ? change[COINS[3]] : NONE}개</td>
        </tr>
      </tbody>
    </table>
   `;
  },
};

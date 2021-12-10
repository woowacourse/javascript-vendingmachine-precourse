import { EMPTY } from '../../constants/index.js';

const machineManage = tabData => `
  <div>
    <h2>자판기 동전 충전하기</h2>
    <form>
      <input type="number" id="vending-machine-charge-input" maxlength="20" placeholder="자판기가 보유할 금액" />
      <button id="vending-machine-charge-button">충전하기</button>
    </form>
    <p id="vending-machine-charge-amount">보유 금액: ${tabData.reduce(
      (result, { description, count }) => result + description * count,
      0,
    )}원</p>
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
        ${tabData
          .map(
            ({ description, count }) => `
          <tr>
            <td>${description}원</td>
            <td id="vending-machine-coin-${description}-quantity">${count}개</td>
          </tr>
          `,
          )
          .join(EMPTY)}
      </tbody>
    </table>
  </div>
  `;

export default machineManage;

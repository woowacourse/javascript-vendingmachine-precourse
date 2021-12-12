import { ID } from '../constants/selectors.js';

const vendingMachineManageTemplate = {
  main: `
  <section>
    <h3>자판기 동전 충전하기</h3>
    <form>
      <input id="${ID.VENDING_MACHINE_MANAGE.CHARGE_INPUT}" placeholder="자판기가 보유할 금액" type="number"/>
      <button id="${ID.VENDING_MACHINE_MANAGE.CHARGE_BUTTON}">충전하기</button>
    </form><br />
    보유 금액: <span id="${ID.VENDING_MACHINE_MANAGE.CHARGE_AMOUNT}"></span>
  </section><br />
  <section>
    <h3>자판기가 보유한 동전</h3>
    <table id="${ID.VENDING_MACHINE_MANAGE.TABLE}">
      <thead>
        <tr>
          <th>동전</th><th>개수</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>500원</td><td id="${ID.VENDING_MACHINE_MANAGE.COIN_500_QUANTITY}"></td>
        </tr>
        <tr>
          <td>100원</td><td id="${ID.VENDING_MACHINE_MANAGE.COIN_100_QUANTITY}"></td>
        </tr>
        <tr>
          <td>50원</td><td id="${ID.VENDING_MACHINE_MANAGE.COIN_50_QUANTITY}"></td>
        </tr>
        <tr>
          <td>10원</td><td id="${ID.VENDING_MACHINE_MANAGE.COIN_10_QUANTITY}"></td>
        </tr>
      </tbody>
    </table>
  </section>
  `,
};

export default vendingMachineManageTemplate;

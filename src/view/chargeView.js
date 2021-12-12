import { CHARGE_ELEMENT_ID } from '../constants/constants.js';
import TapView from './tapView.js';

export default class ChargeView extends TapView {
  static render() {
    super.removeTap();
    super.addComponent(this.chargeComponent());
  }

  static chargeComponent() {
    return `
    <div id=tap>
      ${this.chargeInputComponent()}
      ${this.coinListComponent()}
    </div>
    `;
  }

  static chargeInputComponent() {
    return `
    <h3>자판기 동전 충전하기</h3>
    <input id=${CHARGE_ELEMENT_ID.chargeInput} type='number' placeholder='자판기가 보유할 금액'></input>
    <button id=${CHARGE_ELEMENT_ID.chargeButton}>충전하기</button>
    </br></br>
    <span id=${CHARGE_ELEMENT_ID.chargeAmount}>보유 금액:<span>
    `;
  }

  static coinListComponent() {
    return `
    </br></br>
    <h3>자판기가 보유한 동전</h3>
    <table border="1">
      <td>동전</td>
      <td>개수</td>
			${this.coinTable(CHARGE_ELEMENT_ID.coin500, 500)}
			${this.coinTable(CHARGE_ELEMENT_ID.coin100, 100)}
			${this.coinTable(CHARGE_ELEMENT_ID.coin50, 50)}
			${this.coinTable(CHARGE_ELEMENT_ID.coin10, 10)}
    </table>
    `;
  }

  static coinTable(id, coinType) {
    return `
    <tr>
      <td>${coinType}원</td>
      <td id=${id}></td>
    </tr>
		`;
  }
}

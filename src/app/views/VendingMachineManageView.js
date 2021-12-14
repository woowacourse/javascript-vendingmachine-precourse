import {
  DOM,
  FIFTY,
  FIVE_HUNDRED,
  ONE_HUNDRED,
  TEN,
  VENDING_MACHINE_CHARGE_AMOUNT_TEXT,
} from '../../lib/constants.js';
import { $ } from '../../lib/utils.js';

class VendingMachineManageView {
  constructor(mainSection, vendingMachineChargeInputsValue, coins, chargeAmount) {
    this.$app = mainSection;
    this.renderVendingMachineManageMenu(vendingMachineChargeInputsValue, coins, chargeAmount);
  }

  renderVendingMachineManageMenu(vendingMachineChargeInputsValue, coins, chargeAmount) {
    this.$app.innerHTML = this.generateVendingMachineManageMenuTemplate(
      vendingMachineChargeInputsValue,
      coins,
      chargeAmount
    );
  }

  generateVendingMachineManageMenuTemplate(vendingMachineChargeInputsValue, coins, chargeAmount) {
    const inputSectionTemplate = this.createVendingMachineChargeInputSectionTemplate(
      vendingMachineChargeInputsValue
    );
    const chargeAmountSectionTemplate =
      this.createVendingMachineChargeAmountSectionTemplate(chargeAmount);
    const coinQauntitySectionTemplate = this.createVendingMachineCoinQauntitySectionTemplate(coins);

    return `${inputSectionTemplate}${chargeAmountSectionTemplate}${coinQauntitySectionTemplate}`;
  }

  createVendingMachineChargeInputSectionTemplate(inputsValue) {
    return `<h3>자판기 동전 충전하기</h3><form id="${DOM.VENDING_MACHINE_CHARGE_FORM}">
          <input id="${
            DOM.VENDING_MACHINE_CHARGE_INPUT
          }" type="number" placeholder="자판기가 보유할 금액" value="${
      inputsValue[DOM.VENDING_MACHINE_CHARGE_INPUT]
    }"></input>
          <button id="${DOM.VENDING_MACHINE_CHARGE_BUTTON}">충전하기</button>
          </form>`;
  }

  createVendingMachineChargeAmountSectionTemplate(chargeAmount) {
    return `${VENDING_MACHINE_CHARGE_AMOUNT_TEXT}<span id="${DOM.VENDING_MACHINE_CHARGE_AMOUNT}">${
      chargeAmount === 0 ? '' : chargeAmount
    }</span>`;
  }

  createVendingMachineCoinQauntitySectionTemplate(coins) {
    return `<h3>자판기가 보유한 동전</h3>
          <table id="${DOM.VENDING_MACHINE_COINS_TABLE}">
            <tr><td>동전</td><td>개수</td></tr>
            <tr><td>500</td><td id="${DOM.VENDING_MACHINE_COIN_500_QUANTITY}">${coins[FIVE_HUNDRED]}개</td></tr>
            <tr><td>100</td><td id="${DOM.VENDING_MACHINE_COIN_100_QUANTITY}">${coins[ONE_HUNDRED]}개</td></tr>
            <tr><td>50</td><td id="${DOM.VENDING_MACHINE_COIN_50_QUANTITY}">${coins[FIFTY]}개</td></tr>
            <tr><td>10</td><td id="${DOM.VENDING_MACHINE_COIN_10_QUANTITY}">${coins[TEN]}개</td></tr>
          </table>`;
  }

  renderCoins(coins, vendingMachineChargeInputsValue, vendingMachineCharge) {
    $(DOM.VENDING_MACHINE_CHARGE_AMOUNT).textContent = vendingMachineCharge;
    $(DOM.VENDING_MACHINE_CHARGE_INPUT).value =
      vendingMachineChargeInputsValue[DOM.VENDING_MACHINE_CHARGE_INPUT];
    $(DOM.VENDING_MACHINE_COIN_500_QUANTITY).textContent = `${coins[FIVE_HUNDRED]}개`;
    $(DOM.VENDING_MACHINE_COIN_100_QUANTITY).textContent = `${coins[ONE_HUNDRED]}개`;
    $(DOM.VENDING_MACHINE_COIN_50_QUANTITY).textContent = `${coins[FIFTY]}개`;
    $(DOM.VENDING_MACHINE_COIN_10_QUANTITY).textContent = `${coins[TEN]}개`;
  }
}
export default VendingMachineManageView;

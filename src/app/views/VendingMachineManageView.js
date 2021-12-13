import { DOM, FIFTY, FIVE_HUNDRED, ONE_HUNDRED, TEN } from '../../lib/constants.js';
import { $ } from '../../lib/utils.js';

class VendingMachineManageView {
  constructor(mainSection, vendingMachineChargeInputsValue, coins) {
    this.$app = mainSection;
    this.renderVendingMachineManageMenu(vendingMachineChargeInputsValue, coins);
  }

  renderVendingMachineManageMenu(vendingMachineChargeInputsValue, coins) {
    this.$app.innerHTML = this.generateVendingMachineManageMenuTemplate(
      vendingMachineChargeInputsValue,
      coins
    );
  }

  generateVendingMachineManageMenuTemplate(vendingMachineChargeInputsValue, coins) {
    const inputSectionTemplate = this.createVendingMachineChargeInputSectionTemplate(
      vendingMachineChargeInputsValue
    );
    const chargeAmountSectionTemplate = this.createVendingMachineChargeAmountSectionTemplate();
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

  createVendingMachineChargeAmountSectionTemplate() {
    return `<section id="${DOM.VENDING_MACHINE_CHARGE_AMOUNT}">`;
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

  renderCoins(coins, vendingMachineChargeInputsValue) {
    $(DOM.VENDING_MACHINE_CHARGE_INPUT).value =
      vendingMachineChargeInputsValue[DOM.VENDING_MACHINE_CHARGE_INPUT];
    $(DOM.VENDING_MACHINE_COIN_500_QUANTITY).textContent = `${coins[FIVE_HUNDRED]}개`;
    $(DOM.VENDING_MACHINE_COIN_100_QUANTITY).textContent = `${coins[ONE_HUNDRED]}개`;
    $(DOM.VENDING_MACHINE_COIN_50_QUANTITY).textContent = `${coins[FIFTY]}개`;
    $(DOM.VENDING_MACHINE_COIN_10_QUANTITY).textContent = `${coins[TEN]}개`;
  }
}
export default VendingMachineManageView;

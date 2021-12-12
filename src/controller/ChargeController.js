import { isMoneyValid } from '../utils/validator.js';

export class ChargeController {
  constructor(model, coreView) {
    this.model = model;
    this.coreView = coreView;

    this.loadLocalStorage();
    this.triggerEvent();
  }

  loadLocalStorage() {
    const machineChargeAmount = this.model.machineChargeAmount;
    const machineCoins = this.model.machineCoins;
    this.coreView.chargeView.showChargeAmount(machineChargeAmount);
    this.coreView.chargeView.showMachineCoins(machineCoins);
  }

  triggerEvent() {
    this.coreView.chargeView.setOnChargeSubmit(this.onChargeSubmit.bind(this));
  }

  onChargeSubmit(chargeMoney) {
    if (!isMoneyValid(chargeMoney)) {
      return;
    }
    const chargeAmount = this.model.addChargeMoney(chargeMoney);
    const machineCoins = this.model.addMachineCoins(chargeMoney);
    this.coreView.chargeView.showChargeAmount(chargeAmount);
    this.coreView.chargeView.showMachineCoins(machineCoins);
  }
}

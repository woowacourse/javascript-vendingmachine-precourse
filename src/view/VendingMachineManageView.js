import { $ } from "../common/dom.js";
import { vendingMachineManageTemplate } from "../common/templates.js";

class VendingMachineManageView {
  getInput() {
    return +$("#vending-machine-charge-input").value;
  }

  render() {}

  getTemplate() {
    return vendingMachineManageTemplate;
  }
}

export default VendingMachineManageView;

import vendingMachineManageMenu from "../components/vending-machine-manage-menu.js";

export default class VendingMachineManageMenu {
  constructor() {
    this.contentContainer = document.querySelector("#content-container");
  }

  render() {
    this.contentContainer.innerHTML = vendingMachineManageMenu.tableHeader;
  }
}

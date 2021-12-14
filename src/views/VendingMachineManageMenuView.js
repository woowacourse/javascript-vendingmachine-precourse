import vendingMachineManageMenu from "../components/vending-machine-manage-menu.js";

export default class VendingMachineManageMenuView {
  constructor() {
    this.contentContainer = document.querySelector("#content-container");
  }

  render(coins) {
    this.contentContainer.innerHTML = vendingMachineManageMenu.tableHeader;
    this.initElements();
    this.renderVendingMachineManageTableItems(coins);
  }

  initElements() {
    this.amount = document.querySelector("#vending-machine-charge-amount");
    this.coin500Quantity = document.querySelector(
      "#vending-machine-coin-500-quantity"
    );
    this.coin100Quantity = document.querySelector(
      "#vending-machine-coin-100-quantity"
    );
    this.coin50Quantity = document.querySelector(
      "#vending-machine-coin-50-quantity"
    );
    this.coin10Quantity = document.querySelector(
      "#vending-machine-coin-10-quantity"
    );
  }

  renderVendingMachineManageTableItems(coins) {
    this.amount.innerText = `${coins.amount}원`;
    this.coin500Quantity.innerText = `${coins.coin500Quantity}개`;
    this.coin100Quantity.innerText = `${coins.coin100Quantity}개`;
    this.coin50Quantity.innerText = `${coins.coin50Quantity}개`;
    this.coin10Quantity.innerText = `${coins.coin10Quantity}개`;
  }
}

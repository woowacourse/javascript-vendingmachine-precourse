import { CHANGES_TABLE_TEMPLATE, COIN_PAGE_TEMPLATE } from "../template/coinStorage-template.js";
import { render } from "../util/render.js";

export default class CoinStorageView {
  renderPage = (container) => {
    render(container, COIN_PAGE_TEMPLATE);
  };

  renderChangesComponent = (container) => {
    render(container, CHANGES_TABLE_TEMPLATE);
  };

  renderTotalMoney = (container, amount) => {
    container.innerText = `보유 금액: ${amount}`;
  };

  renderCoinAmount = (coins) => {
    const $coin500 = document.getElementById("vending-machine-coin-500-quantity");
    const $coin100 = document.getElementById("vending-machine-coin-100-quantity");
    const $coin50 = document.getElementById("vending-machine-coin-50-quantity");
    const $coin10 = document.getElementById("vending-machine-coin-10-quantity");

    $coin500.innerText = this.formatCoinAmount(coins[500]);
    $coin100.innerText = this.formatCoinAmount(coins[100]);
    $coin50.innerText = this.formatCoinAmount(coins[50]);
    $coin10.innerText = this.formatCoinAmount(coins[10]);
  };

  renderReturnedCoinAmount = (returnedCoins) => {
    const $returnedCoin500 = document.getElementById("coin-500-quantity");
    const $returnedCoin100 = document.getElementById("coin-100-quantity");
    const $returnedCoin50 = document.getElementById("coin-50-quantity");
    const $returnedCoin10 = document.getElementById("coin-10-quantity");

    $returnedCoin500.innerText = this.formatCoinAmount(returnedCoins[500]);
    $returnedCoin100.innerText = this.formatCoinAmount(returnedCoins[100]);
    $returnedCoin50.innerText = this.formatCoinAmount(returnedCoins[50]);
    $returnedCoin10.innerText = this.formatCoinAmount(returnedCoins[10]);
  };

  formatCoinAmount = (amount) => {
    return `${amount}개`;
  };
}

import { CHANGES_TABLE_TEMPLATE, COIN_PAGE_TEMPLATE } from "../template/coinStorage-template.js";
import { render } from "../util/render.js";
import { ID } from "../util/constant.js";

export default class CoinStorageView {
  renderPage = (container) => {
    render(container, COIN_PAGE_TEMPLATE);
  };

  renderChangesComponent = (container) => {
    render(container, CHANGES_TABLE_TEMPLATE);
  };

  renderTotalMoney = (container, amount) => {
    container.innerText = `${amount}`;
  };

  renderCoinAmount = (coins) => {
    const $coin500 = document.getElementById(ID.VENDING_MACHINE_COIN_500_QUANTITY);
    const $coin100 = document.getElementById(ID.VENDING_MACHINE_COIN_100_QUANTITY);
    const $coin50 = document.getElementById(ID.VENDING_MACHINE_COIN_50_QUANTITY);
    const $coin10 = document.getElementById(ID.VENDING_MACHINE_COIN_10_QUANTITY);

    $coin500.innerText = this.formatCoinAmount(coins[500]);
    $coin100.innerText = this.formatCoinAmount(coins[100]);
    $coin50.innerText = this.formatCoinAmount(coins[50]);
    $coin10.innerText = this.formatCoinAmount(coins[10]);
  };

  renderReturnedCoinAmount = (returnedCoins) => {
    const $returnedCoin500 = document.getElementById(ID.COIN_500_QUANTITY);
    const $returnedCoin100 = document.getElementById(ID.COIN_100_QUANTITY);
    const $returnedCoin50 = document.getElementById(ID.COIN_50_QUANTITY);
    const $returnedCoin10 = document.getElementById(ID.COIN_10_QUANTITY);

    $returnedCoin500.innerText = this.formatCoinAmount(returnedCoins[500]);
    $returnedCoin100.innerText = this.formatCoinAmount(returnedCoins[100]);
    $returnedCoin50.innerText = this.formatCoinAmount(returnedCoins[50]);
    $returnedCoin10.innerText = this.formatCoinAmount(returnedCoins[10]);
  };

  formatCoinAmount = (amount) => {
    return `${amount}개`;
  };
}

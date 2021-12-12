import { $ } from './utils/domElementTool.js';

export default class VendingMachineView {
  constructor(products) {
    this.products = products;
  }

  renderProducts(selector, templateMaker) {
    let template = '';

    this.products.forEach(product => {
      template += templateMaker(product);
    });

    $(`#${selector}`).innerHTML = template;
  }

  renderChargeAmount(selector, chargeAmount) {
    $(`#${selector}`).innerText = `보유 금액: ${chargeAmount}`;
  }

  renderCoinStatus(selectors, money) {
    $(`#${selectors.COIN_500}`).innerText = money[500];
    $(`#${selectors.COIN_100}`).innerText = money[100];
    $(`#${selectors.COIN_50}`).innerText = money[50];
    $(`#${selectors.COIN_10}`).innerText = money[10];
  }
}

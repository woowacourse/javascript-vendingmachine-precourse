import * as $ from './dom.js';
import VendingModel from './model.js';

export default class VendingController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  app() {
    this.view.renderInApp('afterbegin', $.tabMenus);
    this.view.renderInApp('beforeend', $.tab1);
    this.view.showTab('.tab1');
    this.view.renderInApp('beforeend', $.tab2);
    this.view.renderInApp('beforeend', $.tab3);
    this.addAllEventListener();
    this.loadData();
    console.log(this.model.productObj);
  }

  loadData() {
    this.model._productObj = JSON.parse(VendingModel.getLocalStorage('tab1'));
    this.loadTab1Data();
  }

  loadTab1Data() {
    for (const name in this.model.productObj) {
      if (Object.hasOwnProperty.call(this.model.productObj, name)) {
        this.makeTableOfTab1(
          name,
          this.model.productObj[name].price,
          this.model.productObj[name].quantity
        );
      }
    }
  }

  switchTab(tab) {
    this.view.hideTab();
    this.view.showTab(tab);
  }

  addAllEventListener() {
    document
      .getElementById('product-add-menu')
      .addEventListener('click', () => this.switchTab('.tab1'));
    document
      .getElementById('vending-machine-manage-menu')
      .addEventListener('click', () => this.switchTab('.tab2'));
    document
      .getElementById('product-purchase-menu')
      .addEventListener('click', () => this.switchTab('.tab3'));
    document
      .getElementById('product-add-button')
      .addEventListener('click', e => this.addProduct.call(this, e));
    document
      .getElementById('vending-machine-charge-button')
      .addEventListener('click', e => this.chargeMoney.call(this, e));
  }

  makeTableOfTab1(name, price, quantity) {
    const newRowOfTab1 = () => $.createTbodyOfTab1(name, price, quantity);
    this.view.addTableRow($.tbodyOfTab1(), newRowOfTab1());
  }

  addProduct(e) {
    e.preventDefault();
    const name = $.productNameInput();
    const price = $.productPriceInput();
    const quantity = $.productQuantityInput();
    if (!this.checkPrice(price)) {
      this.view.alertMessage(
        '상품 가격은 100원부터 시작해야 하며, 10원으로 나누어 떨어져야 합니다. 다시 입력해주세요.'
      );
      return false;
    }
    this.makeTableOfTab1(name, price, quantity);
    this.model.productObj = { name, price, quantity };
    VendingModel.setLocalStorage('tab1', this.model.productObj);
  }

  checkPrice(price) {
    if (price < 100) return false;
    if (price % 10 !== 0) return false;
    return true;
  }

  // 잔돈 충전 탭 컨트롤러
  chargeMoney(e) {
    e.preventDefault();
    const money = $.chargedMoney();
    if (money < 0) {
      this.view.alertMessage(
        '충전할 잔돈은 0원 이상이어야 합니다. 다시 입력해주세요.'
      );
      return false;
    }
    this.getRandomCoin(money);
    this.makeTableOfTab2();
    VendingModel.setLocalStorage('tab2', this.model.coinObj);
  }

  getRandomCoin(money) {
    let changes = 0;
    while (changes != money) {
      const coin = MissionUtils.Random.pickNumberInList([500, 100, 50, 10]);

      // this.model.coinObj = {
      //   coin500: this.model._coinObj.coin500++,
      // };
      if (changes + coin <= money) {
        changes += coin;
        console.log(coin, changes);
      }
    }
  }

  makeTableOfTab2() {
    this.view.changeTableValue(
      $.vendingMachineCoin500(),
      this.model.coinObj.coin500
    );
    this.view.changeTableValue(
      $.vendingMachineCoin100(),
      this.model.coinObj.coin100
    );
    this.view.changeTableValue(
      $.vendingMachineCoin50(),
      this.model.coinObj.coin50
    );
    this.view.changeTableValue(
      $.vendingMachineCoin10(),
      this.model.coinObj.coin10
    );
  }
}

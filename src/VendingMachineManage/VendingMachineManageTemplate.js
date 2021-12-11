export default class VendingMachineManageTemplate {
  constructor() {
    this.app = document.getElementById('app');
    this.vendingMachineManageScreen = document.createElement('div');
    this.app.append(this.vendingMachineManageScreen);
    this.makeBasicTemplate();
  }

  makeBasicTemplate() {
    this.title = document.createElement('h2');
    this.title.innerText = '자판기 동전 충전하기';
    this.vendingMachineManageScreen.append(this.title);
  }

  template() {
    return this.vendingMachineManageScreen;
  }
}

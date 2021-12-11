export default class VendingMachineManageTemplate {
  constructor() {
    this.makeBasicTemplate();
  }

  makeBasicTemplate() {
    this.vendingMachineManageScreen = document.createElement('div');
    this.title = document.createElement('h2');
    this.title.innerText = '자판기 동전 충전하기';
    this.vendingMachineManageScreen.append(this.title);
  }

  template() {
    return this.vendingMachineManageScreen;
  }
}

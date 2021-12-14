import Item from '../item/item.js';
export default class VendingMachine{
  state = {
    itemList : [],
    coinList : [0,0,0,0]  //500,100,50,10순서
  }
  itemInsert(name, price, count) {
    const item = Item(name, price, count);
    this.state.itemList.push(item);
  }
  coinInsert(money) {
    coinUnit = [500, 100, 50, 10];
    for (let i = 0; i < coinUnit.length; i++){
      coinUnit[i] += (money / coinUnit[i]);
      money = money % coinUnit[i];
    }
  }
  itemCheckout(selector) {
    selector.checkoutCount();
  }
  coinCheckout(money) {
    coinUnit = [500, 100, 50, 10];
    for (let i = 0; i < coinUnit.length; i++){
      coinUnit[i] -= (money / coinUnit[i]);
      money = money % coinUnit[i];
    }
  }
}
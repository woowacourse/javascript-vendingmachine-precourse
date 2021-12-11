import Items from './Items.js';
import Coins from './Coins.js';
import VendingMachineCoins from './VendingMachineCoins.js';
import ChargedAmount from './ChargedAmount.js';

// TODO: Coins 클래스 상속
export default class VendingMachine {
  constructor(store, { items, coins, chargedAmount }) {
    this.store = store;
    this.items = new Items(items);
    this.coins = new VendingMachineCoins(coins);
    this.chargedAmount = new ChargedAmount(chargedAmount);
    this.returnedCoins = new Coins();
  }

  // TODO: 예외 처리
  addItem(name, price, quantity) {
    const result = this.store.insert({ name, price, quantity });
    this.items.insert(result.id, name, price, quantity);

    return this;
  }

  refillCoins(chargeAmount) {
    this.coins.refill(chargeAmount);
    this.store.updateCoins(this.coins.toObject());

    return this;
  }

  charge(amount) {
    this.store.updateCharge(this.chargedAmount.amount + amount);
    this.chargedAmount.charge(amount);

    return this;
  }

  // TODO: 데이터 흐름 수정
  purchase(id) {
    const item = this.items.find(id);

    this.store.updateCharge(this.chargedAmount.purchase(item.price));

    this.items.purchase(id);
    this.store.update(item);

    return this;
  }

  // amount 직접 접근 안 하도록 수정
  returnChange() {
    const { change, amount } = this.coins.returnChange(
      this.chargedAmount.amount
    );

    this.returnedCoins = change;

    this.store.updateCoins(this.coins.toObject());
    this.store.updateCharge(this.chargedAmount.returnChange(amount));

    return this;
  }
}

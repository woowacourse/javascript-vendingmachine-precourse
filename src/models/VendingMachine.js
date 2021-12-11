import Items from './Items.js';
import Coins from './Coins.js';
import ChargedAmount from './ChargedAmount.js';

export default class VendingMachine {
  constructor(store, { items, coins, chargedAmount }) {
    this.store = store;
    this.items = new Items(items);
    this.coins = new Coins(coins);
    this.chargedAmount = new ChargedAmount(chargedAmount);
  }

  // TODO: 예외 처리
  addItem(name, price, quantity) {
    const result = this.store.insert({ name, price, quantity });
    this.items.insert(result.id, name, price, quantity);

    return this;
  }

  refillCoins(chargeAmount) {
    this.coins.refill(chargeAmount);
    this.store.updateCoins(this.coins.toMap());

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
}

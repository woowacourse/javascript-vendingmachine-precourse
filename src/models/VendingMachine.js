import Items from './Items.js';
import Coins from './Coins.js';
import VendingMachineCoins from './VendingMachineCoins.js';
import ChargedAmount from './ChargedAmount.js';
import { isValidItem, isValidChargeAmount } from '../utils/validations.js';
import { EXCEPTIONS } from '../configs/constants.js';

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
    const duplicatedItems = this.items.findByName(name);

    if (duplicatedItems.length >= 1) {
      duplicatedItems.forEach(([id]) => {
        this.updateItem(id, { name, price, quantity });
      });

      return this;
    }

    const result = this.store.insertItem({ name, price, quantity });
    this.items.insert(result.id, name, price, quantity);

    return this;
  }

  updateItem(id, { name, price, quantity }) {
    this.store.updateItem(id, { name, price, quantity });
    this.items.items.set(id, { name, price, quantity });
  }

  refillCoins(amount) {
    this.coins.refill(amount);
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
    const item = this.items.findById(id);

    this.store.updateCharge(this.chargedAmount.purchase(item.price));
    this.items.purchase(id);

    if (this.items.findById(id).isOutOfStock()) {
      this.store.removeitem(id);

      return this;
    }

    this.store.updateItem(id, item.toObject());

    return this;
  }

  // amount 직접 접근 안 하도록 수정t
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

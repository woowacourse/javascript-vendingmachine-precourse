import Store from '../store/Store.js';
import Items from './Items.js';
import Coins from './Coins.js';
import VendingMachineCoins from './VendingMachineCoins.js';
import ChargedAmount from './ChargedAmount.js';
import tc from '../core/utils/tc.js';
import { isValidItem, isValidChargeAmount } from '../utils/validations.js';
import { EXCEPTIONS } from '../configs/constants.js';

export default class VendingMachine {
  constructor(store, { items, coins, chargedAmount }, _ = tc(store, Store)) {
    this.store = store;
    this.items = new Items(items);
    this.coins = new VendingMachineCoins(coins);
    this.chargedAmount = new ChargedAmount(chargedAmount);
    this.returnedCoins = new Coins();
  }

  // TODO: 예외 처리
  addItem(
    name,
    price,
    quantity,
    _0 = tc(name, 'string'),
    _1 = tc(price, 'number'),
    _2 = (quantity, 'number')
  ) {
    if (!isValidItem(name, price, quantity)) {
      throw EXCEPTIONS.WRONG_ITEM;
    }

    const result = this.store.insert({ name, price, quantity });
    this.items.insert(result.id, name, price, quantity);

    return this;
  }

  refillCoins(amount, _ = tc(amount, 'number')) {
    if (!isValidChargeAmount(amount)) {
      throw EXCEPTIONS.WRONG_CHARGE_AMOUNT;
    }

    this.coins.refill(amount);
    this.store.updateCoins(this.coins.toObject());

    return this;
  }

  charge(amount, _ = tc(amount, 'number')) {
    if (!isValidChargeAmount(amount)) {
      throw EXCEPTIONS.WRONG_CHARGE_AMOUNT;
    }

    this.store.updateCharge(this.chargedAmount.amount + amount);
    this.chargedAmount.charge(amount);

    return this;
  }

  // TODO: 데이터 흐름 수정
  purchase(id, _ = tc(id, 'number')) {
    const item = this.items.find(id);

    this.store.updateCharge(this.chargedAmount.purchase(item.price));

    this.items.purchase(id);
    this.store.update(id, item);

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

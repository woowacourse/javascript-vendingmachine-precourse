import ChargedMoney from "./chargedMoney.js";
import VendingMachineCoins from "./vendingMachineCoins.js";
import VendingMachineItems from "./vendingMachineItems.js";

const coinTypes = [500, 100, 50, 10];

export default class VendingMachine {
  constructor() {
    this.userMoney = new ChargedMoney();
    this.products = new VendingMachineItems();
    this.coins = new VendingMachineCoins();
  }

  addProduct(name, price, quality) {
    this.products.addItem(name, price, quality);
  }

  purchaseProduct(name) {
    const canPurchaseProduct = this.#canPurchase(name);
    if (canPurchaseProduct) {
      const purchasedPrice = this.products.getPrice(name);
      this.products.purchaseItem(name);
      this.userMoney.decreaseAmount(purchasedPrice);
    }
    return canPurchaseProduct;
  }

  #canPurchase(name) {
    return (
      this.products.getQuantity(name) !== 0 &&
      this.products.getPrice(name) <= this.userMoney.getAmount()
    );
  }

  addVendingMachineCoins(money) {
    this.coins.addCoins(money);
  }

  chargeUserMoney(money) {
    this.userMoney.incrementAmount(money);
  }

  getProducts() {
    return this.products.getItemsList();
  }

  getRemainingUserMoney() {
    return this.userMoney.getAmount();
  }

  getChange() {
    const changedCoins = this.coins.removeCoins(this.userMoney.getAmount());
    const changedSum = Object.keys(changedCoins).reduce(
      (prev, curr) => prev + curr * changedCoins[curr],
      0
    );
    this.userMoney.decreaseAmount(changedSum);
    return coinTypes.map((coin) => [coin, changedCoins[coin]]);
  }
}

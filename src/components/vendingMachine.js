function VendingMachine() {
  this.products = [];
  this.charge = 0;
  this.coin = {
    500: 0,
    100: 0,
    50: 0,
    10: 0,
  };
  this.insertMoney = 0;

  this.addProduct = (product) => {
    this.products.push(product);
    localStorage.setItem('product', JSON.stringify(this.products));
  };

  this.addCharge = (charge) => {
    this.charge += charge;
    localStorage.setItem('charge', JSON.stringify(this.charge));
  };

  this.addCoin = (charge) => {
    let amount = charge;

    while (amount >= 0) {
      const coin = MissionUtils.Random.pickNumberInList([10, 50, 100, 500]);

      if (coin <= amount) {
        this.coin[coin] += 1;
        amount -= coin;
      }

      if (!amount) {
        break;
      }
    }
    localStorage.setItem('coin', JSON.stringify(this.coin));
  };

  this.addInsertMoney = (money) => {
    this.insertMoney += money;
    localStorage.setItem('insert', JSON.stringify(this.insertMoney));
  };

  this.purchaseProduct = (name) => {
    const product = this.products.find((product) => product.name === name);

    product.quantity -= 1;
    this.insertMoney -= product.price;
    localStorage.setItem('product', JSON.stringify(this.products));
    localStorage.setItem('insert', JSON.stringify(this.insertMoney));
  };
}

export const vendingMachine = new VendingMachine();

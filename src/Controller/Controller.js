const checkEmpty = (value) => value.trim().length > 0;
const checkInteger = (value) => Number.isInteger(+value);
const checkOverHundred = (value) => +value >= 100;
const checkTenTimes = (value) => +value % 10 === 0;
const checkOverZero = (value) => +value > 0;
const checkUnderZero = (value) => +value > 10;
const getIndex = (value) => {
  let index = 0;
  if (value === 500) index = 0;
  if (value === 100) index = 1;
  if (value === 50) index = 2;
  if (value === 10) index = 3;
  return index;
};

const getValue = (index) => {
  let money = 0;
  if (index === 0) money = 500;
  if (index === 1) money = 100;
  if (index === 2) money = 50;
  if (index === 3) money = 10;
  return money;
};

export default class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.model.bindProductChange(this.onProductChange);
    this.model.bindCoinChange(this.onCoinChange);
    this.view.bindProductAdd(this.productAddHandler);
    this.view.bindChargeCoin(this.chargeCoinHandler);

    this.view.displayProductAdd(this.model.product);
    this.view.displayChargeCoin(this.model.coin, this.getCoinSum());
  }

  onProductChange = (product) => {
    this.view.displayProductAddChange(product);
  };

  onCoinChange = (coin) => {
    this.view.displayChargeCoinChange(coin);
  };

  productAddHandler = (name, price, quantity) => {
    let flag = true;
    if (!checkEmpty(name)) {
      alert("🚨 1자 이상의 상품명을 입력해주세요");
      flag = false;
    }
    if (
      !checkInteger(price) ||
      !checkOverHundred(price) ||
      !checkTenTimes(price)
    ) {
      alert("🚨 10으로 나누어 떨어지는 100이상의 정수를 입력해 주세요");
      flag = false;
    }

    if (!checkInteger(quantity) || !checkOverZero(quantity)) {
      alert("🚨 1이상의 정수값을 입력해주세요");
      flag = false;
    }

    if (flag) this.model.addProduct(name, price, quantity);
  };

  chargeCoinHandler = (chargeMoney) => {
    if (
      !checkInteger(chargeMoney) ||
      !checkUnderZero(chargeMoney) ||
      !checkTenTimes(chargeMoney)
    ) {
      alert("🚨 10으로 나누어 떨어지는 10이상의 정수를 입력해 주세요");
    } else {
      this.makeMoneyCoin(+chargeMoney);
      return this.getCoinSum();
    }
  };

  makeMoneyCoin = (money) => {
    const coins = this.model.coin;
    let sum = 0;
    while (sum !== money) {
      const randomCoin = MissionUtils.Random.pickNumberInList([
        500, 100, 50, 10,
      ]);
      if (sum + randomCoin <= money) {
        sum += randomCoin;
        coins[getIndex(randomCoin)] += 1;
      }
    }
    this.model.addCoin(coins);
  };

  getCoinSum = () => {
    let sum = 0;
    this.model.coin.forEach((count, index) => {
      sum += count * getValue(index);
    });
    return sum;
  };
}

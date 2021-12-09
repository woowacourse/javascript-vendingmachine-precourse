const checkEmpty = (value) => value.trim().length > 0;
const checkInteger = (value) => Number.isInteger(+value);
const checkOverHundred = (value) => +value >= 100;
const checkTenTimes = (value) => +value % 10 === 0;
const checkOverZero = (value) => +value > 0;
const checkUnderZero = (value) => +value > 10;

export default class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.model.bindProductChange(this.onProductChange);
    this.view.bindProductAdd(this.productAddHandler);
    this.view.bindChargeCoin(this.chargeCoinHandler);

    this.view.displayProductAdd(this.model.product);
    this.view.displayChargeCoin();
  }

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
      return chargeMoney;
    }
  };

  makeMoneyCoin = (money) => {
    const coin = new Map();
    coin[500] = this.model.coin.fiveHoundred;
    coin[100] = this.model.coin.oneHoundred;
    coin[50] = this.model.coin.fifty;
    coin[10] = this.model.coin.ten;
    let sum = 0;
    while (sum !== money) {
      const randomCoin = MissionUtils.Random.pickNumberInList([
        10, 50, 100, 500,
      ]);
      if (sum + randomCoin <= money) {
        sum += randomCoin;
        coin[randomCoin]++;
      }
    }
    this.model.addCoin(coin[500], coin[100], coin[50], coin[10]);
  };

  onProductChange = (product) => {
    this.view.displayProductAddChange(product);
  };
}

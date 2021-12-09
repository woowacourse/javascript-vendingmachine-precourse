const checkEmpty = (value) => value.trim().length > 0;
const checkInteger = (value) => Number.isInteger(+value);
const checkOverHundred = (value) => +value >= 100;
const checkTenTimes = (value) => +value % 10 === 0;
const checkOverZero = (value) => +value > 0;

export default class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.view.bindProductAdd(this.productAddHandler);
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
  };
}

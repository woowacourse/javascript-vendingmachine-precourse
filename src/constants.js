const errorSameName =
  '이미 같은 상품명의 음료수가 있습니다. 다른 상품명을 입력해주세요';
const errorPrice =
  '상품 가격은 100원부터 시작해야 하며, 10원으로 나누어 떨어져야 합니다. 다시 입력해주세요.';
const errorQuantity = '상품 수량은 0개 이상이어야 합니다. 다시 입력해주세요.';
const errorChargedMoney =
  '충전 금액은 0원 이상이어야 하며, 10원으로 나누어 떨어져야 합니다. 다시 입력해주세요.';
const errorInsertedMoney =
  '상품 가격은 0원 이상이어야 하며, 10원으로 나누어 떨어져야 합니다. 다시 입력해주세요.';
const errorNotEnoughMoney =
  '투입된 돈으로는 해당 제품을 구입하기에 부족합니다.';
const errorSoldOut = '해당 제품은 매진되었습니다.';

const minimumPrice = 100;
const dividingStandard = 10;
const listOfChargingUnit = [500, 100, 50, 10];
const number500 = 500;
const number100 = 100;
const number50 = 50;
const number10 = 10;

export {
  errorSameName,
  errorPrice,
  errorQuantity,
  errorChargedMoney,
  errorInsertedMoney,
  errorNotEnoughMoney,
  errorSoldOut,
  minimumPrice,
  dividingStandard,
  listOfChargingUnit,
  number500,
  number100,
  number50,
  number10,
};

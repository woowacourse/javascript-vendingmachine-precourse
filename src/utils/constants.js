const CONDITION = {
  PRICE: {
    minPrice: 100,
    divideUnit: 10,
  },
  MONEY: {
    divideUnit: 10,
  },
};

const ALERT_MSG = {
  emptyInput: "모든 값을 입력해주세요.",
  wrongProductName: "같은 이름을 가진 상품은 추가할 수 없습니다.",
  wrongProductPrice: `가격은 ${CONDITION.PRICE.minPrice}원 이상이고 ${CONDITION.PRICE.divideUnit}원으로 나누어 떨어져야 합니다.`,
  wrongProductQuantity: "재고가 1개 이상이어야 등록할 수 있습니다.",
  wrongChargeMoney: `액수는 ${CONDITION.MONEY.divideUnit}으로 나누어 떨어지는 자연수만 입력 가능합니다.`,
  lackMoney: "금액이 부족합니다.",
  askChangeProduct:
    "이미 같은 이름의 상품이 존재합니다. 해당 상품의 가격과 재고를 입력한 값으로 변경하시겠습니까?",
  noMoneyCustomer: "투입한 금액이 없습니다.",
  noMoneyInMachine: "자판기 속에 돈이 없어 반환에 실패하였습니다.",
};

const COIN_TYPES = [500, 100, 50, 10];

export { ALERT_MSG, COIN_TYPES, CONDITION };

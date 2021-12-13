export default Object.freeze({
  // 상품명 관련 메세지
  productNameIsRequired: '상품명을 입력 해주세요',
  productNameAlreadyExist: '동일한 상품명이 이미 존재합니다.',

  // 상품 가격 관련 메세지
  productPriceMinimumIs100: '가격은 최소 100원 입니다',
  productPriceHaveToDivide10: '가격은 10으로 나누어 떨어져야 합니다',

  // 상품 수량 관련 메세지
  productQuantityIsRequired: '상품 수량을 입력 해주세요',
  productQuantityHaveToPlusInteger: '상품 수량은 0보다 커야 합니다',

  // 보유 금액 관련 메세지
  chargeInputIsRequired: '자판기가 보유할 금액을 입력 해주세요',
  chargeInputHaveToDividedByTen: '자판기가 보유할 금액은 10으로 나누어지는 금액이어야 합니다',
  chargeInputHaveToPlusInteger: '자판기가 보유할 금액은 0보다 커야 합니다',

  returnMustHaveVendingMachineCoin: '자판기에 동전이 없습니다',

  // 충전 금액 관련 메세지
  purchaseChargeInputIsRequired: '투입할 금액을 입력 해주세요',
  purchaseChargeHaveToDivide10: '투입할 금액은 10으로 나누어 떨어져야 합니다',
  purchaseChargeHaveToPlusInteger: '투입할 금액은 음수여선 안됩니다',

  // 구매 관련 메세지
  purchaseChargePriceHaveToUnderCharge: '투입한 금액이 부족합니다',

  // 반환 관련 메세지
  returnMustHaveCharge: '투입된 금액이 부족합니다',
});

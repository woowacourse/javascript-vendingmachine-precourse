export const INITIAL_TAB_ID = Object.freeze({
    PRODUCT_MANAGE_TAB: "product-add-menu",
    PRODUCT_PURCHASE_TAB: "product-purchase-menu",
    CHARGE_TAB: "vending-machine-manage-menu",
});

export const MANAGE_TAB_ID = Object.freeze({
    NAME_INPUT: "product-name-input",
    PRICE_INPUT: "product-price-input",
    QUANTITY_INPUT: "product-quantity-input",
    ADD_BUTTON: "product-add-button",
});

export const MANAGE_TAB_CLASS = Object.freeze({
    EACH_ITEM: "product-manage-item",
    MANAGE_NAME: "product-manage-name",
    MANAGE_PRICE: "product-manage-price",
    MANAGE_QUANTITY: "product-manage-quantity",
});

export const MANAGE_STRING = Object.freeze({
    NAME: "상품명",
    PRICE: "가격",
    AMOUNT: "수량",
    ADD: "추가하기",
    STATE: "상품 현황",
    TITLE: "상품 추가하기",
});

export const CHARGE_TAB_ID = Object.freeze({
    CHARGE_INPUT: "vending-machine-charge-input",
    CHARGE_BUTTON: "vending-machine-charge-button",
    CHARGE_AMOUNT: "vending-machine-charge-amount",
    COIN_500: "vending-machine-coin-500-quantity",
    COIN_100: "vending-machine-coin-100-quantity",
    COIN_50: "vending-machine-coin-50-quantity",
    COIN_10: "vending-machine-coin-10-quantity",
});

export const CHARGE_STRING = Object.freeze({
    TITLE: "자판기 동전 충전하기",
    INPUT_PLACE: "자판기가 보유할 금액",
    CHARGE: "충전하기",
    CURRENT_AMOUNT: "보유 금액 :",
    COIN_STATE: "자판기가 보유한 동전",
    COIN: "동전",
    COUNT: "개수",
    COIN_500: "500",
    COIN_100: "100",
    COIN_50: "50",
    COIN_10: "10",
    WON: "원",
    EACH: "개",
});

export const PURCHASE_TAB_ID = Object.freeze({
    CHARGE_INPUT: "charge-input",
    CHARGE_BUTTON: "charge-button",
    CHARGE_AMOUNT: "charge-amount",
    RETURN_BUTTON: "coin-return-button",
    COIN_500: "coin-500-quantity",
    COIN_100: "coin-100-quantity",
    COIN_50: "coin-50-quantity",
    COIN_10: "coin-10-quantity",
});

export const PURCHASE_TAB_CLASS = Object.freeze({
    EACH_ITEM: "product-purchase-item",
    PURCHASE_BUTTON: "purchase-button",
    PURCHASE_NAME: "product-purchase-name",
    PURCHASE_PRICE: "product-purchase-price",
    PURCHASE_QUANTITY: "product-purchase-quantity",
});

export const PURCHASE_STRING = Object.freeze({
    INPUT_TITLE: "금액 투입",
    INPUT_AMOUNT: "투입할 금액",
    INPUT_MONEY: "투입하기",
    INPUT_AMOUNT: "투입한 금액: ",
    PRODUCT_CAN_PURCHASE: "구매할 수 있는 상품현황",
    PURCHASE: "구매",
    RETURN_TITLE: "잔돈",
    RETURN_BUTTON: "반환하기",
});

export const EMPTY = "";
export const ZERO = 0;
export const click = "click";

export const TABLE_CLASS = Object.freeze({
    COIN_TABLE: "coin_table",
    PRODUCT_TABLE: "product_table",
});

export const LOACL_STORAGE = Object.freeze({
    PRODUCT: "product",
    TOTAL_AMOUNT: "total_amount",
    COIN_AMOUNT: "coin_amount",
});

export const ERROR_MESSAGE = Object.freeze({
    NOT_NUMBER: "숫자를 입력해주세요.",
    OVER_ZERO: "양의 정수를 입 력해주세요.",
    DIVIDE_TEN: "10의 자리로 나누어 떨어지게 입력해주세요.",
    AlREADY_EXIST: "이미 존재하는 상품입니다.",
    IS_EMPTY: "값을 입력해주세요.",
    OVER_HUNDRED: "100이상 입력해주세요",
});

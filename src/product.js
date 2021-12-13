export class PRODUCT {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
    purchase() {
        this.quantity -= 1;
    }
}

export const ERROR_MESSAGE = {
    BLANK_ERROR: '공백을 입력할 수 없습니다.',
    PRODUCT_PRICE_INPUT_ERROR: '상품가격은 100보다 크고 10으로 나누어 떨어져야합니다',
    PRODUCT_QUANTITY_INPUT_ERROR: '상품수량은 0보다 크고 정수이어야합니다',
    PRODUCT_NAME_DUPLICATE: '이미 등록된 상품입니다',
    VENDING_MACHINE_CHARGE_INPUT_NUMBER_ERROR: '잔돈은 0보다 크고 10으로 나누어떨어져야합니다.',
    CHARGE_INPUT_MINUS_ERROR: '투입금액은 음수또는 0 일 수 없습니다.',
    CHARGE_INPUT_INT_ERROR: '투입금액은 10으로 나누어 떨어져야 합니다.',
    CUSTOMER_CHARGE_TOTAL_LACK: '잔액이 부족합니다'
};

export const GAME = {
    COIN_ARRAY: [500, 100, 50, 10],
    VENDING_MACHINE_CHARGE_ARRAY: [0, 0, 0, 0],
    VENDING_MACHINE_CHARGE_TOTAL: 0,
    CUSTOMER_CHARGE_ARRAY: [0, 0, 0, 0],
    CUSTOMER_CHARGE_TOTAL: 0,
    PRODUCTS: []
};

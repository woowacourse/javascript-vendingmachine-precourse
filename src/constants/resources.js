export const HEADER_TITLE = '🥤자판기🥤';
export const TAB_NAMES = ['상품 관리', '잔돈 충전', '상품 관리'];

export const ADD_PRODUCT = {
    HEAD: '상품 추가하기',
    STATUS: '상품 현황',
    PLACEHOLDERS: {
        NAME: '상품명',
        PRICE: '가격',
        QUANTITY: '수량',
    },
    BUTTON: '추가하기',
    COLUMNS: ['상품명', '가격', '수량'],
};

export const MACHINE_MANAGE = {
    HEAD: '자판기 동전 충전하기',
    STATUS: {
        TOTAL: '보유 금액',
        COIN: '자판기가 보유한 동전',
    },
    PLACEHOLDER: '자판기가 보유할 금액',
    BUTTON: '충전하기',
    COLUMNS: ['동전', '개수'],
    ROWHEAD: ['500원', '100원', '50원', '10원'],
};

export const PURCHASE_PRODUCT = {
    HEAD: '금액 투입',
    STATUS: {
        CHARGE: '투입한 금액',
        PRODUCT: '구매할 수 있는 상품 현황',
        EXCHANGE: '잔돈',
    },
    PLACEHOLDER: '자판기가 보유할 금액',
    BUTTON: {
        CHARGE: '투입하기',
        PURCHASE: '구매하기',
        EXCHANGE: '반환하기',
    },
    COLUMNS: {
        PRODUCT: ['상품명', '가격', '수량', '구매'],
        EXCHANGE: ['동전', '개수'],
    },
    ROWHEAD: ['500원', '100원', '50원', '10원'],
};

export const ERROR_MESSAGE = {
    'PRODUCT-NAME-INPUT-ERROR': '상품이름은 1~255 길이의 이름을 입력해야 합니다.',
    'PRODUCT-PRICE-INPUT-ERROR': '상품 가격은 100원 이상 10원 단위 가격을 입력해야 합니다.',
    'PRODUCT-QUANTITY-INPUT-ERROR': '상품 수량은 음수를 입력할 수 없습니다.',
    'VENDING-MACHINE-CHARGE-INPUT-ERROR': '충전 금액은 10원 단위로 입력해야 합니다.',
    'CHARGE-INPUT-ERROR': '투입 금액은 양의 정수로 10원 단위로 입력해야 합니다.',
    'INSUFFICIENT-AMOUNT-ERROR': '상품을 구매할 금액이 부족합니다.',
    'NO-PRODUCT-ERROR': '상품의 수량이 부족합니다.',
};

export const INPUT_NAME = {
    'PRODUCT-NAME': 'product_add_name',
    'PRODUCT-PRICE': 'product_add_price',
    'PRODUCT-QUANTITY': 'product_add_quantity',
    'CHARGE-MONEY': 'charge-money',
};

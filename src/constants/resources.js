import { ROUTE_KEY } from './index.js';

export const TAB_NAMES = ['상품 관리', '잔돈 충전', '상품 관리'];

export default Object.freeze({
    COMMON: {
        HEADER: '🥤자판기🥤',
    },
    [ROUTE_KEY[0]]: {
        HEAD: '상품 추가하기',
        STATUS: '상품 현황',
        PLACEHOLDERS: {
            NAME: '상품명',
            PRICE: '가격',
            QUANTITY: '수량',
        },
        BUTTON: '추가하기',
        ERROR_MESSAGE: {
            NAME_INPUT: '상품 이름은 1~255 길이의 이름을 입력해야 합니다.',
            PRICE_INPUT: '상품 가격은 100원 이상 10원 단위로 입력해야 합니다.',
            QUANTITY_INPUT: '상품 수량은 음수를 입력할 수 없습니다.',
        },
    },
    [ROUTE_KEY[1]]: {
        HEAD: '자판기 동전 충전하기',
        STATUS: {
            TOTAL: '보유 금액',
            COIN: '자판기가 보유한 동전',
        },
        PLACEHOLDER: '자판기가 보유할 금액',
        BUTTON: '충전하기',
        ERROR_MESSAGE: {
            CHARGE_INPUT: '잔돈 충전 금액은 10원 단위의 양수를 입력해야 합니다.',
        },
    },
    [ROUTE_KEY[2]]: {
        HEAD: '금액 투입',
        STATUS: {
            CHARGE: '투입한 금액',
            PRODUCT: '구매할 수 있는 상품 현황',
            EXCHANGE: '잔돈',
        },
        PLACEHOLDER: '충전할 금액',
        BUTTON: {
            CHARGE: '투입하기',
            PURCHASE: '구매하기',
            EXCHANGE: '반환하기',
        },
        ERROR_MESSAGE: {
            CHARGE_INPUT: '투입 금액은 양의 정수로 10원 단위로 입력해야 합니다.',
            NO_MONEY: '상품을 구매할 금액이 부족합니다.',
            NO_PRODUCT: '상품의 수량이 부족합니다.',
        },
    },
});

export const ROUTE_KEY = ['ADD_PRODUCT', 'CHARGE_MONEY', 'PURCHASE_PRODUCT'];
export const COIN_TYPE = [500, 100, 50, 10];

export const route = [
    {
        label: '상품 관리',
        key: ROUTE_KEY[0],
    },
    {
        label: '잔돈 충전',
        key: ROUTE_KEY[1],
    },
    {
        label: '상품 구매',
        key: ROUTE_KEY[2],
    },
];

export const defaultStatus = {
    tabIdx: 0,
    productList: [],
    machineStatus: {
        total: 0,
        coins: [0, 0, 0, 0],
    },
    exchangeCoins: [0, 0, 0, 0],
    chargeMoney: 0,
};

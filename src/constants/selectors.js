import { getUID } from '../common/utils.js';
import { ROUTE_KEY } from './index.js';

export default Object.freeze({
    COMMON: {
        ID: {
            BUTTONS: ['product-add-menu', 'vending-machine-manage-menu', 'product-purchase-menu'],
            TARGET: 'main-wrap',
        },
        EVENT_DATA_KEY: 'data-event-id',
        EVENT_KEY: {
            BUTTON: 'main-navigation-button-click',
        },
    },
    [ROUTE_KEY[0]]: {
        ID: {
            NAME_INPUT: 'product-name-input',
            PRICE_INPUT: 'product-price-input',
            QUANTITY_INPUT: 'product-quantity-input',
            ADD_BUTTON: 'product-add-button',
            TABLE_VIEW: `${ROUTE_KEY[0]}-table-view`,
        },
        CLASS: {
            ITEM: 'product-manage-item',
            ITEM_NAME: 'product-manage-name',
            ITEM_PRICE: 'product-manage-price',
            ITEM_QUANTITY: 'product-manage-quantity',
        },
        EVENT_KEY: {
            FORM: ROUTE_KEY[0] + getUID(),
        },
        NAME: {
            NAME: 'name',
            PRICE: 'price',
            QUANTITY: 'quantity',
        },
    },
    [ROUTE_KEY[1]]: {
        ID: {
            CHARGE_INPUT: 'vending-machine-charge-input',
            CHARGE_BUTTON: 'vending-machine-charge-button',
            CHARGE_AMOUNT: 'vending-machine-charge-amount',
            COIN: [
                'vending-machine-coin-500-quantity',
                'vending-machine-coin-100-quantity',
                'vending-machine-coin-50-quantity',
                'vending-machine-coin-10-quantity',
            ],
            TABLE_VIEW: `${ROUTE_KEY[1]}-table-view`,
        },
        EVENT_KEY: {
            FORM: ROUTE_KEY[1] + getUID(),
        },
        NAME: {
            CHARGE: 'charge',
        },
    },
    [ROUTE_KEY[2]]: {
        ID: {
            CHARGE_INPUT: 'charge-input',
            CHARGE_BUTTON: 'charge-button',
            CHARGE_AMOUNT: 'charge-amount',

            COIN_RETURN_BUTTON: 'coin-return-button',
            COIN: ['coin-500-quantity', 'coin-100-quantity', 'coin-50-quantity', 'coin-10-quantity'],

            PRODUCT_TABLE_VIEW: `${ROUTE_KEY[2]}-product-table-view`,
            COIN_TABLE_VIEW: `${ROUTE_KEY[2]}-coin-table-view`,
        },
        CLASS: {
            ITEM: 'product-purchase-item',
            PURCHASE_BUTTON: 'purchase-button',
            ITEM_NAME: 'product-purchase-name',
            ITEM_PRICE: 'product-purchase-price',
            ITEM_QUANTITY: 'product-purchase-quantity',
        },
        NAME: {
            CHARGE: 'user-charge',
        },
        EVENT_KEY: {
            FORM: ROUTE_KEY[2] + getUID(),
            PURCHASE_BUTTON: ROUTE_KEY[2] + getUID(),
            RETURN_BUTTON: ROUTE_KEY[2] + getUID(),
        },
        DATASET: {
            ITEM_NAME: 'data-product-name',
            ITEM_PRICE: 'data-product-price',
            ITEM_QUANTITY: 'data-product-quantity',
        },
    },
});

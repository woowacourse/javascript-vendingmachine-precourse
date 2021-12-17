import { ROUTE_KEY } from './index.js';
import resources from './resources.js';
import selectors from './selectors.js';

const purchaseKey = 'PURCHASE_PRODUCT';

export default Object.freeze({
    [ROUTE_KEY[0]]: {
        COLUMNS: [
            { label: '상품명', key: 'name' },
            { label: '가격', key: 'price' },
            { label: '수량', key: 'quantity' },
        ],
    },
    [ROUTE_KEY[1]]: {
        COLUMNS: [
            { label: '동전', key: 'label' },
            { label: '개수', key: 'count' },
        ],
    },
    [ROUTE_KEY[2]]: {
        PRODUCT_COLUMNS: [
            { label: '상품명', key: 'name' },
            { label: '가격', key: 'price' },
            { label: '수량', key: 'quantity' },
            {
                label: '구매',
                key: 'purchase',
                render: (rowData, idx) => `
                    <button
                        class="${selectors[purchaseKey].CLASS.PURCHASE_BUTTON}"
                        ${selectors.COMMON.EVENT_DATA_KEY}="${selectors[purchaseKey].EVENT_KEY.PURCHASE_BUTTON}"
                        data-idx="${idx}"
                    >${resources[purchaseKey].BUTTON.PURCHASE}</button>
                `,
            },
        ],
        COIN_COLUMNS: [
            { label: '동전', key: 'label' },
            { label: '개수', key: 'count' },
        ],
    },
});

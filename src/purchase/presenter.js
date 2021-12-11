import {
    clearContainer,
    getPresetContainer,
} from "../storage/initialPresent.js";
import {
    createTitle,
    createInput,
    appendDiv,
    createButton,
    createTable,
    setChargeTableRows,
    createParagraph,
    appendTable,
} from "../storage/createElement.js";
import {
    PURCHASE_TAB_ID as ID,
    PURCHASE_TAB_CLASS as CLASS,
    CHARGE_STRING,
    TABLE_CLASS,
    LOACL_STORAGE,
    EMPTY,
} from "../storage/constant.js";
import { getLocalStorage } from "../storage/localStorage.js";

export default function PurchasePresenter() {
    const $container = getPresetContainer();
    this.init = () => {
        clearContainer();
        setInitialManage();
    };

    const setInitialManage = () => {
        setChargeDiv();
        setPurchaseDiv();
        setReturnDiv();
    };

    const setChargeDiv = () => {
        const $addTitle = createTitle("금액 투입");
        const $amountInput = createInput(ID.CHARGE_INPUT, "투입할 금액");
        const $addButton = createButton(ID.CHARGE_BUTTON, "투입하기");
        const $totalAmount = createParagraph(ID.CHARGE_AMOUNT, "투입한 금액 :");
        appendDiv($container, [
            $addTitle,
            $amountInput,
            $addButton,
            $totalAmount,
        ]);
    };

    const setPurchaseDiv = () => {
        const $purchaseTitle = createTitle("구매할 수 있는 상품현황");
        const $purchaseTable = createTable(TABLE_CLASS.PRODUCT_TABLE, [
            ("상품명", "가격", "수량", "구매"),
        ]);
        // appendTable() 여기서 localStorage에서 값 얻어 올 것.
        appendDiv($container, [$purchaseTitle, $purchaseTable]);
        const loadProduct = getLocalStorage(LOACL_STORAGE.PRODUCT);
        if (loadProduct !== EMPTY) {
            const curProduct = JSON.parse(loadProduct);
        }
    };
    const setReturnDiv = () => {
        const $returnTitle = createTitle("잔돈");
        const $returnButton = createButton(ID.RETURN_BUTTON, "반환하기");
        const $returnTable = createTable(TABLE_CLASS.COIN_TABLE, [
            CHARGE_STRING.COIN,
            CHARGE_STRING.COUNT,
        ]);
        appendDiv($container, [$returnTitle, $returnButton, $returnTable]);

        const coinRows = [
            [CHARGE_STRING.COIN_500 + CHARGE_STRING.WON, ID.COIN_500],
            [CHARGE_STRING.COIN_100 + CHARGE_STRING.WON, ID.COIN_100],
            [CHARGE_STRING.COIN_50 + CHARGE_STRING.WON, ID.COIN_50],
            [CHARGE_STRING.COIN_10 + CHARGE_STRING.WON, ID.COIN_10],
        ];
        setChargeTableRows(TABLE_CLASS.COIN_TABLE, coinRows);
    };

    this.init();
}

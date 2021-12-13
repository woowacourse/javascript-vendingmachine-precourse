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
    createSpan,
    appendTable,
    createBr,
} from "../storage/createElement.js";
import {
    PURCHASE_TAB_ID as ID,
    PURCHASE_TAB_CLASS as CLASS,
    CHARGE_STRING,
    TABLE_CLASS,
    LOACL_STORAGE,
    EMPTY,
    PURCHASE_STRING as STRING,
    MANAGE_STRING,
} from "../storage/constant.js";
import { getLocalStorage } from "../storage/localStorage.js";
import PurchaseContainer from "./container.js";
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
        new PurchaseContainer();
    };

    const setChargeDiv = () => {
        const $addTitle = createTitle(STRING.INPUT_TITLE);
        const $amountInput = createInput(ID.CHARGE_INPUT, STRING.INPUT_AMOUNT);
        const $addButton = createButton(ID.CHARGE_BUTTON, STRING.INPUT_MONEY);
        const $br = createBr();
        const $span = createSpan(EMPTY, STRING.INPUT_AMOUNT);
        const $totalAmount = createSpan(ID.CHARGE_AMOUNT, EMPTY);
        appendDiv($container, [
            $addTitle,
            $amountInput,
            $addButton,
            $br,
            $span,
            $totalAmount,
        ]);
    };

    const setPurchaseDiv = () => {
        const $purchaseTitle = createTitle(STRING.PRODUCT_CAN_PURCHASE);
        const $purchaseTable = createTable(TABLE_CLASS.PRODUCT_TABLE, [
            MANAGE_STRING.NAME,
            MANAGE_STRING.PRICE,
            MANAGE_STRING.AMOUNT,
            STRING.PURCHASE,
        ]);
        appendDiv($container, [$purchaseTitle, $purchaseTable]);
        const loadProduct = getLocalStorage(LOACL_STORAGE.PRODUCT);
        if (loadProduct !== EMPTY) {
            const curProduct = JSON.parse(loadProduct);
            curProduct.forEach((element) => {
                appendTable(
                    TABLE_CLASS.PRODUCT_TABLE,
                    CLASS.EACH_ITEM,
                    element,
                    CLASS.PURCHASE_NAME,
                    CLASS.PURCHASE_PRICE,
                    CLASS.PURCHASE_QUANTITY,
                    CLASS.PURCHASE_BUTTON,
                );
            });
        }
    };
    const setReturnDiv = () => {
        const $returnTitle = createTitle(STRING.RETURN_TITLE);
        const $returnButton = createButton(
            ID.RETURN_BUTTON,
            STRING.RETURN_BUTTON,
        );
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

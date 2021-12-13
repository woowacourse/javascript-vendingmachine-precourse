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
} from "../storage/createElement.js";
import {
    MANAGE_TAB_ID as ID,
    MANAGE_TAB_CLASS as CLASS,
    MANAGE_STRING as STRING,
    TABLE_CLASS,
    LOACL_STORAGE,
    EMPTY,
} from "../storage/constant.js";
import { getLocalStorage } from "../storage/localStorage.js";
import ManageContainer from "./container.js";
export default function ManagePresenter() {
    const $container = getPresetContainer();
    this.init = () => {
        clearContainer();
        setInitialManage();
        new ManageContainer();
    };

    const setInitialManage = () => {
        const $addTitle = createTitle("상품 추가하기");
        const $productInput = createInput(ID.NAME_INPUT, STRING.NAME);
        const $priceInput = createInput(ID.PRICE_INPUT, STRING.PRICE);
        const $amountInput = createInput(ID.QUANTITY_INPUT, STRING.AMOUNT);
        const $addButton = createButton(ID.ADD_BUTTON, STRING.ADD);
        const $productState = createTitle(STRING.STATE);
        const $table = createTable(TABLE_CLASS.PRODUCT_TABLE, [
            STRING.NAME,
            STRING.PRICE,
            STRING.AMOUNT,
        ]);
        appendDiv($container, [
            $addTitle,
            $productInput,
            $priceInput,
            $amountInput,
            $addButton,
            $productState,
            $table,
        ]);
        checkLocalStorage();
    };

    const checkLocalStorage = () => {
        const loadProduct = getLocalStorage(LOACL_STORAGE.PRODUCT);
        if (loadProduct !== EMPTY) {
            const curProduct = JSON.parse(loadProduct);
            curProduct.forEach((element) => {
                appendTable(
                    TABLE_CLASS.PRODUCT_TABLE,
                    CLASS.EACH_ITEM,
                    element,
                    CLASS.MANAGE_NAME,
                    CLASS.MANAGE_PRICE,
                    CLASS.MANAGE_QUANTITY,
                );
            });
        }
    };

    this.init();
}

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
} from "../storage/constant.js";
import ManageContainer from "./container.js";
export default function ManagePresenter() {
    // 최초 실행시, localStorage를 확인해볼 것.
    // localStorage에 값이 없다는게 확인 된다면, 새로 깔면 되고,
    // product 상품을 만들어서 해당 값으로 저장하는 식으로 가자.
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
    };

    this.init();
}

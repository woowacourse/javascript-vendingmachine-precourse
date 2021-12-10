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
import { MANAGE_TAB_ID, MANAGE_TAB_CLASS } from "../storage/constant.js";
export default function ManagePresenter() {
    // 최초 실행시, localStorage를 확인해볼 것.
    // localStorage에 값이 없다는게 확인 된다면, 새로 깔면 되고,
    // product 상품을 만들어서 해당 값으로 저장하는 식으로 가자.
    const $container = getPresetContainer();
    this.init = () => {
        clearContainer();
        setInitialManage();
    };

    const setInitialManage = () => {
        const $addTitle = createTitle("상품 추가하기");
        const $productInput = createInput(MANAGE_TAB_ID.NAME_INPUT, "상품명");
        const $priceInput = createInput(MANAGE_TAB_ID.PRICE_INPUT, "가격");
        const $amountInput = createInput(MANAGE_TAB_ID.QUANTITY_INPUT, "수량");
        const $addButton = createButton(MANAGE_TAB_ID.ADD_BUTTON, "추가하기");
        const $productState = createTitle("상품 현황");
        const $table = createTable(["상품명", "가격", "수량"]);
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

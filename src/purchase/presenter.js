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
    appendTable,
    createParagraph,
} from "../storage/createElement.js";
import { PURCHASE_TAB_ID, PURCHASE_TAB_CLASS } from "../storage/constant.js";

export default function PurchasePresenter() {
    // 최초 실행시, localStorage를 확인해볼 것.
    // localStorage에 값이 없다는게 확인 된다면, 새로 깔면 되고,
    // product 상품을 만들어서 해당 값으로 저장하는 식으로 가자.
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
        const $amountInput = createInput(
            PURCHASE_TAB_ID.CHARGE_INPUT,
            "투입할 금액",
        );
        const $addButton = createButton(
            PURCHASE_TAB_ID.CHARGE_BUTTON,
            "투입하기",
        );
        const $totalAmount = createParagraph(
            PURCHASE_TAB_ID.CHARGE_AMOUNT,
            "투입한 금액 :",
        );
        appendDiv($container, [
            $addTitle,
            $amountInput,
            $addButton,
            $totalAmount,
        ]);
    };

    const setPurchaseDiv = () => {
        const $purchaseTitle = createTitle("구매할 수 있는 상품현황");
        const $purchaseTable = createTable(["상품명", "가격", "수량", "구매"]);
        // appendTable() 여기서 localStorage에서 값 얻어 올 것.
        appendDiv($container, [$purchaseTitle, $purchaseTable]);
    };
    const setReturnDiv = () => {
        const $returnTitle = createTitle("잔돈");
        const $returnButton = createButton(
            PURCHASE_TAB_ID.RETURN_BUTTON,
            "반환하기",
        );
        const $returnTable = createTable(["동전", "개수"]);
        appendDiv($container, [$returnTitle, $returnButton, $returnTable]);
        // appendTable("500원", "");
        // appendTable("100원", "");
        // appendTable("50원", "");
        // appendTable("10원", "");
    };
    this.init();
}

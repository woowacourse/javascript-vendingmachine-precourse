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
import { CHARGE_TAB_ID } from "../storage/constant.js";

export default function ChargePresenter() {
    // 최초 실행시, localStorage를 확인해볼 것.
    // localStorage에 값이 없다는게 확인 된다면, 새로 깔면 되고,
    // product 상품을 만들어서 해당 값으로 저장하는 식으로 가자.
    const $container = getPresetContainer();
    this.init = () => {
        clearContainer();
        setInitialManage();
    };

    const setInitialManage = () => {
        console.log("@");
        const $addTitle = createTitle("자판기 동전 충전하기");
        const $amountInput = createInput(
            CHARGE_TAB_ID.CHARGE_INPUT,
            "자판기가 보유할 금액",
        );
        const $addButton = createButton(
            CHARGE_TAB_ID.CHARGE_BUTTON,
            "충전하기",
        );
        const $totalAmount = createParagraph(
            CHARGE_TAB_ID.CHARGE_AMOUNT,
            "보유 금액 :",
        );
        const $coinState = createTitle("자판기가 보유한 동전");
        const $table = createTable(["동전", "개수"]);
        appendDiv($container, [
            $addTitle,
            $amountInput,
            $addButton,
            $totalAmount,
            $coinState,
            $table,
        ]);
        appendTable("500원", "");
        appendTable("100원", "");
        appendTable("50원", "");
        appendTable("10원", "");
    };

    this.init();
}

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
    createParagraph,
} from "../storage/createElement.js";
import {
    CHARGE_TAB_ID as ID,
    CHARGE_STRING as STRING,
} from "../storage/constant.js";
import ChargeContainer from "./container.js";
export default function ChargePresenter() {
    // 최초 실행시, localStorage를 확인해볼 것.
    // localStorage에 값이 없다는게 확인 된다면, 새로 깔면 되고,
    // product 상품을 만들어서 해당 값으로 저장하는 식으로 가자.
    const $container = getPresetContainer();
    this.init = () => {
        clearContainer();
        setInitialManage();
        new ChargeContainer();
    };

    const setInitialManage = () => {
        const $addTitle = createTitle(STRING.TITLE);
        const $amountInput = createInput(ID.CHARGE_INPUT, STRING.INPUT_PLACE);
        const $addButton = createButton(ID.CHARGE_BUTTON, STRING.CHARGE);
        const $totalAmount = createParagraph(
            ID.CHARGE_AMOUNT,
            STRING.CURRENT_AMOUNT,
        );
        const $coinState = createTitle(STRING.COIN_STATE);
        const $table = createTable([STRING.COIN, STRING.COUNT]);
        appendDiv($container, [
            $addTitle,
            $amountInput,
            $addButton,
            $totalAmount,
            $coinState,
            $table,
        ]);
        setChargeTableRows();
    };

    const setChargeTableRows = () => {
        const $table = document.querySelector(".table");
        [
            [STRING.COIN_500 + STRING.WON, ID.COIN_500],
            [STRING.COIN_100 + STRING.WON, ID.COIN_100],
            [STRING.COIN_50 + STRING.WON, ID.COIN_50],
            [STRING.COIN_10 + STRING.WON, ID.COIN_10],
        ].forEach((element) => {
            const tr = document.createElement("tr");
            const name = document.createElement("td");
            name.innerText = element[0];
            const count = document.createElement("td");
            count.id = element[1];
            tr.append(name, count);
            $table.append(tr);
        });
    };

    this.init();
}

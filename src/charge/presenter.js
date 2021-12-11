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
    createSpan,
    createBr,
    setChargeTableRows,
} from "../storage/createElement.js";
import {
    CHARGE_TAB_ID as ID,
    CHARGE_STRING as STRING,
    TABLE_CLASS,
} from "../storage/constant.js";
import ChargeContainer from "./container.js";
import { appendTable, Coin } from "./Coin.js";
export default function ChargePresenter() {
    // 최초 실행시, localStorage를 확인해볼 것.
    // localStorage에 값이 없다는게 확인 된다면, 새로 깔면 되고,
    // product 상품을 만들어서 해당 값으로 저장하는 식으로 가자.
    const $container = getPresetContainer();

    const coin = new Coin();
    this.init = () => {
        clearContainer();
        setInitialManage();
        new ChargeContainer(coin);
    };

    const setInitialManage = () => {
        const $addTitle = createTitle(STRING.TITLE);
        const $amountInput = createInput(ID.CHARGE_INPUT, STRING.INPUT_PLACE);
        const $addButton = createButton(ID.CHARGE_BUTTON, STRING.CHARGE);
        const $br = createBr();
        const $totalAmount = createSpan(
            ID.CHARGE_AMOUNT,
            STRING.CURRENT_AMOUNT,
        );
        const $coinState = createTitle(STRING.COIN_STATE);
        const $table = createTable(TABLE_CLASS.COIN_TABLE, [
            STRING.COIN,
            STRING.COUNT,
        ]);
        appendDiv($container, [
            $addTitle,
            $amountInput,
            $addButton,
            $br,
            $totalAmount,
            $coinState,
            $table,
        ]);
        const coinRows = [
            [STRING.COIN_500 + STRING.WON, ID.COIN_500],
            [STRING.COIN_100 + STRING.WON, ID.COIN_100],
            [STRING.COIN_50 + STRING.WON, ID.COIN_50],
            [STRING.COIN_10 + STRING.WON, ID.COIN_10],
        ];
        setChargeTableRows(TABLE_CLASS.COIN_TABLE, coinRows);
        appendTable(coin);
    };

    this.init();
}

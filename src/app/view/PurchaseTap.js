import InputNumber from '../asset/components/Input/InputNumber.js';
import SubTitle from '../asset/components/SubTitle/index.js';
import ButtonById from '../asset/components/Button/ButtonById.js';
import Table from '../asset/components/Table/index.js';
import CoinRow from '../asset/components/Row/CoinRow.js';
import CellById from '../asset/components/Cell/CellById.js';
import SubmitForm from '../asset/components/SubmitForm/index.js';
import INPUT_ID from '../asset/constants/INPUT_ID.js';
import INPUT_ITEM from '../asset/constants/INPUT_ITEM.js';
import SUB_TITLE_TEXT from '../asset/constants/SUB_TITLE_TEXT.js';
import BUTTON from '../asset/constants/BUTTON.js';
import TABLE_TITLE from '../asset/constants/TABLE_TITLE.js';
import CHANGE_COIN_ID from '../asset/constants/CHANGE_COIN_ID.js';
import GUIDE from '../asset/constants/GUIDE.js';
import Tap from './Tap.js';

export default class PurchaseTap extends Tap {
    constructor($skeleton) {
        super($skeleton);
        this.$inputAmountInput = InputNumber(INPUT_ID.inputAmount, INPUT_ITEM.inputAmount);
        this.$inputButton = ButtonById(BUTTON.purchase.title, BUTTON.purchase.id);
        this.$inputAmount = document.createElement('span');
        this.$purchaseContainer = Table();
        this.$returnButton = ButtonById(BUTTON.returnChangeCoin.title, BUTTON.returnChangeCoin.id);
        this.$coin500 = CellById('', CHANGE_COIN_ID[0]);
        this.$coin100 = CellById('', CHANGE_COIN_ID[1]);
        this.$coin50 = CellById('', CHANGE_COIN_ID[2]);
        this.$coin10 = CellById('', CHANGE_COIN_ID[3]);
    }

    init() {
        this.createInputCoinForm();
    }

    createInputCoinForm() {
        this.appendToApp(
            SubmitForm(
                SUB_TITLE_TEXT.inputAmount,
                this.$inputAmountInput,
                this.$inputButton,
                GUIDE.inputAmount,
                this.$inputAmount,
            ),
        );
    }
}

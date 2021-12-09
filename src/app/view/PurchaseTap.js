import InputNumber from '../asset/components/Input/InputNumber.js';
import SubTitle from '../asset/components/SubTitle/index.js';
import ButtonById from '../asset/components/Button/ButtonById.js';
import Table from '../asset/components/Table/index.js';
import CoinRow from '../asset/components/Row/CoinRow.js';
import CellById from '../asset/components/Cell/CellById.js';
import INPUT_ID from '../asset/constants/INPUT_ID.js';
import INPUT_ITEM from '../asset/constants/INPUT_ITEM.js';
import SUB_TITLE_TEXT from '../asset/constants/SUB_TITLE_TEXT.js';
import BUTTON from '../asset/constants/BUTTON.js';
import TABLE_TITLE from '../asset/constants/TABLE_TITLE.js';
import CHANGE_COIN_ID from '../asset/constants/CHANGE_COIN_ID.js';
import Tap from './Tap.js';
import GUIDE from '../asset/constants/GUIDE.js';

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
        const $wrap = document.createElement('div');

        $wrap.style.marginBottom = '15px';
        $wrap.append(SubTitle(SUB_TITLE_TEXT.inputAmount));
        $wrap.append(this.getInputCoinFormInput());
        $wrap.append(this.getInputCoinGuideWrap());
        this.appendToApp($wrap);
    }

    getInputCoinFormInput() {
        const $inputWrap = document.createElement('div');

        this.$inputButton.style.marginLeft = '5px';
        $inputWrap.append(this.$inputAmountInput);
        $inputWrap.append(this.$inputButton);

        return $inputWrap;
    }

    getInputCoinGuideWrap() {
        const $guideWrap = document.createElement('p');
        const $guide = document.createElement('span');

        $guideWrap.style.marginTop = '10px';
        $guide.append(`${GUIDE.inputAmount}:`);
        $guideWrap.append($guide);
        $guideWrap.append(this.$inputAmount);

        return $guideWrap;
    }
}

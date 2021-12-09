import InputNumber from '../asset/components/Input/InputNumber.js';
import INPUT_ID from '../asset/constants/INPUT_ID.js';
import SubTitle from '../asset/components/SubTitle/index.js';
import Table from '../asset/components/Table/index.js';
import ButtonById from '../asset/components/Button/ButtonById.js';
import BUTTON from '../asset/constants/BUTTON.js';
import INPUT_ITEM from '../asset/constants/INPUT_ITEM.js';
import SUB_TITLE_TEXT from '../asset/constants/SUB_TITLE_TEXT.js';
import GUIDE from '../asset/constants/GUIDE.js';

export default class ChargeCoinTap {
    constructor($skeleton) {
        this.$app = document.createElement('div');
        this.$chargeCoinInput = InputNumber(INPUT_ID.chargeCoin, INPUT_ITEM.chargeCoin);
        this.$chargeButton = ButtonById(BUTTON.chargeCoin.title, BUTTON.chargeCoin.id);
        this.$chargeAmount = document.createElement('span');
        this.$coinContainer = Table();

        $skeleton.append(this.$app);
    }

    appendToApp($element) {
        this.$app.append($element);
    }

    appendToCoinContainer($element) {
        this.$coinContainer.append($element);
    }

    init() {
        this.createChargeCoinForm();
    }

    createChargeCoinForm() {
        const $wrap = document.createElement('div');
        const $subTitle = SubTitle(SUB_TITLE_TEXT.chargeCoin);
        const $inputWrap = this.getChargeCoinFormInput();
        const $guideWrap = this.getChargeAmountGuideWrap();

        $wrap.style.marginBottom = '15px';
        $wrap.append($subTitle);
        $wrap.append($inputWrap);
        $wrap.append($guideWrap);
        this.appendToApp($wrap);
    }

    getChargeCoinFormInput() {
        const $inputWrap = document.createElement('div');

        this.$chargeButton.style.marginLeft = '5px';
        $inputWrap.append(this.$chargeCoinInput);
        $inputWrap.append(this.$chargeButton);

        return $inputWrap;
    }

    getChargeAmountGuideWrap() {
        const $guideWrap = document.createElement('p');
        const $guide = document.createElement('span');

        $guideWrap.style.marginTop = '10px';
        $guide.append(`${GUIDE.chargeCoin}:`);
        $guideWrap.append($guide);
        $guideWrap.append(this.$chargeAmount);

        return $guideWrap;
    }
}

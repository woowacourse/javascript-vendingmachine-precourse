import Tap from './Tap.js';
import {
    InputNumber,
    ButtonById,
    CellById,
    SubmitForm,
    SubTitle,
    CoinTable,
    Span,
} from '../asset/components/index.js';
import {
    INPUT_ID,
    BUTTON,
    INPUT_ITEM,
    SUB_TITLE_TEXT,
    COIN_ID,
    GUIDE,
    UNIT,
} from '../asset/constants/index.js';

export default class ChargeCoinTap extends Tap {
    constructor($skeleton) {
        super($skeleton);
        this.$chargeCoinInput = InputNumber(INPUT_ID.chargeCoin, INPUT_ITEM.chargeCoin);
        this.$chargeButton = ButtonById(BUTTON.chargeCoin.title, BUTTON.chargeCoin.id);
        this.$chargeAmount = Span(GUIDE.chargeAmount.id);
        this.$coin500 = CellById('', COIN_ID[0]);
        this.$coin100 = CellById('', COIN_ID[1]);
        this.$coin50 = CellById('', COIN_ID[2]);
        this.$coin10 = CellById('', COIN_ID[3]);
    }

    getChargeButton() {
        return this.$chargeButton;
    }

    getChargeAmount() {
        return this.$chargeCoinInput.value;
    }

    appendToCoinContainer($element) {
        this.$coinContainer.append($element);
    }

    init() {
        this.hide();
        this.createChargeCoinForm();
        this.createCoinsForm();
    }

    render(chargeAmount, distributedCoin) {
        this.setChargeAmount(chargeAmount);
        this.setCoins(distributedCoin);
        this.show();
    }

    setChargeAmount(chargeAmount) {
        this.$chargeAmount.innerText = chargeAmount;
    }

    setCoins(distributedCoin) {
        this.$coin500.innerText = `${distributedCoin[0]}${UNIT.count}`;
        this.$coin100.innerText = `${distributedCoin[1]}${UNIT.count}`;
        this.$coin50.innerText = `${distributedCoin[2]}${UNIT.count}`;
        this.$coin10.innerText = `${distributedCoin[3]}${UNIT.count}`;
    }

    createChargeCoinForm() {
        this.$chargeButton.style.marginLeft = '5px';
        this.appendToApp(
            SubmitForm(
                SUB_TITLE_TEXT.chargeCoin,
                this.$chargeCoinInput,
                this.$chargeButton,
                GUIDE.chargeAmount.title,
                this.$chargeAmount,
            ),
        );
    }

    createCoinsForm() {
        const $coinForm = document.createElement('div');

        $coinForm.style.marginTop = '20px';
        $coinForm.append(SubTitle(SUB_TITLE_TEXT.coins));
        $coinForm.append(CoinTable(this.$coin500, this.$coin100, this.$coin50, this.$coin10));
        this.appendToApp($coinForm);
    }
}

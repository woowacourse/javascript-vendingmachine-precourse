import InputNumber from '../asset/components/Input/InputNumber.js';
import INPUT_ID from '../asset/constants/INPUT_ID.js';
import ButtonById from '../asset/components/Button/ButtonById.js';
import CellById from '../asset/components/Cell/CellById.js';
import SubmitForm from '../asset/components/SubmitForm/index.js';
import CoinTableForm from '../asset/components/CoinTableForm/index.js';
import BUTTON from '../asset/constants/BUTTON.js';
import INPUT_ITEM from '../asset/constants/INPUT_ITEM.js';
import SUB_TITLE_TEXT from '../asset/constants/SUB_TITLE_TEXT.js';
import COIN_ID from '../asset/constants/COIN_ID.js';
import GUIDE from '../asset/constants/GUIDE.js';
import UNIT from '../asset/constants/UNIT.js';
import Tap from './Tap.js';

export default class ChargeCoinTap extends Tap {
    constructor($skeleton) {
        super($skeleton);
        this.$chargeCoinInput = InputNumber(INPUT_ID.chargeCoin, INPUT_ITEM.chargeCoin);
        this.$chargeButton = ButtonById(BUTTON.chargeCoin.title, BUTTON.chargeCoin.id);
        this.$chargeAmount = document.createElement('span');
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
        this.$chargeAmount.innerText = `${chargeAmount}${UNIT.amount}`;
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
                GUIDE.chargeCoin,
                this.$chargeAmount,
            ),
        );
    }

    createCoinsForm() {
        this.appendToApp(
            CoinTableForm(
                SUB_TITLE_TEXT.coins,
                this.$coin500,
                this.$coin100,
                this.$coin50,
                this.$coin10,
            ),
        );
    }
}

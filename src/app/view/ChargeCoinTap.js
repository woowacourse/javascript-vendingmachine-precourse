import InputNumber from '../asset/components/Input/InputNumber.js';
import INPUT_ID from '../asset/constants/INPUT_ID.js';
import SubTitle from '../asset/components/SubTitle/index.js';
import Table from '../asset/components/Table/index.js';
import ButtonById from '../asset/components/Button/ButtonById.js';
import CoinRow from '../asset/components/Row/CoinRow.js';
import CellById from '../asset/components/Cell/CellById.js';
import Cell from '../asset/components/Cell/index.js';
import BUTTON from '../asset/constants/BUTTON.js';
import INPUT_ITEM from '../asset/constants/INPUT_ITEM.js';
import SUB_TITLE_TEXT from '../asset/constants/SUB_TITLE_TEXT.js';
import COIN_ID from '../asset/constants/COIN_ID.js';
import COIN from '../asset/constants/COIN.js';
import GUIDE from '../asset/constants/GUIDE.js';
import TABLE_TITLE from '../asset/constants/TABLE_TITLE.js';
import UNIT from '../asset/constants/UNIT.js';

export default class ChargeCoinTap {
    constructor($skeleton) {
        this.$app = document.createElement('div');
        this.$chargeCoinInput = InputNumber(INPUT_ID.chargeCoin, INPUT_ITEM.chargeCoin);
        this.$chargeButton = ButtonById(BUTTON.chargeCoin.title, BUTTON.chargeCoin.id);
        this.$chargeAmount = document.createElement('span');
        this.$coin500 = CellById('', COIN_ID[0]);
        this.$coin100 = CellById('', COIN_ID[1]);
        this.$coin50 = CellById('', COIN_ID[2]);
        this.$coin10 = CellById('', COIN_ID[3]);

        $skeleton.append(this.$app);
    }

    getChargeButton() {
        return this.$chargeButton;
    }

    getChargeAmount() {
        return this.$chargeCoinInput.value;
    }

    appendToApp($element) {
        this.$app.append($element);
    }

    appendToCoinContainer($element) {
        this.$coinContainer.append($element);
    }

    init() {
        this.createChargeCoinForm();
        this.createCoinsForm();
    }

    render(chargeAmount, distributedCoin) {
        this.setChargeAmount(chargeAmount);
        this.setCoins(distributedCoin);
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
        const $wrap = document.createElement('div');

        $wrap.style.marginBottom = '15px';
        $wrap.append(SubTitle(SUB_TITLE_TEXT.chargeCoin));
        $wrap.append(this.getChargeCoinFormInput());
        $wrap.append(this.getChargeAmountGuideWrap());
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

    createCoinsForm() {
        const $wrap = document.createElement('div');

        $wrap.style.marginTop = '30px';
        $wrap.append(SubTitle(SUB_TITLE_TEXT.coins));
        $wrap.append(this.getCoinTable());
        this.appendToApp($wrap);
    }

    getCoinTable() {
        const $table = Table();

        $table.append(CoinRow(TABLE_TITLE.coin, Cell(TABLE_TITLE.count)));
        $table.append(CoinRow(`${COIN[0]}${UNIT.count}`, this.$coin500));
        $table.append(CoinRow(`${COIN[1]}${UNIT.count}`, this.$coin100));
        $table.append(CoinRow(`${COIN[2]}${UNIT.count}`, this.$coin50));
        $table.append(CoinRow(`${COIN[3]}${UNIT.count}`, this.$coin10));

        return $table;
    }
}

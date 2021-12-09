import InputNumber from '../asset/components/Input/InputNumber.js';
import INPUT_ID from '../asset/constants/INPUT_ID.js';
import SubTitle from '../asset/components/SubTitle/index.js';
import Table from '../asset/components/Table/index.js';
import ButtonById from '../asset/components/Button/ButtonById.js';
import CoinRow from '../asset/components/Row/CoinRow.js';
import CellById from '../asset/components/Cell/CellById.js';
import Cell from '../asset/components/Cell/index.js';
import SubmitForm from '../asset/components/SubmitForm/index.js';
import BUTTON from '../asset/constants/BUTTON.js';
import INPUT_ITEM from '../asset/constants/INPUT_ITEM.js';
import SUB_TITLE_TEXT from '../asset/constants/SUB_TITLE_TEXT.js';
import COIN_ID from '../asset/constants/COIN_ID.js';
import COIN from '../asset/constants/COIN.js';
import GUIDE from '../asset/constants/GUIDE.js';
import TABLE_TITLE from '../asset/constants/TABLE_TITLE.js';
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

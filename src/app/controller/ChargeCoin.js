import ChargeCoinTap from '../view/ChargeCoinTap.js';
import checkChargeAmount from '../asset/validation/checkChargeAmount.js';
import getEnableChargeAmount from '../asset/util/getEnableChargeAmount.js';
import distributeCoin from '../asset/util/distributeCoin.js';
import { getChargeAmount, getCoins, setCoins } from '../localStorage/coin.js';

export default class ChargeCoin {
    constructor($skeleton) {
        this.chargeCoinTap = new ChargeCoinTap($skeleton);
    }

    init() {
        this.chargeCoinTap.init();
        this.triggerChargeCoinEvent();
    }

    render() {
        this.chargeCoinTap.render(getChargeAmount(), getCoins());
    }

    hideTap() {
        this.chargeCoinTap.hide();
    }

    triggerChargeCoinEvent() {
        this.chargeCoinTap.getChargeButton().addEventListener('click', () => {
            const chargeAmount = this.chargeCoinTap.getChargeAmount();

            if (checkChargeAmount(chargeAmount)) {
                this.chargeCoin(getEnableChargeAmount(chargeAmount));
            }
        });
    }

    chargeCoin(chargeAmount) {
        const distributedCoin = distributeCoin(getChargeAmount() + chargeAmount);

        setCoins(distributedCoin);
        this.chargeCoinTap.setChargeAmount(getChargeAmount());
        this.chargeCoinTap.setCoins(distributedCoin);
    }
}

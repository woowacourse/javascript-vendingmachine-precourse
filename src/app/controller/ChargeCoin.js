import ChargeCoinTap from '../view/ChargeCoinTap.js';
import { checkChargeAmount } from '../asset/validation/index.js';
import { getEnableChargeAmount, distributeCoin } from '../asset/util/index.js';
import { getChargeAmount, getCoinCnts, setCoinCnts } from '../localStorage/index.js';

export default class ChargeCoin {
    constructor($skeleton) {
        this.chargeCoinTap = new ChargeCoinTap($skeleton);
    }

    init() {
        this.chargeCoinTap.init();
        this.triggerChargeCoinEvent();
    }

    render() {
        this.chargeCoinTap.render(getChargeAmount(), getCoinCnts());
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

        setCoinCnts(distributedCoin);
        this.render();
    }
}

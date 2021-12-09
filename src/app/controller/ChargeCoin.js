import ChargeCoinTap from '../view/ChargeCoinTap.js';

export default class ChargeCoin {
    constructor($skeleton) {
        this.chargeCoinTap = new ChargeCoinTap($skeleton);
    }

    init() {
        this.chargeCoinTap.init();
    }
}

import Inventory from './Inventory.js';
import VendingSkeleton from '../view/VendingSkeleton.js';
import ChargeCoin from './ChargeCoin.js';
import Purchase from './Purchase.js';

export default class VendingMachine {
    constructor() {
        this.vendingSkeleton = new VendingSkeleton();
        this.inventory = new Inventory(this.vendingSkeleton.getSkeleton());
        this.chargeCoin = new ChargeCoin(this.vendingSkeleton.getSkeleton());
        this.purchase = new Purchase(this.vendingSkeleton.getSkeleton());
    }

    init() {
        this.vendingSkeleton.init();
        this.inventory.init();
        this.chargeCoin.init();
        this.purchase.init();
        this.purchase.render();
        this.triggerConvertTapEvent();
    }

    triggerConvertTapEvent() {
        this.vendingSkeleton
            .getInvetoryTap()
            .addEventListener('click', this.getConvertTapEventListener(this.inventory));
        this.vendingSkeleton
            .getCoinTap()
            .addEventListener('click', this.getConvertTapEventListener(this.chargeCoin));
        this.vendingSkeleton
            .getPurchaseTap()
            .addEventListener('click', this.getConvertTapEventListener(this.purchase));
    }

    getConvertTapEventListener(showTap) {
        return () => {
            this.inventory.hideTap();
            this.chargeCoin.hideTap();
            this.purchase.hideTap();
            showTap.render();
        };
    }
}

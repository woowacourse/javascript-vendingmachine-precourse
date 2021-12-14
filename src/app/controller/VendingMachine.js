import Inventory from './Inventory.js';
import VendingSkeleton from '../view/VendingSkeleton.js';
import ChargeCoin from './ChargeCoin.js';
import Purchase from './Purchase.js';
import { TAP } from '../asset/constants/index.js';
import { getTap, setTap } from '../localStorage/index.js';

export default class VendingMachine {
    constructor() {
        this.vendingSkeleton = new VendingSkeleton();
        this[TAP.inventory.name] = new Inventory(this.vendingSkeleton.getSkeleton());
        this[TAP.coin.name] = new ChargeCoin(this.vendingSkeleton.getSkeleton());
        this[TAP.purchase.name] = new Purchase(this.vendingSkeleton.getSkeleton());
    }

    init() {
        this.vendingSkeleton.init();
        this[TAP.inventory.name].init();
        this[TAP.coin.name].init();
        this[TAP.purchase.name].init();
        this[getTap()].render();
        this.triggerConvertTapEvent();
    }

    triggerConvertTapEvent() {
        this.vendingSkeleton
            .getInvetoryTap()
            .addEventListener('click', this.getConvertTapEventListener(TAP.inventory.name));
        this.vendingSkeleton
            .getCoinTap()
            .addEventListener('click', this.getConvertTapEventListener(TAP.coin.name));
        this.vendingSkeleton
            .getPurchaseTap()
            .addEventListener('click', this.getConvertTapEventListener(TAP.purchase.name));
    }

    getConvertTapEventListener(tapName) {
        return () => {
            if (getTap() !== tapName) {
                this.inventory.hideTap();
                this.chargeCoin.hideTap();
                this.purchase.hideTap();
                this[tapName].render();
                setTap(tapName);
            }
        };
    }
}

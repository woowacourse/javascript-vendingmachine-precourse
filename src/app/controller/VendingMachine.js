import Inventory from './Inventory.js';
import VendingSkeleton from '../view/VendingSkeleton.js';
import ChargeCoin from './ChargeCoin.js';
import Purchase from './Purchase.js';
import TAP from '../asset/constants/TAP.js';
import { getTap, setTap } from '../localStorage/tap.js';

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
        this.triggerClickInventoryTapEvent();
        this.triggerClickCoinTapEvent();
        this.triggerClickPurchaseTapEvent();
    }

    triggerClickInventoryTapEvent() {
        this.vendingSkeleton
            .getInvetoryTap()
            .addEventListener(
                'click',
                this.getConvertTapEventListener(this[TAP.inventory.name], TAP.inventory.name),
            );
    }

    triggerClickCoinTapEvent() {
        this.vendingSkeleton
            .getCoinTap()
            .addEventListener(
                'click',
                this.getConvertTapEventListener(this[TAP.coin.name], TAP.coin.name),
            );
    }

    triggerClickPurchaseTapEvent() {
        this.vendingSkeleton
            .getPurchaseTap()
            .addEventListener(
                'click',
                this.getConvertTapEventListener(this[TAP.purchase.name], TAP.purchase.name),
            );
    }

    getConvertTapEventListener(showTap, tapName) {
        return () => {
            if (getTap() !== tapName) {
                this.inventory.hideTap();
                this.chargeCoin.hideTap();
                this.purchase.hideTap();
                showTap.render();
                setTap(tapName);
            }
        };
    }
}

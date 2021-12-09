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
        // this.chargeCoin.render();
    }
}

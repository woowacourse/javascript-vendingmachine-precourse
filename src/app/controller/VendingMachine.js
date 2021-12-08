import Inventory from './Inventory.js';
import VendingSkeleton from '../view/VendingSkeleton.js';

export default class VendingMachine {
    constructor() {
        this.vendingSkeleton = new VendingSkeleton();
        this.inventory = new Inventory(this.vendingSkeleton.getSkeleton());
    }

    init() {
        this.vendingSkeleton.init();
        this.inventory.init();
    }
}

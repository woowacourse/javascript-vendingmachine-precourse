import InventoryTap from '../view/InventoryTap.js';

export default class Inventory {
    constructor($skeleton) {
        this.inventoryTap = new InventoryTap($skeleton);
    }

    init() {
        this.inventoryTap.init();
    }
}

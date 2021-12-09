import InventoryTap from '../view/InventoryTap.js';
import checkProductName from '../asset/validation/checkProductName.js';
import checkProductPrice from '../asset/validation/checkProductPrice.js';
import checkProductQuantity from '../asset/validation/checkProductQuantity.js';
import { addProduct } from '../localStorage/inventory.js';

export default class Inventory {
    constructor($skeleton) {
        this.inventoryTap = new InventoryTap($skeleton);
    }

    init() {
        this.inventoryTap.init();
        this.triggerAddProductEvent();
    }

    triggerAddProductEvent() {
        this.inventoryTap.getButton().addEventListener('click', () => {
            const productName = this.inventoryTap.getProductName();
            const productPrice = this.inventoryTap.getProductPrice();
            const productQuantity = this.inventoryTap.getProductQuantity();

            if (
                checkProductName(productName) &&
                checkProductPrice(productPrice) &&
                checkProductQuantity(productQuantity)
            ) {
                this.addProduct(productName, productPrice, productQuantity);
            }
        });
    }

    addProduct(productName, productPrice, productQuantity) {
        this.inventoryTap.addProductRow(productName, productPrice, productQuantity);
        addProduct(productName, productPrice, productQuantity);
    }
}

import checkInputAmount from '../asset/validation/checkInputAmount.js';
import { getInputAmount, setInputAmount } from '../localStorage/inputAmount.js';
import { getProducts, setProducts } from '../localStorage/inventory.js';
import ERROR_MSG from '../asset/constants/ERROR_MSG.js';
import PurchaseTap from '../view/PurchaseTap.js';

export default class Purchase {
    constructor($skeleton) {
        this.purchaseTap = new PurchaseTap($skeleton);
    }

    init() {
        this.purchaseTap.init();
        this.triggerPutAmountEvent();
        this.triggerPurchaseProductEvent();
    }

    render() {
        this.purchaseTap.render(getInputAmount(), getProducts());
    }

    triggerPutAmountEvent() {
        this.purchaseTap.getInputButton().addEventListener('click', () => {
            const inputAmount = this.purchaseTap.getInputAmount();

            if (checkInputAmount(inputAmount)) {
                this.putAmount(Number(inputAmount));
            }
        });
    }

    putAmount(inputAmount) {
        setInputAmount(getInputAmount() + inputAmount);
        this.purchaseTap.setInputAmount(getInputAmount());
    }

    triggerPurchaseProductEvent() {
        this.purchaseTap.getPurchaseContainer().addEventListener('click', (e) => {
            if (e.target.tagName === 'BUTTON') {
                const products = getProducts();
                const id = Number(e.target.dataset.id);

                if (Number(products[id].productPrice) > getInputAmount()) {
                    alert(ERROR_MSG.lockAmount);
                } else {
                    products[id].productQuantity = Number(products[id].productQuantity) - 1;
                    this.updateProductsAndInputAmount(products, id);
                }
            }
        });
    }

    updateProductsAndInputAmount(products, id) {
        setInputAmount(getInputAmount() - products[id].productPrice);
        this.purchaseTap.setInputAmount(getInputAmount());

        if (products[id].productQuantity === 0) {
            products.splice(id, 1);
        }

        setProducts(products);
        this.purchaseTap.refreshProducts(products);
    }
}

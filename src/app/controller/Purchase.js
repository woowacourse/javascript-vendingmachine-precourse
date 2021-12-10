import PurchaseTap from '../view/PurchaseTap.js';
import checkInputAmount from '../asset/validation/checkInputAmount.js';
import { getInputAmount, setInputAmount } from '../localStorage/inputAmount.js';
import { getProducts, setProducts } from '../localStorage/inventory.js';
import { ERROR_MSG } from '../asset/constants/index.js';
import { distributeCoinGreedily, calcCoinAmount } from '../asset/util/index.js';
import { getCoins, setCoins } from '../localStorage/coin.js';

export default class Purchase {
    constructor($skeleton) {
        this.purchaseTap = new PurchaseTap($skeleton);
    }

    init() {
        this.purchaseTap.init();
        this.triggerPutAmountEvent();
        this.triggerPurchaseProductEvent();
        this.triggerReturnEvent();
    }

    render() {
        this.purchaseTap.render(getInputAmount(), getProducts());
    }

    hideTap() {
        this.purchaseTap.hide();
    }

    triggerPutAmountEvent() {
        this.purchaseTap.getInputButton().addEventListener('click', () => {
            const inputAmount = this.purchaseTap.getInputAmount();

            if (checkInputAmount(inputAmount)) {
                this.updateAmount(Number(inputAmount));
            }
        });
    }

    updateAmount(amount) {
        setInputAmount(getInputAmount() + amount);
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
        this.updateAmount(-products[id].productPrice);

        if (products[id].productQuantity === 0) {
            products.splice(id, 1);
        }

        setProducts(products);
        this.purchaseTap.refreshProducts(products);
    }

    triggerReturnEvent() {
        this.purchaseTap.getReturnButton().addEventListener('click', () => {
            if (getInputAmount() === 0) {
                alert(ERROR_MSG.noReturnAmount);
                return;
            }

            const coinCnts = getCoins();
            const distributedCoin = distributeCoinGreedily(getInputAmount(), coinCnts);

            this.updateAmount(-calcCoinAmount(distributedCoin));
            setCoins(coinCnts.map((coinCnt, idx) => coinCnt - distributedCoin[idx]));
            this.purchaseTap.setCoins(distributedCoin);
        });
    }
}

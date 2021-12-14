import PurchaseTap from '../view/PurchaseTap.js';
import { checkInputAmount } from '../asset/validation/index.js';
import {
    getInputAmount,
    setInputAmount,
    getProducts,
    setProducts,
    getCoinCnts,
    setCoinCnts,
} from '../localStorage/index.js';
import { ERROR_MSG } from '../asset/constants/index.js';
import { getDistributedCoinGreedily, calcCoinAmount } from '../asset/util/index.js';

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

            const coinCnts = getCoinCnts();
            const distributedCoin = getDistributedCoinGreedily(getInputAmount(), coinCnts);

            this.updateAmount(-calcCoinAmount(distributedCoin));
            setCoinCnts(coinCnts.map((coinCnt, idx) => coinCnt - distributedCoin[idx]));
            this.purchaseTap.setCoinCnts(distributedCoin);
        });
    }
}

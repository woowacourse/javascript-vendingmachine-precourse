import { VENDING_MACHINE_TITLE, TAP } from '../asset/constants/index.js';
import { MainTitle, ButtonById } from '../asset/components/index.js';

export default class VendingSkeleton {
    constructor() {
        this.$app = document.getElementById('app');
        this.$invetoryTap = ButtonById(TAP.inventory.title, TAP.inventory.id);
        this.$coinTap = ButtonById(TAP.coin.title, TAP.coin.id);
        this.$purchaseTap = ButtonById(TAP.purchase.title, TAP.purchase.id);
        this.$skeleton = document.createElement('div');
        this.$skeleton.style.marginTop = '15px';
    }

    getSkeleton() {
        return this.$skeleton;
    }

    getInvetoryTap() {
        return this.$invetoryTap;
    }

    getCoinTap() {
        return this.$coinTap;
    }

    getPurchaseTap() {
        return this.$purchaseTap;
    }

    appendToApp($element) {
        this.$app.append($element);
    }

    init() {
        this.createMainTitle();
        this.createTap();
        this.createSkeleton();
    }

    createMainTitle() {
        this.appendToApp(MainTitle(VENDING_MACHINE_TITLE));
    }

    createTap() {
        const $buttonWrap = document.createElement('div');

        this.getCoinTap().style.margin = '0 5px';
        $buttonWrap.append(this.getInvetoryTap());
        $buttonWrap.append(this.getCoinTap());
        $buttonWrap.append(this.getPurchaseTap());
        this.appendToApp($buttonWrap);
    }

    createSkeleton() {
        this.appendToApp(this.getSkeleton());
    }
}
import { VENDING_MACHINE_TITLE, TAP } from './asset/constants/dom-rule.js';
import mainTitle from './asset/components/MainTitle/index.js';
import ButtonById from './asset/components/Button/ButtonById.js';
import Inventory from './controller/Inventory.js';

export default class VendingMachine {
    constructor() {
        this.$app = document.getElementById('app');
        this.$invetoryTap = ButtonById(TAP.inventory.title, TAP.inventory.id);
        this.$coinTap = ButtonById(TAP.coin.title, TAP.coin.id);
        this.$purchase = ButtonById(TAP.purchase.title, TAP.purchase.id);
        this.$skeleton = document.createElement('div');
        this.inventory = new Inventory(this.$skeleton);
    }

    appendToApp($element) {
        this.$app.append($element);
    }

    init() {
        this.createElement();
    }

    createElement() {
        this.createMainTitle();
        this.createTap();
        this.createSkeleton();
    }

    createMainTitle() {
        this.appendToApp(mainTitle(VENDING_MACHINE_TITLE));
    }

    createTap() {
        const $buttonWrap = document.createElement('div');

        this.$coinTap.style.margin = '0 5px';
        $buttonWrap.append(this.$invetoryTap);
        $buttonWrap.append(this.$coinTap);
        $buttonWrap.append(this.$purchase);
        this.appendToApp($buttonWrap);
    }

    createSkeleton() {
        this.appendToApp(this.$skeleton);
    }
}

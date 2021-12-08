import { VENDING_MACHINE_TITLE, TAP_TITLE } from './asset/constants/dom-text.js';
import mainTitle from './asset/components/MainTitle/index.js';
import ButtonById from './asset/components/Button/ButtonById.js';

export default class VendingMachine {
    constructor() {
        this.$app = document.getElementById('app');
        this.$invetoryTap = ButtonById(TAP_TITLE.inventory);
        this.$coinTap = ButtonById(TAP_TITLE.coin);
        this.$purchase = ButtonById(TAP_TITLE.purchase);
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
}

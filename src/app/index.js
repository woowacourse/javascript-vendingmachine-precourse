import { VENDING_MACHINE_TITLE } from './asset/constants/dom-text.js';
import mainTitle from './asset/components/MainTitle/index.js';

export default class VendingMachine {
    constructor() {
        this.$app = document.getElementById('app');
        this.appendToApp(mainTitle(VENDING_MACHINE_TITLE));
    }

    appendToApp(html) {
        this.$app.insertAdjacentHTML('beforeend', html);
    }
}

import { domSelector } from '../common/index.js';
import {
    $mainSectionID,
    $productAddMenuID,
    $productPurchaseMenuID,
    $tabNavigationID,
    $vendingMachineManageMenuID,
} from '../constants/domSelectors.js';
import { HEADER_TITLE, TAB_NAMES } from '../constants/resources.js';
import Component from '../interface/Component.js';
import AddProduct from './AddProduct.js';
import PurchaseProduct from './PurchaseProduct.js';
import VendingMachineManage from './VendingMachineManage.js';

export default class App extends Component {
    setup() {
        this.routeComponent = {
            [$productAddMenuID]: AddProduct,
            [$vendingMachineManageMenuID]: VendingMachineManage,
            [$productPurchaseMenuID]: PurchaseProduct,
        };
    }

    mount() {
        const routeID = this.getState((state) => state.tabID);
        const eventTarget = domSelector(`#${$mainSectionID}`);
        new this.routeComponent[routeID](eventTarget);

        this.setEvent();
    }

    setEvent() {
        domSelector(`#${$tabNavigationID}`).addEventListener('click', this.tabChange.bind(this));
    }

    tabChange(ev) {
        if (ev.target.tagName !== 'BUTTON') return;
        this.setState('tabID', ev.target.id);
    }

    template() {
        return `
            <header>
                <h1>${HEADER_TITLE}</h1>
            </header>
            <nav id="${$tabNavigationID}">
                <button id="${$productAddMenuID}">${TAB_NAMES[0]}</button>
                <button id="${$vendingMachineManageMenuID}">${TAB_NAMES[1]}</button>
                <button id="${$productPurchaseMenuID}">${TAB_NAMES[2]}</button>
            </nav>
            <section id="${$mainSectionID}"></section>
        `;
    }
}

import { domSelector } from '../common/index.js';
import {
    $mainSectionID,
    $productAddMenuID,
    $productPurchaseMenuID,
    $tabNavigationID,
    $vendingMachineManageMenuID,
} from '../constants/domSelectors.js';
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
                <h1>🥤자판기🥤</h1>
            </header>
            <nav id="${$tabNavigationID}">
                <button id="${$productAddMenuID}">상품 관리</button>
                <button id="${$vendingMachineManageMenuID}">잔돈 충전</button>
                <button id="${$productPurchaseMenuID}">상품 구매</button>
            </nav>
            <section id="main-section"></section>
        `;
    }
}

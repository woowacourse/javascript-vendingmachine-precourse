import { domSelector, domsSelector, getExchangeCoin, setErrorStatus } from '../common/index.js';
import { isDivisibleTen, isPositiveNumber } from '../common/validation.js';
import {
    $chargeAmountID,
    $chargeButtonID,
    $chargeInputID,
    $coin100ID,
    $coin10ID,
    $coin500ID,
    $coin50ID,
    $coinReturnButtonID,
    $dataProductNameDataSet,
    $dataProductPriceDataSet,
    $dataProductQuantityDataSet,
    $productPurchaseItemClass,
    $productPurchaseNameClass,
    $productPurchasePriceClass,
    $productPurchaseQuantityClass,
    $purchaseButtonClass,
} from '../constants/domSelectors.js';
import Component from '../interface/Component.js';

export default class PurchaseProduct extends Component {
    setup() {
        this.machineStatus = this.getState((state) => state.vendingMachineStatus);
        this.productList = this.getState((state) => state.productStatus);
        this.chargeMoney = this.getState((state) => state.chargeMoney);
        this.exchangeCoin = this.getState((state) => state.exchangeCoin);
    }

    mount() {
        this.setEvent();
    }

    setEvent() {
        domSelector(`#${$chargeButtonID}`).addEventListener('click', this.chargeButtonClick.bind(this));
        domSelector(`#${$coinReturnButtonID}`).addEventListener('click', this.coinReturnButtonClick.bind(this));
        domsSelector(`.${$productPurchaseItemClass}`).forEach((elem) => {
            elem.addEventListener('click', this.tdClick.bind(this));
        });
        this.chargeMoneyInput = domSelector(`#${$chargeInputID}`);
    }

    chargeButtonClick(ev) {
        ev.preventDefault();

        const chargeValue = Number(this.chargeMoneyInput.value);

        if (!isPositiveNumber(chargeValue) || !isDivisibleTen(chargeValue)) {
            setErrorStatus('CHARGE-INPUT-ERROR');
            return;
        }
        this.chargeMoney += chargeValue;
        this.setState('chargeMoney', this.chargeMoney);
    }

    coinReturnButtonClick(ev) {
        ev.preventDefault();
        this.setExchangeMoney();
    }

    tdClick(ev) {
        if (ev.target.tagName !== 'BUTTON') return;
        const idx = ev.target.dataset.idxNumber;
        const { price, quantity } = this.productList[idx];
        if (price > this.chargeMoney) setErrorStatus('INSUFFICIENT-AMOUNT-ERROR');
        else if (quantity - 1 < 0) setErrorStatus('NO-PRODUCT-ERROR');
        else {
            this.chargeMoney -= price;
            this.productList[idx].quantity--;
            this.setStates({
                chargeMoney: this.chargeMoney,
                productList: this.productList,
            });
        }
    }

    setExchangeMoney() {
        this.calcExchange();

        this.setStates({
            chargeMoney: this.chargeMoney,
            vendingMachineStatus: this.machineStatus,
            exchangeCoin: this.exchangeCoin,
        });
    }

    calcExchange() {
        let useExchange = 0;
        this.exchangeCoin = getExchangeCoin(this.chargeMoney, this.machineStatus);

        Object.keys(this.exchangeCoin).forEach((coinType) => {
            this.machineStatus[coinType] -= this.exchangeCoin[coinType];
            useExchange += coinType * this.exchangeCoin[coinType];
        });

        this.chargeMoney -= useExchange;
        this.machineStatus.totalAmount -= useExchange;
    }

    getProductListHTML() {
        return this.productList
            .map(
                (item, idx) =>
                    `<tr class="${$productPurchaseItemClass}">
                        <td
                            class="${$productPurchaseNameClass}"
                            ${$dataProductNameDataSet}="${item.name}"
                        >${item.name}</td>
                        <td
                            class="${$productPurchasePriceClass}"
                            ${$dataProductPriceDataSet}="${item.price}"
                        >${item.price}</td>
                        <td
                            class="${$productPurchaseQuantityClass}"
                            ${$dataProductQuantityDataSet}="${item.quantity}"
                        >${item.quantity}</td>
                        <td>
                            <button class="${$purchaseButtonClass}" data-idx-number="${idx}">
                                구매하기
                            </button>
                        </td>
                    </tr>`
            )
            .join('\n');
    }

    template() {
        return `
        <h3>금액 투입</h3>
        <input id="${$chargeInputID}" type="number" placeholder="투입할 금액" />
        <input id="${$chargeButtonID}" type="submit" value="투입하기" />
        <p>투입한 금액 : <span id="${$chargeAmountID}">${this.chargeMoney}</span></p>
        <h3>구매할 수 있는 상품 현황</h3>
        <table>
            <thead>
                <tr><th>상품명</th><th>가격</th><th>수량</th><th>구매</th></tr>
            </thead>
            <tbody id="">${this.getProductListHTML()}</tbody>
        </table>
        <h3>잔돈</h3>
        <button id="${$coinReturnButtonID}">반환하기</button>

        <table>
            <thead><tr><th>동전</th><th>개수</th></tr></thead>
            <tbody>
                <tr><td>500원</td><td><span id="${$coin500ID}">${this.exchangeCoin[500]}</span>개</td></tr>
                <tr><td>100원</td><td><span id="${$coin100ID}">${this.exchangeCoin[100]}</span>개</td></tr>
                <tr><td>50원</td><td><span id="${$coin50ID}">${this.exchangeCoin[50]}</span>개</td></tr>
                <tr><td>10원</td><td><span id="${$coin10ID}">${this.exchangeCoin[10]}</span>개</td></tr>
            </tbody>
        </table>
        `;
    }
}

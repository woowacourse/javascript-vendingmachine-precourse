import { setError } from '../common/error.js';
import { getExchangeCoin } from '../common/utils.js';
import { isDivisibleTen, isPositiveNumber } from '../common/validation.js';
import Table from '../components/Table.js';
import { COIN_TYPE } from '../constants/index.js';
import { setEvent } from '../eventBus/index.js';
import Component from '../interface/Component.js';
import { getState, setState, setStates } from '../store/index.js';

export default class ChargeMoney extends Component {
    setup() {
        this.errorMessage = this.resources.ERROR_MESSAGE;

        this.productTable = new Table(`#${this.selectors.ID.PRODUCT_TABLE_VIEW}`);
        this.coinTable = new Table(`#${this.selectors.ID.COIN_TABLE_VIEW}`);
    }

    willmount() {
        this.machineStatus = getState((state) => state.machineStatus);
        this.productList = getState((state) => state.productList);
        this.chargeMoney = getState((state) => state.chargeMoney);
        this.exchangeCoins = getState((state) => state.exchangeCoins);
    }

    mount() {
        this.setTableConfig();
        this.productTable.render();
        this.coinTable.render();
        this.delegateEvent();
    }

    setTableConfig() {
        this.productTable.setConfig({
            columns: this.config.PRODUCT_COLUMNS,
            data: this.productList,
        });
        this.coinTable.setConfig({
            columns: this.config.COIN_COLUMNS,
            data: this.exchangeCoins.map((coin, idx) => ({
                label: `${COIN_TYPE[idx]}원`,
                count: coin,
            })),
        });
    }

    delegateEvent() {
        setEvent('submit', this.selectors.EVENT_KEY.FORM, this.onSubmit.bind(this));
        setEvent('click', this.selectors.EVENT_KEY.PURCHASE_BUTTON, this.onPurchase.bind(this));
        setEvent('click', this.selectors.EVENT_KEY.RETURN_BUTTON, this.onReturnCoin.bind(this));
    }

    onSubmit(ev) {
        ev.preventDefault();

        const charged = Number(ev.target[this.selectors.NAME.CHARGE].value);

        if (!isPositiveNumber(charged) || !isDivisibleTen(charged)) setError(this.errorMessage.CHARGE_INPUT);
        setState('chargeMoney', this.chargeMoney + charged);
    }

    onPurchase(ev) {
        const { idx } = ev.target.dataset;
        const { quantity, price } = this.productList[idx];

        if (quantity === 0) setError(this.errorMessage.NO_PRODUCT);
        else if (this.chargeMoney < price) setError(this.errorMessage.NO_MONEY);
        else {
            this.productList[idx].quantity--;

            setStates({
                chargeMoney: this.chargeMoney - price,
                productList: this.productList,
            });
        }
    }

    onReturnCoin() {
        const exchanged = getExchangeCoin(this.chargeMoney, this.machineStatus.coins);
        const returnMoney = exchanged.reduce((prev, next, idx) => prev + COIN_TYPE[idx] * next, 0);

        const nextMachineStatus = {
            total: this.machineStatus.total - returnMoney,
            coins: this.machineStatus.coins.map((cnt, idx) => cnt - exchanged[idx]),
        };

        setStates({
            machineStatus: nextMachineStatus,
            chargeMoney: this.chargeMoney - returnMoney,
            exchangeCoins: exchanged,
        });
    }

    inputFormTemplate() {
        return `
            <form ${this.eventAttr}="${this.selectors.EVENT_KEY.FORM}">
                <input
                    type="text" id="${this.selectors.ID.CHARGE_INPUT}"
                    name="${this.selectors.NAME.CHARGE}"
                    placeholder="${this.resources.PLACEHOLDER}" />
                <input type="submit" id="${this.selectors.ID.CHARGE_BUTTON}" value="${this.resources.BUTTON.CHARGE}" />
            </form>
        `;
    }

    template() {
        return `
            <h3>${this.resources.HEAD}</h3>
            ${this.inputFormTemplate()}
            <p> ${this.resources.STATUS.CHARGE}:
                <span id="${this.selectors.ID.CHARGE_AMOUNT}">${this.chargeMoney}</span> </p>
            <h3>${this.resources.STATUS.PRODUCT}</h3><div id="${this.selectors.ID.PRODUCT_TABLE_VIEW}"></div>
            <h3>${this.resources.STATUS.EXCHANGE}</h3>
            <button
                id="${this.selectors.ID.COIN_RETURN_BUTTON}"
                ${this.eventAttr}="${this.selectors.EVENT_KEY.RETURN_BUTTON}"
            >${this.resources.BUTTON.EXCHANGE}</button>
            <div id="${this.selectors.ID.COIN_TABLE_VIEW}"></div>
        `;
    }
}

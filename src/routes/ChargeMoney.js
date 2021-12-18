import { setError } from '../common/error.js';
import { getRandomCoin } from '../common/utils.js';
import { isDivisibleTen, isPositiveNumber } from '../common/validation.js';
import Table from '../components/Table.js';
import { COIN_TYPE } from '../constants/index.js';
import { setEvent } from '../eventBus/index.js';
import Component from '../interface/Component.js';
import { getState, setState } from '../store/index.js';

export default class ChargeMoney extends Component {
    setup() {
        this.errorMessage = this.resources.ERROR_MESSAGE;

        this.table = new Table(`#${this.selectors.ID.TABLE_VIEW}`);
        this.delegateEvent();
    }

    willmount() {
        this.machineStatus = getState((state) => state.machineStatus);
    }

    mount() {
        this.table.setConfig({
            columns: this.config.COLUMNS,
            data: this.machineStatus.coins.map((coin, idx) => ({
                label: `${COIN_TYPE[idx]}원`,
                count: coin,
            })),
        });

        this.table.render();
    }

    delegateEvent() {
        setEvent('submit', this.selectors.EVENT_KEY.FORM, this.onSubmit.bind(this));
    }

    onSubmit(ev) {
        ev.preventDefault();

        const charge = Number(ev.target[this.selectors.NAME.CHARGE].value);

        if (!isPositiveNumber(charge) || !isDivisibleTen(charge)) setError(this.errorMessage.CHARGE_INPUT);
        else this.setRandomCoin(charge);
    }

    setRandomCoin(money) {
        const randomCoin = getRandomCoin(money);

        this.nextStatus = {
            total: this.machineStatus.total + money,
            coins: this.machineStatus.coins.map((coin, idx) => coin + randomCoin[idx]),
        };

        setState('machineStatus', this.nextStatus);
    }

    inputFormTemplate() {
        return `
            <form ${this.eventAttr}="${this.selectors.EVENT_KEY.FORM}">
                <input type="text" id="${this.selectors.ID.CHARGE_INPUT}" name="${this.selectors.NAME.CHARGE}" placeholder="${this.resources.PLACEHOLDER}" />
                <input type="submit" id="${this.selectors.ID.ADD_BUTTON}" value="${this.resources.BUTTON}" />
            </form>
        `;
    }

    template() {
        return `
            <h3>${this.resources.HEAD}</h3>
            ${this.inputFormTemplate()}

            <p>
                ${this.resources.STATUS.TOTAL}:
                <span id="${this.selectors.ID.CHARGE_AMOUNT}">${this.machineStatus.total}</span>
            </p>

            <h3>${this.resources.STATUS.COIN}</h3>
            <div id="${this.selectors.ID.TABLE_VIEW}"></div>
        `;
    }
}

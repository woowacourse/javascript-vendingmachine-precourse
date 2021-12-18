import { setError } from '../common/error.js';
import { isDivisibleTen, isPositiveNumber, isValidString } from '../common/validation.js';
import Table from '../components/Table.js';
import { setEvent } from '../eventBus/index.js';
import Component from '../interface/Component.js';
import { getState, setState } from '../store/index.js';

export default class AddProduct extends Component {
    setup() {
        this.errorMessage = this.resources.ERROR_MESSAGE;

        this.table = new Table(`#${this.selectors.ID.TABLE_VIEW}`);
        this.delegateEvent();
    }

    willmount() {
        this.productList = getState((state) => state.productList);
    }

    mount() {
        this.table.setConfig({
            columns: this.config.COLUMNS,
            data: this.productList,
        });

        this.table.render();
    }

    delegateEvent() {
        setEvent('submit', this.selectors.EVENT_KEY.FORM, this.onSubmit.bind(this));
    }

    onSubmit(ev) {
        ev.preventDefault();

        const [name, price, quantity] = [
            ev.target[this.selectors.NAME.NAME].value,
            ev.target[this.selectors.NAME.PRICE].value,
            ev.target[this.selectors.NAME.QUANTITY].value,
        ];

        if (!isPositiveNumber(price) || !isDivisibleTen(price)) setError(this.errorMessage.PRICE_INPUT);
        else if (!isValidString(name)) setError(this.errorMessage.NAME_INPUT);
        else if (!isPositiveNumber(quantity)) setError(this.errorMessage.QUANTITY_INPUT);
        else this.productListUpdate(name, price, quantity);
    }

    productListUpdate(name, price, quantity) {
        const existIdx = this.productList.findIndex((product) => product.name === name);
        if (existIdx >= 0) {
            this.productList[existIdx] = { ...this.productList[existIdx], price, quantity };
        } else this.productList.push({ name, price, quantity });

        setState('productList', this.productList);
    }

    productListTemplate() {
        return this.productList
            .map(
                (item) =>
                    `<tr>
                        <td>${item.name}</td>
                        <td>${item.price}</td>
                        <td>${item.quantity}</td>
                    </tr>`
            )
            .join('');
    }

    inputFormTemplate() {
        return `
            <form ${this.eventAttr}="${this.selectors.EVENT_KEY.FORM}">
                <input type="text" id="${this.selectors.ID.NAME_INPUT}" name="${this.selectors.NAME.NAME}" placeholder="${this.resources.PLACEHOLDERS.NAME}" />
                <input type="number" id="${this.selectors.ID.PRICE_INPUT}" name="${this.selectors.NAME.PRICE}" placeholder="${this.resources.PLACEHOLDERS.PRICE}" />
                <input type="number" id="${this.selectors.ID.QUANTITY_INPUT}" name="${this.selectors.NAME.QUANTITY}" placeholder="${this.resources.PLACEHOLDERS.QUANTITY}" />
                <input type="submit" id="${this.selectors.ID.ADD_BUTTON}" value="${this.resources.BUTTON}" />
            </form>
        `;
    }

    template() {
        return `
            <h3>${this.resources.HEAD}</h3>
            ${this.inputFormTemplate()}
            <h3>${this.resources.STATUS}</h3>
            <div id="${this.selectors.ID.TABLE_VIEW}"></div>
        `;
    }
}

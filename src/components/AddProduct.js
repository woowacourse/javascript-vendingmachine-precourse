import { domSelector, setErrorStatus } from '../common/index.js';
import { isDivisibleTen, isPositiveNumber, isValidString } from '../common/validation.js';
import {
    $addProductFormID,
    $productAddButtonID,
    $productNameInputID,
    $productPriceInputID,
    $productQuantityInputID,
} from '../constants/domSelectors.js';
import { ADD_PRODUCT, INPUT_NAME } from '../constants/resources.js';
import Component from '../interface/Component.js';

export default class AddProduct extends Component {
    mount() {
        this.setEvent();
    }

    setup() {
        this.productList = this.getState((state) => state.productStatus);
    }

    setEvent() {
        domSelector(`#${$addProductFormID}`).addEventListener('submit', this.onButtonClick.bind(this));
    }

    onButtonClick(ev) {
        ev.preventDefault();
        const [name, price, quantity] = [
            ev.target[INPUT_NAME['PRODUCT-NAME']].value,
            ev.target[INPUT_NAME['PRODUCT-PRICE']].value,
            ev.target[INPUT_NAME['PRODUCT-QUANTITY']].value,
        ];
        if (!isPositiveNumber(price) || !isDivisibleTen(price)) setErrorStatus('PRODUCT-PRICE-INPUT-ERROR');
        else if (!isValidString(name)) setErrorStatus('PRODUCT-NAME-INPUT-ERROR');
        else if (!isPositiveNumber(quantity)) setErrorStatus('PRODUCT-QUANTITY-INPUT-ERROR');
        else this.productListUpdate(name, price, quantity);
    }

    productListUpdate(name, price, quantity) {
        const existIdx = this.productList.findIndex((product) => product.name === name);
        if (existIdx >= 0) this.updateProduct(existIdx, name, price, quantity);
        else this.addProduct(name, price, quantity);
    }

    addProduct(...parameter) {
        this.updateProduct(this.productList.length, ...parameter);
    }

    updateProduct(idx, name, price, quantity) {
        this.productList[idx] = {
            name,
            price,
            quantity,
        };
        this.setState('productStatus', this.productList);
    }

    getProductListHTML() {
        return this.productList
            .map(
                (item) =>
                    `<tr>
                        <td>${item.name}</td>
                        <td>${item.price}</td>
                        <td>${item.quantity}</td>
                    </tr>`
            )
            .join('\n');
    }

    template() {
        return `
        <h3>${ADD_PRODUCT.HEAD}</h3>
        <form id="${$addProductFormID}">
        <input id="${$productNameInputID}" name="${INPUT_NAME['PRODUCT-NAME']}" type="text" placeholder="${
            ADD_PRODUCT.PLACEHOLDERS.NAME
        }" />
        <input id="${$productPriceInputID}" name="${INPUT_NAME['PRODUCT-PRICE']}" type="number" placeholder="${
            ADD_PRODUCT.PLACEHOLDERS.PRICE
        }" />
        <input id="${$productQuantityInputID}" name="${INPUT_NAME['PRODUCT-QUANTITY']}" type="number" placeholder="${
            ADD_PRODUCT.PLACEHOLDERS.QUANTITY
        }" />
        <input id="${$productAddButtonID}" type="submit" value="${ADD_PRODUCT.BUTTON}" />
        </form>

        <h3>${ADD_PRODUCT.STATUS}</h3>
        <table>
            <thead>
                <tr>
                ${ADD_PRODUCT.COLUMNS.map((column) => `<th>${column}</th>`).join('')}
                </tr>
            </thead>
            <tbody>${this.getProductListHTML()}</tbody>
        </table>
        `;
    }
}

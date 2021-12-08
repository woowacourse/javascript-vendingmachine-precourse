import InputNumber from '../asset/components/Input/InputNumber.js';
import { INPUT_ID } from '../asset/constants/dom-rule.js';

export default class InventoryTap {
    constructor($skeleton) {
        this.$app = document.createElement('div');
        this.$productNameInput = InputNumber(INPUT_ID.productName);
        this.$productPrice = InputNumber(INPUT_ID.productPrice);
        this.$productQuantity = InputNumber(INPUT_ID.productQuantity);

        $skeleton.append(this.$app);
    }

    appendToApp($element) {
        this.$app.append($element);
    }

    init() {
        this.createAddProductForm();
    }

    createAddProductForm() {
        const $wrap = document.createElement('div');
        const $inputWrap = document.createElement('div');

        this.$productPrice.style.margin = '0 5px';
        $inputWrap.append(this.$productNameInput);
        $inputWrap.append(this.$productPrice);
        $inputWrap.append(this.$productQuantity);
        $wrap.append($inputWrap);
        this.appendToApp($wrap);
    }
}

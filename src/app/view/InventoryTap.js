import InputNumber from '../asset/components/Input/InputNumber.js';
import InputText from '../asset/components/Input/InputText.js';
import SubTitle from '../asset/components/SubTitle/index.js';
import ButtonById from '../asset/components/Button/ButtonById.js';
import Table from '../asset/components/Table/index.js';
import InventoryRow from '../asset/components/Row/InventoryRow.js';
import { INPUT_ID, SUB_TITLE_TEXT, BUTTON, TABLE_TITLE } from '../asset/constants/dom-rule.js';

export default class InventoryTap {
    constructor($skeleton) {
        this.$app = document.createElement('div');
        this.$productNameInput = InputText(INPUT_ID.productName);
        this.$productPriceInput = InputNumber(INPUT_ID.productPrice);
        this.$productQuantityInput = InputNumber(INPUT_ID.productQuantity);
        this.$button = ButtonById(BUTTON.addProduct.title, BUTTON.addProduct.id);
        this.$inventoryContainer = Table();

        $skeleton.append(this.$app);
    }

    appendToApp($element) {
        this.$app.append($element);
    }

    init() {
        this.createAddProductForm();
        this.createProductInventory();
    }

    createAddProductForm() {
        const $wrap = document.createElement('div');
        const $subTitle = SubTitle(SUB_TITLE_TEXT.addProduct);
        const $inputWrap = this.getAddProductFormInput();

        $wrap.append($subTitle);
        $wrap.append($inputWrap);
        this.appendToApp($wrap);
    }

    getAddProductFormInput() {
        const $inputWrap = document.createElement('div');

        this.$button.style.marginLeft = '5px';
        this.$productPriceInput.style.margin = '0 5px';
        $inputWrap.append(this.$productNameInput);
        $inputWrap.append(this.$productPriceInput);
        $inputWrap.append(this.$productQuantityInput);
        $inputWrap.append(this.$button);

        return $inputWrap;
    }

    createProductInventory() {
        const $wrap = document.createElement('div');
        const $subTitle = SubTitle(SUB_TITLE_TEXT.productInventory);

        this.$inventoryContainer.append(
            InventoryRow(
                TABLE_TITLE.productName,
                TABLE_TITLE.productPrice,
                TABLE_TITLE.productQuantity,
            ),
        );
        $wrap.append($subTitle);
        $wrap.append(this.$inventoryContainer);
        this.appendToApp($wrap);
    }
}

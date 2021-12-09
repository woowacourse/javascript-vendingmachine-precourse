import InputNumber from '../asset/components/Input/InputNumber.js';
import InputText from '../asset/components/Input/InputText.js';
import SubTitle from '../asset/components/SubTitle/index.js';
import ButtonById from '../asset/components/Button/ButtonById.js';
import Table from '../asset/components/Table/index.js';
import InventoryRow from '../asset/components/Row/InventoryRow.js';
import INPUT_ID from '../asset/constants/INPUT_ID.js';
import INPUT_ITEM from '../asset/constants/INPUT_ITEM.js';
import SUB_TITLE_TEXT from '../asset/constants/SUB_TITLE_TEXT.js';
import BUTTON from '../asset/constants/BUTTON.js';
import TABLE_TITLE from '../asset/constants/TABLE_TITLE.js';

export default class InventoryTap {
    constructor($skeleton) {
        this.$app = document.createElement('div');
        this.$productNameInput = InputText(INPUT_ID.productName, INPUT_ITEM.productName);
        this.$productPriceInput = InputNumber(INPUT_ID.productPrice, INPUT_ITEM.productPrice);
        this.$productQuantityInput = InputNumber(
            INPUT_ID.productQuantity,
            INPUT_ITEM.productQuantity,
        );
        this.$button = ButtonById(BUTTON.addProduct.title, BUTTON.addProduct.id);
        this.$inventoryContainer = Table();

        $skeleton.append(this.$app);
    }

    getButton() {
        return this.$button;
    }

    getProductName() {
        return this.$productNameInput.value;
    }

    getProductPrice() {
        return this.$productPriceInput.value;
    }

    getProductQuantity() {
        return this.$productQuantityInput.value;
    }

    appendToApp($element) {
        this.$app.append($element);
    }

    appendToInventoryContainer($element) {
        this.$inventoryContainer.append($element);
    }

    init() {
        this.createAddProductForm();
        this.createProductInventory();
    }

    createAddProductForm() {
        const $wrap = document.createElement('div');
        const $subTitle = SubTitle(SUB_TITLE_TEXT.addProduct);
        const $inputWrap = this.getAddProductFormInput();

        $wrap.style.marginBottom = '15px';
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

        this.addRow(TABLE_TITLE.productName, TABLE_TITLE.productPrice, TABLE_TITLE.productQuantity);
        $wrap.append($subTitle);
        $wrap.append(this.$inventoryContainer);
        this.appendToApp($wrap);
    }

    addRow(text1, text2, text3) {
        this.appendToInventoryContainer(InventoryRow(text1, text2, text3));
    }

    addProductRow(productName, productPrice, productQuantity) {
        this.addRow(productName, productPrice, productQuantity);
    }
}

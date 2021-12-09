import { PRODUCT_ADD_TAB, SELECTOR } from '../constants.js';

export const createTitle = () => `
	<h2>${PRODUCT_ADD_TAB}</h2>
`;

export const createProductAddFormTemplate = () => `
	<h3>상품 추가하기</h3>
	<div>
		<input placeHolder="상품명" id="${SELECTOR.productNameInputId}" />
		<input placeHolder="가격" id="${SELECTOR.productPriceInputId}" />
		<input placeHolder="수량" id="${SELECTOR.productQuantityInputId}" />
		<button id="${SELECTOR.productAddButtonId}" >추가하기</button>
	</div>
`;

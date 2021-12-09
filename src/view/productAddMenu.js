import { PRODUCT_ADD_TAB, SELECTOR } from '../constants.js';

export const createTitle = () => `
	<h2>${PRODUCT_ADD_TAB}</h2>
`;

const createTheadTableData = text => `
	<td style="border: 1px solid black;padding: 10px 50px;font-weight:bold;">${text}</td>
`;

const createTbodyTableData = (text, id) => `
	<td id="${id}" style="border: 1px solid black;padding: 10px 50px;">${text}</td>
`;

const createProductItem = (name, price, quantity) => `
	<tr id="${SELECTOR.productManageItemClass}">
		${createTbodyTableData(name, SELECTOR.productManageNameClass)}
		${createTbodyTableData(price, SELECTOR.productManagePriceClass)}
		${createTbodyTableData(quantity, SELECTOR.productManageQuantityClass)}
	</tr>
`;

export const createProductAddFormTemplate = () => `
	<h3>상품 추가하기</h3>
	<div>
		<input placeholder="상품명" id="${SELECTOR.productNameInputId}" />
		<input placeholder="가격" id="${SELECTOR.productPriceInputId}" />
		<input placeholder="수량" id="${SELECTOR.productQuantityInputId}" />
		<button id="${SELECTOR.productAddButtonId}" >추가하기</button>
	</div>
`;

export const createProductTableTemplate = () => `
	<h3>상품 현황</h3>
	<table style="border: 1px solid black;border-collapse: collapse;">
		<thead>
			<tr>
				${createTheadTableData('상품명')}
				${createTheadTableData('가격')}
				${createTheadTableData('수량')}
			</tr>
		</thead>
		<tbody>
			${createProductItem()}
		</tbody>
	</table>
`;

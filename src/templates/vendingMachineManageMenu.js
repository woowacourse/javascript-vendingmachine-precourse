import { VENDING_MACHINE_MANAGE_TAB, SELECTOR } from '../constants.js';

export const createTitleTemplate = () => `
	<h2>${VENDING_MACHINE_MANAGE_TAB}</h2>
`;

export const createChargeFormTemplate = () => `
	<h3>자판기 동전 충전하기</h3>
	<div>
		<input type="number" placeholder="자판기가 보유할 금액" id="${SELECTOR.vendingMachineChargeInputId}" />
		<button type="button" id="${SELECTOR.vendingMachineChargeButtonId}">충전하기</button>
	</div>
`;

export const createChargeAmountTemplate = amount => `
	<div style="margin: 20px 0px">
		<span>보유 금액:</span>
		<span>${amount}원</span>
	</div>
`;

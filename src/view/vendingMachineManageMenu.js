import { VENDING_MACHINE_MANAGE_TAB, SELECTOR } from '../constants.js';

export const createTitle = () => `
	<h2>${VENDING_MACHINE_MANAGE_TAB}</h2>
`;

export const createChargeForm = () => `
	<h3>자판기 동전 충전하기</h3>
	<div>
		<input type="number" placeholder="자판기가 보유할 금액" id="${SELECTOR.vendingMachineChargeInputId}" />
		<button type="button" id="${SELECTOR.vendingMachineChargeButtonId}">충전하기</button>
	</div>
`;

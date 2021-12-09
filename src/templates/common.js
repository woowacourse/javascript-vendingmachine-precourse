import { SELECTOR, TAB_BUTTONS } from '../constants.js';

const createTabButtonTemplate = (text, id) => `
	<button id="${id}">${text}</button>
`;

export const createVendingMachineHeaderTemplate = () => `
	<h1>🥤자판기🥤</h1>
`;

export const createTabButtonContainerTemplate = () => `
	<div id="${SELECTOR.tabButtonContainerId}">
		${TAB_BUTTONS.map(button => createTabButtonTemplate(button.text, button.id)).join('')}
	</div>
`;

export const createTabContentContainerTemplate = () => `
	<div id="${SELECTOR.tabContentContainerId}"></div>
`;

import SELECTOR from '../constants/selector.js';
import STYLE from '../constants/style.js';
import { MENU_BUTTONS } from '../constants/common.js';

const createMenuButtonTemplate = (text, id) => `
  <button id="${id}">${text}</button>
`;

export const createVendingMachineHeaderTemplate = () => `
  <h1>🥤자판기🥤</h1>
`;

export const createMenuButtonContainerTemplate = () => `
  <div id="${SELECTOR.tabButtonContainerId}">
    ${MENU_BUTTONS.map(button => createMenuButtonTemplate(button.text, button.id)).join('')}
  </div>
`;

export const createMenuContentContainerTemplate = () => `
  <div id="${SELECTOR.tabContentContainerId}"></div>
`;

export const createTheadTableDataTemplate = text => `
  <td style="${STYLE.tableHeadData}">${text}</td>
`;

export const createMenuTitleTemplate = menuTitleName => `
  <h2>${menuTitleName}</h2>
`;

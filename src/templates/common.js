import SELECTOR from '../constants/selector.js';
import STYLE from '../constants/style.js';
import { TAB_BUTTONS } from '../constants/element.js';

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

export const createTheadTableDataTemplate = text => `
  <td style="${STYLE.tableHeadData}">${text}</td>
`;

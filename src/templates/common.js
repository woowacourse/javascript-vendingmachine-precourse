import Selector from '../constants/selector.js';
import Style from '../constants/style.js';
import { TAB_BUTTONS } from '../constants/element.js';

const createTabButtonTemplate = (text, id) => `
  <button id="${id}">${text}</button>
`;

export const createVendingMachineHeaderTemplate = () => `
  <h1>🥤자판기🥤</h1>
`;

export const createTabButtonContainerTemplate = () => `
  <div id="${Selector.tabButtonContainerId}">
    ${TAB_BUTTONS.map(button => createTabButtonTemplate(button.text, button.id)).join('')}
  </div>
`;

export const createTabContentContainerTemplate = () => `
  <div id="${Selector.tabContentContainerId}"></div>
`;

export const createTheadTableDataTemplate = text => `
  <td Style="${Style.tableHeadData}">${text}</td>
`;

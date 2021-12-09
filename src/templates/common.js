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

export const createTheadTableDataTemplate = text => `
  <td style="border: 1px solid black;padding: 10px 50px;font-weight:bold;text-align: center;">${text}</td>
`;

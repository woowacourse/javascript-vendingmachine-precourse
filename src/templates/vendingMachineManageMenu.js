import { createTheadTableDataTemplate } from './common.js';

import SELECTOR from '../constants/selector.js';
import STYLE from '../constants/style.js';
import { VENDING_MACHINE_MANAGE_TAB } from '../constants/element.js';

export const createTitleTemplate = () => `
  <h2>${VENDING_MACHINE_MANAGE_TAB}</h2>
`;

export const createCoinQuantityTableRowTemplate = (coin, amount, id) => `
  <tr>
    <td style="${STYLE.tableBodyData}">${coin}원</td>
    <td style="${STYLE.tableBodyData}" id="${id}">${amount}개</td>
  </tr>
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
    <span id="${SELECTOR.vendingMachineChargeAmountId}">${amount}</span>
    <span>원</span>
  </div>
`;

export const createCoinQuantityTableBodyTemplate = (coin500, coin100, coin50, coin10) => `
  ${createCoinQuantityTableRowTemplate(500, coin500, SELECTOR.vendingMachineCoin500QuantityId)}
  ${createCoinQuantityTableRowTemplate(100, coin100, SELECTOR.vendingMachineCoin100QuantityId)}
  ${createCoinQuantityTableRowTemplate(50, coin50, SELECTOR.vendingMachineCoin50QuantityId)}
  ${createCoinQuantityTableRowTemplate(10, coin10, SELECTOR.vendingMachineCoin10QuantityId)}
`;

export const createCoinQuantityTableTemplate = () => `
  <h3>자판기가 보유한 동전</h3>
  <table style="${STYLE.table}">
    <thead>
      <tr>
        ${createTheadTableDataTemplate('동전')}
        ${createTheadTableDataTemplate('개수')}
      </tr>
    </thead>
    <tbody id="${SELECTOR.vendingMachineCoinTableBody}">
      ${createCoinQuantityTableBodyTemplate(0, 0, 0, 0)}
    </tbody>
  </table>
`;

import { createTheadTableDataTemplate } from './common.js';

import Selector from '../constants/selector.js';
import Style from '../constants/style.js';
import { VENDING_MACHINE_MANAGE_TAB } from '../constants/element.js';

export const createTitleTemplate = () => `
  <h2>${VENDING_MACHINE_MANAGE_TAB}</h2>
`;

export const createCoinQuantityTableRowTemplate = (coin, amount, id) => `
  <tr>
    <td Style="${Style.tableBodyData}">${coin}원</td>
    <td Style="${Style.tableBodyData}" id="${id}">${amount}개</td>
  </tr>
`;

export const createChargeFormTemplate = () => `
  <h3>자판기 동전 충전하기</h3>
  <div>
    <input type="number" placeholder="자판기가 보유할 금액" id="${Selector.vendingMachineChargeInputId}" />
    <button type="button" id="${Selector.vendingMachineChargeButtonId}">충전하기</button>
  </div>
`;

export const createChargeAmountTemplate = amount => `
  <div Style="margin: 20px 0px">
    <span>보유 금액:</span>
    <span id="${Selector.vendingMachineChargeAmountId}">${amount}</span>
    <span>원</span>
  </div>
`;

export const createCoinQuantityTableBodyTemplate = (coin500, coin100, coin50, coin10) => `
  ${createCoinQuantityTableRowTemplate(500, coin500, Selector.vendingMachineCoin500QuantityId)}
  ${createCoinQuantityTableRowTemplate(100, coin100, Selector.vendingMachineCoin100QuantityId)}
  ${createCoinQuantityTableRowTemplate(50, coin50, Selector.vendingMachineCoin50QuantityId)}
  ${createCoinQuantityTableRowTemplate(10, coin10, Selector.vendingMachineCoin10QuantityId)}
`;

export const createCoinQuantityTableTemplate = () => `
  <h3>자판기가 보유한 동전</h3>
  <table Style="${Style.table}">
    <thead>
      <tr>
        ${createTheadTableDataTemplate('동전')}
        ${createTheadTableDataTemplate('개수')}
      </tr>
    </thead>
    <tbody id="${Selector.vendingMachineCoinTableBody}">
      ${createCoinQuantityTableBodyTemplate(0, 0, 0, 0)}
    </tbody>
  </table>
`;

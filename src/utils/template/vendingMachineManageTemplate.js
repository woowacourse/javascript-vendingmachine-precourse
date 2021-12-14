import { ID } from '../constants.js';

export const getVendingMachineCoinListTemplate = (coinList) => {
  return `
    <tr><th>동전</th><th>개수</th></tr>
    <tr><th >500원</th><td id=${ID.VENDING_MACHINE_COIN_500_QUANTITY}>${coinList['500']}개</td></tr>
    <tr><th>100원</th><td id=${ID.VENDING_MACHINE_COIN_100_QUANTITY}>${coinList['100']}개</td></tr>
    <tr><th>50원</th><td id=${ID.VENDING_MACHINE_COIN_50_QUANTITY}>${coinList['50']}개</td></tr>
    <tr><th>10원</th><td id=${ID.VENDING_MACHINE_COIN_10_QUANTITY}>${coinList['10']}개</td></tr>
  `;
};

export const getVendingMachineManageTemplate = (vendingMachineManageMenu) => {
  return `
    <section>
      <h4>자판기 동전 충전하기</h4>
      <form id=${ID.VENDING_MACHINE_CHARGE_FORM}>
        <input type="number" id=${ID.VENDING_MACHINE_CHARGE_INPUT} placeholder="자판기가 보유할 금액"/>
        <button id=${ID.VENDING_MACHINE_CHARGE_BUTTON}>충전하기</button>
      </form>
      <p>보유 금액: <span id=${ID.VENDING_MACHINE_CHARGE_AMOUNT}>${vendingMachineManageMenu.chargeAmount}</span></p>
    </section>
    <section>
      <h4>자판기가 보유한 동전</h4>
      <table id=${ID.VENDING_MACHINE_COIN_LIST}>
        <tr><th>동전</th><th>개수</th></tr>
        <tr><th>500원</th><td id=${ID.VENDING_MACHINE_COIN_500_QUANTITY}>${vendingMachineManageMenu.coinList['500']}개</td></tr>
        <tr><th>100원</th><td id=${ID.VENDING_MACHINE_COIN_100_QUANTITY}>${vendingMachineManageMenu.coinList['100']}개</td></tr>
        <tr><th>50원</th><td id=${ID.VENDING_MACHINE_COIN_50_QUANTITY}>${vendingMachineManageMenu.coinList['50']}개</td></tr>
        <tr><th>10원</th><td id=${ID.VENDING_MACHINE_COIN_10_QUANTITY}">${vendingMachineManageMenu.coinList['10']}개</td></tr>
      </table>
    </section>
  `;
};

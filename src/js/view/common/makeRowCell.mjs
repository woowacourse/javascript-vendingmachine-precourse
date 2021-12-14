import { COINS } from '../../model/VendingMachine.mjs';

export function makeRowCell(title = '') {
  return COINS.map(coin => {
    return `
     <tr>
       <td>${coin}원</td>
       <td><span id="${title}coin-${coin}-quantity"></span></td>
     </tr>`;
  });
}

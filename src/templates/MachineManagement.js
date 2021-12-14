import { convertObjectToArray } from '../utils/general.js';
import { MACHINE_ELEMENT } from '../utils/constants.js';

export const coinStatusTemplate = coins =>
  convertObjectToArray(coins)
    .map(([unit, quantity]) => {
      return `
        <tr>
            <td>${unit}</td>
            <td id=${MACHINE_ELEMENT.COIN_QUANT(unit)}>${quantity}개</td>
        </tr>
    `;
    })
    .join('');

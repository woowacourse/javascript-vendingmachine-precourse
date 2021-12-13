import { convertObjectToArray } from '../utils/general.js';

export const coinStatusTemplate = coins =>
  convertObjectToArray(coins)
    .map(([unit, quantity]) => {
      return `
        <tr>
            <td>${unit}</td>
            <td id="vending-machine-coin-${unit}-quantity">${quantity}개</td>
        </tr>
    `;
    })
    .join('');

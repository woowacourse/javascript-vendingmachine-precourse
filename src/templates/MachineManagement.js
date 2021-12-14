import { convertObjectToArray } from '../utils/general.js';
import { MACHINE_ELEMENT } from '../utils/constants.js';

const generateCoinStatusTemplate = ([unit, quantity]) => `
  <tr>
    <td>${unit}</td>
    <td id=${MACHINE_ELEMENT.COIN_QUANT(unit)}>${quantity}개</td>
  </tr>
`;

export const coinStatusTemplate = coins =>
  convertObjectToArray(coins).map(generateCoinStatusTemplate).join('');

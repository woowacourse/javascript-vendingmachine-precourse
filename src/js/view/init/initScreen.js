import { $ } from '../../utils/querySelector.js';
import { initScreenTemplate } from './initScreenTemplate.js';

export const initScreen = () => {
  document.head.innerHTML += `<link rel="stylesheet" href="src/css/index.css">`;
  $('#app').innerHTML = initScreenTemplate;
};

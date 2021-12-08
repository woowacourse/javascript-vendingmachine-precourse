import header from './src/container/Header.js';
import { manage, charge, purchase } from './src/container/Main.js';

document.querySelector('#app').innerHTML = `${header}${manage}`;
// document.querySelector('#app').innerHTML = `${header}${charge}`;
// document.querySelector('#app').innerHTML = `${header}${purchase}`;

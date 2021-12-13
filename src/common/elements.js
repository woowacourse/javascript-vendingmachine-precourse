/* eslint-disable no-param-reassign */

export function $(id) {
  return document.getElementById(id);
}

export const $app = $('app');

export function setDisplayNone(elem) {
  elem.style.display = 'none';
}

export function setDisplayBlock(elem) {
  elem.style.display = 'block';
}

export function setTableStyle(elem) {
  elem.style.padding = '10px 50px';
  elem.style.border = '1px solid';
  elem.style.textAlign = 'center';
}

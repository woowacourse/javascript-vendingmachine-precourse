/* eslint-disable no-param-reassign */

import createCoinListTable from '../ChangeCharge/CreateTable.js';
import { BUTTON, HEADER } from '../common/constants.js';
import {
  createButton,
  createDiv,
  createHeader,
} from '../common/CreateElement.js';

import onReturnClick from './Return.js';

function createReturnButton() {
  const [id, innerText] = ['coin-return-button', BUTTON.RETURN];
  const returnButton = createButton(id, innerText);
  returnButton.addEventListener('click', onReturnClick);

  return returnButton;
}

function createChangeCoinTable() {
  const changeCoinTable = createCoinListTable();
  changeCoinTable.setAttribute('id', 'change-coin-table');

  if (localStorage.getItem('잔돈')) {
    const counts = JSON.parse(localStorage.getItem('잔돈'));

    for (let i = 0; i < 4; i += 1) {
      const countCell = changeCoinTable.rows[i + 1].cells[1];
      countCell.innerText = counts[i];
    }
  }

  return changeCoinTable;
}

export default function createChange() {
  const changeDiv = createDiv();
  const changeHeader = createHeader(HEADER.CHANGE);
  const returnButton = createReturnButton();
  const changeCoinTable = createChangeCoinTable();
  changeDiv.append(changeHeader, returnButton, changeCoinTable);

  return changeDiv;
}

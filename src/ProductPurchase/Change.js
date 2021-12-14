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

export default function createChange() {
  const changeDiv = createDiv();
  const changeHeader = createHeader(HEADER.CHANGE);
  const returnButton = createReturnButton();
  const changeCoinTable = createCoinListTable();
  changeCoinTable.setAttribute('id', 'change-coin-table');
  changeDiv.append(changeHeader, returnButton, changeCoinTable);

  return changeDiv;
}

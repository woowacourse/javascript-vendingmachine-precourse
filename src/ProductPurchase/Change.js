import createCoinListTable from '../ChangeCharge/CreateTable.js';
import { BUTTON, HEADER } from '../common/constants.js';
import {
  createButton,
  createDiv,
  createHeader,
} from '../common/CreateElement.js';

function createReturnButton() {
  const [id, innerText] = ['coin-return-button', BUTTON.RETURN];
  const returnButton = createButton(id, innerText);

  return returnButton;
}

export default function createChange() {
  const changeDiv = createDiv();
  const changeHeader = createHeader(HEADER.CHANGE);
  const returnButton = createReturnButton();
  const coinListTable = createCoinListTable();
  changeDiv.append(changeHeader, returnButton, coinListTable);

  return changeDiv;
}

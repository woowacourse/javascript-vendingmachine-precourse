import $ from '../common/selector.js';
import { TITLES } from '../../constants/constants.js';

export const renderChange = state => {
  $('#tab-title').innerText = TITLES.CHANGE_TAB;
  $('#input_form').innerHTML = `<div>test input</div>`;
  $('#contents').innerHTML = `<div>test</div>`;
};

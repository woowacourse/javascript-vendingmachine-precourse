import $ from '../common/selector.js';
import { TITLES } from '../../constants/constants.js';
import { changeTemplates } from '../../constants/changeTemplates.js';

export const renderChange = state => {
  console.log(state.change.amount);

  $('#tab-title').innerText = TITLES.CHANGE_TAB;
  $('#input_form').innerHTML = changeTemplates.changeInputs(
    state.change.amount,
  );
  $('#contents').innerHTML = `<div>test</div>`;
};

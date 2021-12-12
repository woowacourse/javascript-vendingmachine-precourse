import $ from '../common/selector.js';
import { TITLES } from '../../constants/constants.js';
import { changeTemplates } from '../../constants/changeTemplates.js';

export const renderChange = state => {
  const { changeInputs, coinList } = changeTemplates;

  $('#tab-title').innerText = TITLES.CHANGE_TAB;
  $('#input_form').innerHTML = changeInputs(state.change.amount);
  $('#contents').innerHTML = coinList(state.change);
};

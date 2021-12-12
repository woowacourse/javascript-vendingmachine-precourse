import $ from './selector.js';
import { commonTemplates } from '../../constants/commonTemplates.js';

export const renderTabs = () => {
  $('#app').innerHTML = commonTemplates.tabs;
  $('#tab-title').innerText = `상품 추가하기`;
};

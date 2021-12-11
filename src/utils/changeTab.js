import $ from './common/selector.js';
// import { render } from '../common/render.js';

export const changeTab = async (e, tab) => {
  const tabName = e.target.dataset.tabName;
  tab = tabName;
  $('#tab-title').innerText = `${e.target.innerText} 탭`;
};

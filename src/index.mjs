import { renderHeader, renderProductAddMenu } from './js/view/index.mjs';

function init() {
  renderHeader();
  renderProductAddMenu();
}

window.addEventListener('DOMContentLoaded', () => {
  init();
});

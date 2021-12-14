import { renderHeader, renderProductAddPage } from './js/view/index.mjs';
import { controller } from './js/controller/index.mjs';

window.addEventListener('DOMContentLoaded', () => {
  renderHeader();
  renderProductAddPage();
  controller();
});

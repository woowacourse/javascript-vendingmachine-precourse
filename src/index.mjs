import { renderHeader, renderProductAdd } from './js/view/index.mjs';
import { controller } from './js/controller/index.mjs';

window.addEventListener('DOMContentLoaded', () => {
  renderHeader();
  renderProductAdd();
  controller();
});

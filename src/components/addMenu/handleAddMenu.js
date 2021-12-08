import { $ } from '../../utils/querySelector.js';
import { productAddMenuTemplate } from './addMenuTemplate.js';

export const handleProductAddMenu = () => {
  $('#app-container').innerHTML = productAddMenuTemplate;
};

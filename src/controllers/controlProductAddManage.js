import { $ } from '../dom/dom.js';
import getUserProductInfoInput from '../modules/getUserProductInfoInput.js';
import setDrinkStorage from '../storage/setDrinkStorage.js';
import initProductAddInputElements from '../views/initProductAddInputElements.js';
import renderNowProductInfo from '../views/renderNowProductInfo.js';

export default function controlProductAdd() {
  $('#product-add-button').addEventListener('click', () => {
    const userProductInput = getUserProductInfoInput();
    if (userProductInput !== false) {
      setDrinkStorage(userProductInput);
      initProductAddInputElements();
      renderNowProductInfo();
    }
  });
}

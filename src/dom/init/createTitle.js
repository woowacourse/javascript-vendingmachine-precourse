import { app } from '../domElement.js';
import { H1 } from '../../constants/dom.js';
import { TITLE_TEXT } from '../../constants/text.js';

export const createTitle = () => {
  const title = document.createElement(H1);

  title.innerHTML = TITLE_TEXT;
  app.appendChild(title);
};

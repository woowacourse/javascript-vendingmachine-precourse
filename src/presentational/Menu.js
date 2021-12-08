import { BLANK } from '../constants/index.js';

const Menu = ({ title, menu }) => `
  <h1>${title}</h1>
  <nav>
    ${menu
      .map(({ componentId, text }) => `<button id="${componentId}">${text}</button>`)
      .join(BLANK)}
  </nav>
`;

export default Menu;

import { BLANK } from '../constants/index.js';

const Menu = ({ title, menu }) => `
  <h1>${title}</h1>
  <nav>
    ${menu.map(({ component, text }) => `<button id="${component}">${text}</button>`).join(BLANK)}
  </nav>
`;

export default Menu;

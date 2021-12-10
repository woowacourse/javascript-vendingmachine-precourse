import { BLANK } from '../constants/index.js';

const Menu = ({ APP_TITLE, APP_MENU }) => `
  <h1>${APP_TITLE}</h1>
  <nav>
    ${APP_MENU.map(({ component, text }) => `<button id="${component}">${text}</button>`).join(
      BLANK,
    )}
  </nav>
`;

export default Menu;

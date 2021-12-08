import Style from './Style.js';
import BeverageIcon from '../BeverageIcon/index.js';

const beverageIcon = BeverageIcon();

const MainTitle = (mainTitle) =>
    `<div style='${Style.index}'>
        ${beverageIcon}
        <p style='${Style.title}'>${mainTitle}</p>
        ${beverageIcon}
    </div>`;

export default MainTitle;

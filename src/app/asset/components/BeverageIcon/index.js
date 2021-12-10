import Style from './Style.js';
import { BEVERAGE_ICON_PATH } from '../../constants/index.js';

const BeverageIcon = () => {
    const ret = document.createElement('img');

    ret.src = BEVERAGE_ICON_PATH;
    ret.style = Style.index;

    return ret;
};

export default BeverageIcon;

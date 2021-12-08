import Style from './Style.js';
import BeverageIcon from '../BeverageIcon/index.js';

const MainTitle = (mainTitle) => {
    const ret = document.createElement('div');
    const title = document.createElement('p');

    ret.style = Style.index;
    title.style = Style.title;
    title.innerText = mainTitle;
    ret.append(BeverageIcon());
    ret.append(title);
    ret.append(BeverageIcon());

    return ret;
};

export default MainTitle;

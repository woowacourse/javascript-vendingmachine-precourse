import Style from './Style.js';

const SubTitle = (title) => {
    const ret = document.createElement('p');

    ret.innerText = title;
    ret.style = Style.index;

    return ret;
};

export default SubTitle;

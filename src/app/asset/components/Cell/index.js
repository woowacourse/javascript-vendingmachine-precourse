import Style from './Style.js';

const Cell = (content) => {
    const ret = document.createElement('td');

    ret.innerText = content;
    ret.style = Style.index;

    return ret;
};

export default Cell;

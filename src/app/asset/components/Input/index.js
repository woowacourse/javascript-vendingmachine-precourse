import Style from './Style.js';

const Input = (id) => {
    const ret = document.createElement('input');

    ret.id = id;
    ret.style = Style.index;

    return ret;
};

export default Input;

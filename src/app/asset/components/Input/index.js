import Style from './Style.js';

const Input = (id, placeholder) => {
    const $ret = document.createElement('input');

    $ret.id = id;
    $ret.placeholder = placeholder;
    $ret.style = Style.index;

    return $ret;
};

export default Input;

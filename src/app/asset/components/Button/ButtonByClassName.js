import Button from './index.js';

const ButtonByClassName = (title, className) => {
    const $ret = Button(title);

    $ret.className = className;

    return $ret;
};

export default ButtonByClassName;

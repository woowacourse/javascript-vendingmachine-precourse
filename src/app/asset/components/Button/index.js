const Button = (title) => {
    const $ret = document.createElement('button');

    $ret.innerText = title;

    return $ret;
};

export default Button;

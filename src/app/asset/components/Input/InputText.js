import Input from './index.js';

const InputText = (id, placeholder) => {
    const $ret = Input(id, placeholder);

    $ret.type = 'text';

    return $ret;
};

export default InputText;

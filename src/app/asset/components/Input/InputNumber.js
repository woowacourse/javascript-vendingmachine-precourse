import Input from './index.js';

const InputNumber = (id, placeholder) => {
    const $ret = Input(id, placeholder);

    $ret.type = 'number';

    return $ret;
};

export default InputNumber;

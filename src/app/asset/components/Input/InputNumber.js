import Input from './index.js';

const InputNumber = (id) => {
    const ret = Input(id);

    ret.type = 'number';

    return ret;
};

export default InputNumber;

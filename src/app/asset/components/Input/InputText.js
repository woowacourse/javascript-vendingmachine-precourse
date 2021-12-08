import Input from './index.js';

const InputText = (id) => {
    const ret = Input(id);

    ret.type = 'text';

    return ret;
};

export default InputText;

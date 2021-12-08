import Button from './index.js';

const ButtonById = (title, id) => {
    const ret = Button(title);

    ret.id = id;

    return ret;
};

export default ButtonById;

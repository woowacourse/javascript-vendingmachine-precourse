import Row from './index.js';

const RowByClassName = (className) => {
    const ret = Row();

    ret.className = className;

    return ret;
};

export default RowByClassName;

import CellByClassName from './CellByClassName.js';

const CellByClassNameAndDataset = (content, className, dataset) => {
    const ret = CellByClassName(content, className);

    ret.dataset = dataset;

    return ret;
};

export default CellByClassNameAndDataset;

import CellByClassName from './CellByClassName.js';

const CellByClassNameAndDataset = (content, className, datasetKey) => {
    const ret = CellByClassName(content, className);

    ret.dataset[datasetKey] = content;

    return ret;
};

export default CellByClassNameAndDataset;

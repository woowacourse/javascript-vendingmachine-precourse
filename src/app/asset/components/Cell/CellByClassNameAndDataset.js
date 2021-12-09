import CellByClassName from './CellByClassName.js';

const CellByClassNameAndDataset = (content, className, datasetKey, datasetVal) => {
    const ret = CellByClassName(content, className);

    ret.dataset[datasetKey] = datasetVal;

    return ret;
};

export default CellByClassNameAndDataset;

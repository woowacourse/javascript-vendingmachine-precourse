import Cell from './index.js';

const CellById = (content, id) => {
    const ret = Cell(content);

    ret.id = id;

    return ret;
};

export default CellById;

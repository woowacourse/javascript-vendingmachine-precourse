import Cell from './index.js';

const CellByClassName = (content, className) => {
    const $ret = Cell(content);

    $ret.className = className;

    return $ret;
};

export default CellByClassName;

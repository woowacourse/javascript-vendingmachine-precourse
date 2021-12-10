import Style from './Style.js';

const Table = () => {
    const $ret = document.createElement('table');

    $ret.style = Style.index;

    return $ret;
};

export default Table;

import { COIN_LIST } from '../constants.js';

const makeCoinDomIdMapper = (domIdArray) => {
  const mapper = {};

  COIN_LIST.forEach((coin, index) => {
    mapper[coin] = domIdArray[index];
  });

  return mapper;
};

export default makeCoinDomIdMapper;

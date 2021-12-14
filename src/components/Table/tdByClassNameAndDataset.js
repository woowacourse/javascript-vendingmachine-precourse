import TdByClassName from './tdByClassName.js';

const TdByClassNameAndDataset = (text, className, dataset) => {
  const tdByClassNameAndDataset = TdByClassName(text, className);
  tdByClassNameAndDataset.dataset[dataset] = text;
  return tdByClassNameAndDataset;
};

export default TdByClassNameAndDataset;
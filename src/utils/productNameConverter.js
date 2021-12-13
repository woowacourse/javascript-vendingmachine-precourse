const convertSpaceToHyphen = productName => {
  const name = productName.split(" ").join("-");

  return name;
};

const convertHyphenToSpace = productName => {
  const name = productName.split("-").join(" ");

  return name;
};

export { convertSpaceToHyphen, convertHyphenToSpace };

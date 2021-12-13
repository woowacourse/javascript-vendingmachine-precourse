// 띄어쓰기를 -으로 변환
const convertSpaceToHyphen = productName => {
  const name = productName.split(" ").join("-");

  return name;
};

// -를 띄어쓰기로 변환
const convertHyphenToSpace = productName => {
  const name = productName.split("-").join(" ");

  return name;
};

export { convertSpaceToHyphen, convertHyphenToSpace };

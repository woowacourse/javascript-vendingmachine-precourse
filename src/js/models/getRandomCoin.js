const getRandomCoin = () => {
  return MissionUtils.Random.pickNumberInList([500, 100, 50, 10]);
};

export default getRandomCoin;

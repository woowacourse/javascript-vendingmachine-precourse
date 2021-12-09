global.alert = () => {};
global.MissionUtils = {
    Random: {
        pickNumberInRange: (startInclusive, endInclusive) =>
            Math.floor(Math.random() * (endInclusive + 1 - startInclusive)) + startInclusive,
        pickNumberInList(array) {
            return array[this.pickNumberInRange(0, array.length - 1)];
        },
    },
};

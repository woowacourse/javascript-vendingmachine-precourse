export const Coin = function () {
    this.coin_500 = 0;
    this.coin_100 = 0;
    this.coin_50 = 0;
    this.coin_10 = 0;

    this.total = 0;

    this.addCoinCount = (value) => {
        switch (value) {
            case 500:
                return (this.coin_500 += 1);
            case 100:
                return (this.coin_100 += 1);
            case 50:
                return (this.coin_50 += 1);
            case 10:
                return (this.coin_10 += 1);
        }
    };

    this.setTotal = () => {
        this.total =
            this.coin_500 * 500 +
            this.coin_100 * 100 +
            this.coin_50 * 50 +
            this.coin_10 * 10;
    };
};

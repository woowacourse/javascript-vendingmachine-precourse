export default class Tap {
    constructor($skeleton) {
        this.$app = document.createElement('div');
        $skeleton.append(this.$app);
    }

    hide() {
        this.$app.style.display = 'none';
    }

    show() {
        this.$app.style.display = 'block';
    }
}

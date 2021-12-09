export default class Tap {
    constructor($skeleton) {
        this.$app = document.createElement('div');
        $skeleton.append(this.$app);
    }

    appendToApp($element) {
        this.$app.append($element);
    }

    hide() {
        this.$app.style.display = 'none';
    }

    show() {
        this.$app.style.display = 'block';
    }
}

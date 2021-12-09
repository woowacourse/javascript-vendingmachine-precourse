import {
    clearContainer,
    getPresetContainer,
} from "../storage/initialPresent.js";

export default function ManagePresenter() {
    // 최초 실행시, localStorage를 확인해볼 것.
    // localStorage에 값이 없다는게 확인 된다면, 새로 깔면 되고,
    // product 상품을 만들어서 해당 값으로 저장하는 식으로 가자.
    this.init = () => {
        clearContainer();
    };

    this.init();
}

import { clearContainer } from "../storage/initialPresent.js";

export default function ManagePresenter() {
    // 최초 실행시, localStorage를 확인해볼 것.
    // localStorage에 값이 없다는게 확인 된다면, 새로 깔면 되고,
    this.init = () => {
        clearContainer();
    };

    this.init();
}

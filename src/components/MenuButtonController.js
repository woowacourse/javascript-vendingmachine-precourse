import MainMenuCheck from "./MainMenuCheck.js";

export default class MenuButtonController {
  static menuButtonEvent() {
    document.addEventListener('click', (e) => {
      const targetId = e.target.id;

      MainMenuCheck.checkFirstMenu(targetId);
      MainMenuCheck.checkSecondMenu(targetId);
      MainMenuCheck.checkThirdMenu(targetId);
    });
  }
}

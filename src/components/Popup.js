export default class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(popupSelector);
    this._closeButton = this._popupElement.querySelector(".popup__close");
  }

  open() {
    this._popupElement.classList.add("popup_opened");
    document.addEventListener("keydown", this._closeWithEscape);
    this._popupElement.addEventListener("mousedown", this._closeOnRemoteClick);
  }

  close() {
    this._popupElement.classList.remove("popup_opened");
    document.removeEventListener("keydown", this._closeWithEscape);
    this._popupElement.removeEventListener(
      "mousedown",
      this._closeOnRemoteClick
    );
  }

  _closeWithEscape = (evt) => {
    if (evt.key === "Escape") {
      this.close();
    }
  };

  _closeOnRemoteClick = (evt) => {
    if (evt.target === evt.currentTarget) {
      this.close();
    }
  };

  setEventListeners() {
    this._closeButton.addEventListener("click", () => {
      this.close();
    });
  }
}

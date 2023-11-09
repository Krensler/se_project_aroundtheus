import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super({ popupSelector });
    this._cardImage = this._popupElement.querySelector("#modal-image");
    this._cardDescritpion = this._popupElement.querySelector("#modal-text");
  }
  open(data) {
    this._cardImage.src = data.link;
    this._cardImage.alt = data.name;
    this._cardDescription.textcontent = data.name;
    super.open();
  }
}

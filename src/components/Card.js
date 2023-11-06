export default class Card {
  constructor({ name, link }, cardSelector, handleImageClick) {
    this._name = name;
    this._link = link;
    this._cardSelector = cardSelector;
    this._handleImageClick = handleImageClick;
  }

  _setEventListeners() {
    this._cardLikeButton.addEventListener("click", () => {
      this._handleLikeButton();
    });

    this._cardDeleteButton.addEventListener("click", () => {
      this._handleDeleteButton();
    });

    this._cardImageEl.addEventListener("click", () => {
      this._handleImageClick();
    });
  }

  _handleDeleteButton() {
    this._cardElement.remove();
    this._cardElement = null;
  }

  _handleLikeButton() {
    this._cardLikeButton.classList.toggle("card__like-button_active");
  }

  _handleImageClick() {
    modalImageEl.src = this._link;
    modalImageEl.alt = this._name;
    modalTextEl.textContent = this._name;
    openModal(previewModalImage);
  }

  _getElement() {
    return document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);
  }

  getView() {
    this._cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);
    this._cardLikeButton =
      this._cardElement.querySelector(".card__like-button");
    this._cardDeleteButton = this._cardElement.querySelector(
      ".card__delete-button"
    );
    this._cardImageEl = this._cardElement.querySelector(".card__image");
    this._cardTitleEl = this._cardElement.querySelector(".card__image-title");
    this._cardImageEl.src = this._link;
    this._cardImageEl.alt = this._name;
    this._setEventListeners();
    this._cardTitleEl.textContent = this._name;
    return this._cardElement;
  }
}

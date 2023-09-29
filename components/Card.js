
export default class Card {
    constructor({ name, link }, cardSelector) {
      this._name = name;
      this._link = link;
      this._cardSelector = cardSelector;
    }
  
    _setEventListeners() {
        this._cardElement.querySelector(".card__like-button").addEventListener('click', () => {
            this._handleLikeIcon();
        })

        this._cardElement.querySelector(".card__delete-button").addEventListener('click', () => {
            this._handleDeleteButton();
        })
  
      this._cardImage.addEventListener("click", () => {
        this._handlePreviewPicture();
      });
    }
  
    _handleDeleteButtton() {
      this._cardElement.remove();
      this._cardElement = null;
    }
  
    _handleLikeIcon() {
      this._cardElement.querySelector(".card__like-button").classList.toggle("card__like-button_active");
    }
  
    _handlePreviewPicture() {
      cardPreviewImage.src = this._link;
      cardPreviewImage.alt = this._name;
      cardPreviewTitle.textContent = this._name;
      openModal(cardImageModal);
    }
  
    _getElement() {
      return document
        .querySelector(this._cardSelector)
        .content.querySelector(".card")
        .cloneNode(true);
    }
  
    getView() {
      this._cardElement = document.querySelector(this._cardSelector).content.querySelector(".card").cloneNode(true); 
      this._cardLikeButton = this._cardElement.querySelector(".card__like-button");
      this._cardDeleteButton = this._cardElement.querySelector(".card__delete-button");
      this._cardImageEl = this._cardElement.querySelector(".card__image");
      this._cardTitleEl = this._cardElement.querySelector(".card__description");
      this._cardImage.src = this._link;
      this._cardImage.alt = this._name;
      this._setEventListeners();
      this._cardTitle.textContent = this._name;
        return this._cardElement;
    }
  }
  
  export default Card;
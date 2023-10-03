import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },

  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },

  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },

  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },

  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },

  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
  },
];

/* -------------------------------------------------------------------------- */
/*                                  Elements                                  */
/* -------------------------------------------------------------------------- */
/*const cardTemplate = document
  .querySelector("#card-template")
  .content.querySelector(".card");*/

/* -------------------------------- Wrappers -------------------------------- */
const cardListEl = document.querySelector(".cards__list");
const profileEditForm = document.querySelector("#edit-profile-form");
const profileEditModal = document.querySelector("#profile-edit-modal");
const cardAddModal = document.querySelector("#card-add-modal");
const addNewCardEditForm = document.querySelector("#add-card-form");
const previewModalImage = document.querySelector("#preview-modal-image");

/* ----------------------- Buttons and other DOM nodes ---------------------- */
const profileEditButton = document.querySelector("#profile-edit-button");
const profileModalCloseButton = profileEditModal.querySelector(
  "#profile-close-button"
);
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const addNewCardButton = document.querySelector(".profile__add-button");
const addNewCardCloseButton = cardAddModal.querySelector(
  "#add-new-card-close-button"
);
const previewModalCloseButton = previewModalImage.querySelector(
  "#preview-modal-close-button"
);

/* -------------------------------- Form Data ------------------------------- */
const profileTitleInput = document.querySelector("#profile-title-input");
const profileDescriptionInput = document.querySelector(
  "#profile-description-input"
);
const cardAddTitle = document.querySelector("#card-add-title");
const cardAddLink = document.querySelector("#card-add-link");
// const modalImageEl = document.querySelector("#modal-image");
// const modalTextEl = document.querySelector("#modal-text");

/* -------------------------------------------------------------------------- */
/*                                  Functions                                 */
/* -------------------------------------------------------------------------- */
const settings = {
  formSelector: ".modal__form",
  inputSelector: ".modal__form-input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__form-input_type_error",
  errorClass: "modal__error_visible",
};

const editFormValidator = new FormValidator(settings, profileEditForm);
editFormValidator.enableValidation();

const addFormValidator = new FormValidator(settings, addNewCardEditForm);
addFormValidator.enableValidation();

initialCards.forEach((cardData) => {
  const cardElement = createCard(cardData, "#card-template");
  cardListEl.append(cardElement);
});

function createCard(cardData, cardSelector) {
  const cardElement = new Card(cardData, cardSelector);
  return cardElement.getView();
}

function renderCard(cardData, cardsListElement) {
  const card = createCard(cardData, "#card-template");
  cardsListElement.prepend(card);
}

function openModal(modal) {
  modal.classList.add("modal_opened");
  document.addEventListener("keydown", closeWithEscape);
  modal.addEventListener("mousedown", closeModalOnRemoteClick);
}

function closeModal(modal) {
  modal.classList.remove("modal_opened");
  document.removeEventListener("keydown", closeWithEscape);
  modal.removeEventListener("mousedown", closeModalOnRemoteClick);
}

function closeWithEscape(evt) {
  if (evt.key === "Escape") {
    const openModal = document.querySelector(".modal_opened");
    closeModal(openModal);
  }
}

function closeModalOnRemoteClick(evt) {
  if (evt.target === evt.currentTarget) {
    closeModal(evt.target);
  }
}

/* function getCardElement(cardData) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImageEl = cardElement.querySelector(".card__image");
  const cardTitleEl = cardElement.querySelector(".card__image-title");
  const cardLikeButton = cardElement.querySelector(".card__like-button");
  const cardDeleteButton = cardElement.querySelector(".card__delete-button");

  cardLikeButton.addEventListener("click", () => {
    cardLikeButton.classList.toggle("card__like-button_active");
  });

  cardDeleteButton.addEventListener("click", () => {
    cardElement.remove();
  });

  cardImageEl.addEventListener("click", () => {
    openModal(previewModalImage);
    modalImageEl.src = cardData.link;
    modalImageEl.alt = cardData.name;
    modalTextEl.textContent = cardData.name;
  });

  cardImageEl.src = cardData.link;
  cardImageEl.alt = cardData.name;
  cardTitleEl.textContent = cardData.name;

  return cardElement;
}*/

/* -------------------------------------------------------------------------- */
/*                               Event Handlers                               */
/* -------------------------------------------------------------------------- */

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = profileTitleInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closeModal(profileEditModal);
}

function handleCardAddSubmit(evt) {
  evt.preventDefault();
  const name = cardAddTitle.value;
  const link = cardAddLink.value;
  renderCard({ name, link }, cardListEl);
  closeModal(cardAddModal);

  cardAddTitle.value = "";
  cardAddLink.value = "";
  addFormValidator.toggleButtonState();
}

/* function renderCard(cardData) {
  const cardElement = getCardElement(cardData);
  cardListEl.prepend(cardElement);
}  */

/* -------------------------------------------------------------------------- */
/*                               Event Listeners                              */
/* -------------------------------------------------------------------------- */

profileEditButton.addEventListener("click", () => {
  profileTitleInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  openModal(profileEditModal);
});

profileModalCloseButton.addEventListener("click", () => {
  closeModal(profileEditModal);
});

profileEditForm.addEventListener("submit", handleProfileFormSubmit);

addNewCardButton.addEventListener("click", () => {
  openModal(cardAddModal);
});

addNewCardCloseButton.addEventListener("click", () => {
  closeModal(cardAddModal);
});

addNewCardEditForm.addEventListener("submit", handleCardAddSubmit);

/*

modalImageEl.addEventListener("click", () => {
  openModal(previewModalImage);
});

*/

previewModalCloseButton.addEventListener("click", () => {
  closeModal(previewModalImage);
});

export { openModal };
import "../pages/index.css";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Popup from "../components/Popup.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import { openModal, closeModal } from "../utils/utils";
import {
  initialCards,
  cardListEl,
  profileEditForm,
  addNewCardEditForm,
  previewModalImage,
  profileEditButton,
  profileTitle,
  profileDescription,
  addNewCardButton,
  addNewCardCloseButton,
  previewModalCloseButton,
  profileTitleInput,
  profileDescriptionInput,
  cardAddTitle,
  cardAddLink,
  settings,
  modalImageEl,
  modalTextEl,
} from "../utils/Constants.js";

/*  In Constatnts.js

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

/* -------------------------------- Wrappers -------------------------------- */
/*
const cardListEl = document.querySelector(".cards__list");
const profileEditForm = document.querySelector("#edit-profile-form");
const profileEditModal = document.querySelector("#profile-edit-modal");
const cardAddModal = document.querySelector("#card-add-modal");
const addNewCardEditForm = document.querySelector("#add-card-form");
const previewModalImage = document.querySelector("#preview-modal-image");

/* ----------------------- Buttons and other DOM nodes ---------------------- */
/*
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
/*
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
/*
const settings = {
  formSelector: ".modal__form",
  inputSelector: ".modal__form-input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__form-input_type_error",
  errorClass: "modal__error_visible",
};
*/

//

const cardAddModal = new PopupWithForm("#card-add-modal", handleCardAddSubmit);
cardAddModal.setEventListeners();

const profileEditModal = new PopupWithForm("#profile-edit-modal", (data) => {
  userInfo.setUserInfo(data);
  profileEditModal.close();
});
profileEditModal.setEventListeners();

const userInfo = new UserInfo(".profile__title", ".profile__description");

const imagePreviewModal = new PopupWithImage(
  "#preview-modal-image",
  handleImageClick
);
imagePreviewModal.setEventListeners();

const cardSection = new Section(
  { items: initialCards, renderer: renderCard(item) },
  ".cards__list"
);
cardSection.renderItems();

// FORM VALIDATORS

const editFormValidator = new FormValidator(settings, profileEditForm);
editFormValidator.enableValidation();

const addFormValidator = new FormValidator(settings, addNewCardEditForm);
addFormValidator.enableValidation();

initialCards.forEach((cardData) => {
  const cardElement = createCard(cardData, "#card-template");
  cardListEl.append(cardElement);
});

// FUNCTIONS

function handleImageClick(cardData) {
  const data = {
    link: data.src,
    name: data.alt,
  };
  imagePreviewModal.open(cardData);
}

function createCard(cardData, cardSelector) {
  const cardElement = new Card(cardData, cardSelector);
  return cardElement.getView();
}

function renderCard(cardData) {
  const card = new Card(cardData, "#card-template", handleImageClick);
  const cardElement = card.getView();
  cardListEl.prepend(cardElement);
}

/*
function renderCard(cardData, cardsListElement) {
  const card = createCard(cardData, "#card-template");
  cardsListElement.prepend(card);
}

/*  In utils.js

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

*/
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

/* -------------------------------------------------------------------------- */
/*                               Event Listeners                              */
/* -------------------------------------------------------------------------- */

profileEditButton.addEventListener("click", () => {
  profileTitleInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  openModal(profileEditModal);
  const popupForm = new PopupWithForms({
    popupSelector: "#profile-edit-modal",
    handleFormSubmit: handleProfileFormSubmit,
  });
  popupForm.open();
});

// profileModalCloseButton.addEventListener("click", () => {
//   closeModal(profileEditModal);
// });

profileEditForm.addEventListener("submit", handleProfileFormSubmit);

addNewCardButton.addEventListener("click", () => {
  openModal(cardAddModal);
});

// addNewCardCloseButton.addEventListener("click", () => {
//  closeModal(cardAddModal);
// });

// addNewCardEditForm.addEventListener("submit", handleCardAddSubmit);

/*

modalImageEl.addEventListener("click", () => {
  openModal(previewModalImage);
});

*/

// previewModalCloseButton.addEventListener("click", () => {
//  closeModal(previewModalImage);
// });

export { openModal };

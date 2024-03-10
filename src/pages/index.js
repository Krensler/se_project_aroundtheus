import "../pages/index.css";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Popup from "../components/Popup.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
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

const cardAddModal = new PopupWithForm("#card-add-modal", handleCardAddSubmit);
cardAddModal.setEventListeners();

const profileEditModal = new PopupWithForm(
  "#profile-edit-modal",
  ({ title, description }) => {
    userInfo.setUserInfo({ title, description });
    profileEditModal.close();
  }
);
profileEditModal.setEventListeners();

const userInfo = new UserInfo(".profile__title", ".profile__description");

const imagePreviewModal = new PopupWithImage("#preview-modal-image");
imagePreviewModal.setEventListeners();

const cardSection = new Section(
  { items: initialCards, renderer: (item) => renderCard(item) },
  ".cards__list"
);
cardSection.renderItems();

// FORM VALIDATORS

const editFormValidator = new FormValidator(settings, profileEditForm);
editFormValidator.enableValidation();

const addFormValidator = new FormValidator(settings, addNewCardEditForm);
addFormValidator.enableValidation();

// FUNCTIONS

function handleImageClick(card) {
  const data = {
    link: card.src,
    name: card.alt,
  };
  imagePreviewModal.open(data);
}

function createCard(data, cardSelector) {
  const cardElement = new Card(data, cardSelector);
  return cardElement.getView();
}

function renderCard(data) {
  const card = new Card(data, "#card-template", handleImageClick);
  const cardElement = card.getView();
  cardListEl.prepend(cardElement);
}

/* -------------------------------------------------------------------------- */
/*                               Event Handlers                               */
/* -------------------------------------------------------------------------- */

function handleProfileFormSubmit() {
  profileEditModal.close();
}

function handleCardAddSubmit() {
  const name = cardAddTitle.value;
  const link = cardAddLink.value;
  console.log(name, link);
  renderCard({ name, link }, cardListEl);
  cardAddModal.close();

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
  profileEditModal.open();
  /*
  const popupForm = new PopupWithForm({
    popupSelector: "#profile-edit-modal",
    handleFormSubmit: handleProfileFormSubmit,
  });
  */
  // popupForm.open();
});

profileEditForm.addEventListener("submit", handleProfileFormSubmit);

addNewCardButton.addEventListener("click", () => {
  cardAddModal.open();
});

modalImageEl.addEventListener("click", () => {
  previewModalImage.open();
});

previewModalCloseButton.addEventListener("click", () => {
  previewModalImage.close();
});

export const initialCards = [
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
export const cardListEl = document.querySelector(".cards__list");
export const profileEditForm = document.querySelector("#edit-profile-form");
export const profileEditModal = document.querySelector("#profile-edit-modal");
//export const cardAddModal = document.querySelector("#card-add-modal");
export const addNewCardEditForm = document.querySelector("#add-card-form");
export const previewModalImage = document.querySelector("#preview-modal-image");

/* ----------------------- Buttons and other DOM nodes ---------------------- */
export const profileEditButton = document.querySelector("#profile-edit-button");
export const profileModalCloseButton = profileEditModal.querySelector(
  "#profile-close-button"
);
export const profileTitle = document.querySelector(".profile__title");
export const profileDescription = document.querySelector(
  ".profile__description"
);
export const addNewCardButton = document.querySelector(".profile__add-button");
// export const addNewCardCloseButton = cardAddModal.querySelector(
//  "#add-new-card-close-button"
// );
export const previewModalCloseButton = previewModalImage.querySelector(
  "#preview-modal-close-button"
);

/* -------------------------------- Form Data ------------------------------- */
export const profileTitleInput = document.querySelector("#profile-title-input");
export const profileDescriptionInput = document.querySelector(
  "#profile-description-input"
);
export const cardAddTitle = document.querySelector("#card-add-title");
export const cardAddLink = document.querySelector("#card-add-link");
export const modalImageEl = document.querySelector("#modal-image");
export const modalTextEl = document.querySelector("#modal-text");
// export const previewModalImage = document.querySelector("#preview-modal-image");

/* -------------------------------------------------------------------------- */
/*                                  Functions                                 */
/* -------------------------------------------------------------------------- */
export const settings = {
  formSelector: ".modal__form",
  inputSelector: ".modal__form-input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__form-input_type_error",
  errorClass: "modal__error_visible",
};

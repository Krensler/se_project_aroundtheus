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
const cardTemplate = document
  .querySelector("#card-template")
  .content.querySelector(".card");

/* -------------------------------- Wrappers -------------------------------- */
const cardListEl = document.querySelector(".cards__list");
const profileEditForm = document.querySelector(".modal__form");
const profileEditModal = document.querySelector("#profile-edit-modal");
const cardAddModal = document.querySelector("#card-add-modal");
const addNewCardEditForm = document.querySelector(".modal__form");
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
const modalImageEl = document.querySelector("#modal-image");
const modalTextEl = document.querySelector("#modal-text");

/* -------------------------------------------------------------------------- */
/*                                  Functions                                 */
/* -------------------------------------------------------------------------- */

function openModal(Modal) {
  Modal.classList.add("modal_opened");
}

function closeModal(Modal) {
  Modal.classList.remove("modal_opened");
}

function getCardElement(cardData) {
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
}

/* -------------------------------------------------------------------------- */
/*                               Event Handlers                               */
/* -------------------------------------------------------------------------- */

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = profileTitleInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closeModal();
}

function handleCardAddSubmit(evt) {
  evt.preventDefault();
  cardListEl.prepend(
    getCardElement({
      name: cardAddTitle.value,
      link: cardAddLink.value,
    })
  );
  evt.target.reset();
  closeModal(cardAddModal);
}

function renderCard(cardData) {
  const cardElement = getCardElement(cardData);
  cardListEl.prepend(cardElement);
}

/* -------------------------------------------------------------------------- */
/*                               Event Listeners                              */
/* -------------------------------------------------------------------------- */

profileEditButton.addEventListener("click", () => {
  openModal(profileEditModal);
});

profileModalCloseButton.addEventListener("click", () => {
  closeModal(profileEditModal);
});

profileEditForm.addEventListener("submit", (evt) => {
  handleProfileFormSubmit(evt);
});

addNewCardButton.addEventListener("click", () => {
  openModal(cardAddModal);
});

addNewCardCloseButton.addEventListener("click", () => {
  closeModal(cardAddModal);
});

addNewCardEditForm.addEventListener("submit", (evt) => {
  handleCardAddSubmit(evt);
});

modalImageEl.addEventListener("click", () => {
  openModal(previewModalImage);
});

previewModalCloseButton.addEventListener("click", () => {
  closeModal(previewModalImage);
});

initialCards.forEach((cardData) => {
  const cardElement = getCardElement(cardData);
  cardListEl.prepend(cardElement);
});

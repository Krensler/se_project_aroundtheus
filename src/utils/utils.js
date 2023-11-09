export function openModal(modal) {
  // modal.classList.add("modal_opened");
  document.addEventListener("keydown", closeWithEscape);
  // modal.addEventListener("mousedown", closeModalOnRemoteClick);
}

export function closeModal(modal) {
  // modal.classList.remove("modal_opened");
  document.removeEventListener("keydown", closeWithEscape);
  // modal.removeEventListener("mousedown", closeModalOnRemoteClick);
}

export function closeWithEscape(evt) {
  if (evt.key === "Escape") {
    const openModal = document.querySelector(".modal_opened");
    closeModal(openModal);
  }
}

export function closeModalOnRemoteClick(evt) {
  if (evt.target === evt.currentTarget) {
    closeModal(evt.target);
  }
}

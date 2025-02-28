document.addEventListener("DOMContentLoaded", function () {
  // Modal functionality
  const openModalBtn = document.getElementById("open-modal");
  const closeModalBtn = document.getElementById("close-modal");
  const cancelModalBtn = document.getElementById("cancel-modal");
  const modalOverlay = document.querySelector(".popup-form");
  const fillupModal = document.querySelector(".fillup-form");
  const laptopForm = document.getElementById("laptop-form");

  if (openModalBtn) {
    openModalBtn.addEventListener("click", function () {
      fillupModal.style.display = "block";
      modalOverlay.style.display = "flex";
      document.querySelector('.popup-wrapper').style.display = 'flex';
      document.body.style.overflow = "hidden";
      if (laptopForm) laptopForm.reset();
    });
  }

  if (closeModalBtn) {
    closeModalBtn.addEventListener("click", function () {
      fillupModal.style.display = "none";
      modalOverlay.style.display = "none";
      document.querySelector('.popup-wrapper').style.display = 'none';
      document.body.style.overflow = "";
    });
  }

  if (cancelModalBtn) {
    cancelModalBtn.addEventListener("click", function () {
      fillupModal.style.display = "none";
      modalOverlay.style.display = "none";
      document.querySelector('.popup-wrapper').style.display = 'none';
      document.body.style.overflow = "";
    });
  }

  if (modalOverlay) {
    modalOverlay.addEventListener("click", function (event) {
      if (event.target === modalOverlay) {
        fillupModal.style.display = "none";
        modalOverlay.style.display = "none";
        document.querySelector('.popup-wrapper').style.display = 'none';
        document.body.style.overflow = "";
      }
    });
  }

  // Side Navigation Dropdown functionality
  const dropdownToggle = document.getElementById("dropdownToggle");
  const dropdownMenu = document.querySelector(".dropdown-menu");
  const chevDown = document.getElementById("ChevDown");
  const chevUp = document.getElementById("ChevUp");

  if (dropdownToggle && dropdownMenu && chevDown && chevUp) {
    dropdownToggle.addEventListener("click", function (event) {
      event.preventDefault();
      if (dropdownMenu.style.display === "block") {
        dropdownMenu.style.display = "none";
        chevDown.style.display = "inline";
        chevUp.style.display = "none";
      } else {
        dropdownMenu.style.display = "block";
        chevDown.style.display = "none";
        chevUp.style.display = "inline";
      }
    });

    document.addEventListener("click", function (event) {
      if (!dropdownToggle.contains(event.target) && !dropdownMenu.contains(event.target)) {
        dropdownMenu.style.display = "none";
        chevDown.style.display = "inline";
        chevUp.style.display = "none";
      }
    });
  }

  // Active Link Highlighting for .navoption
  const navLinks = document.querySelectorAll(".navoption a");
  const currentPage = window.location.pathname.split("/").pop();
  navLinks.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });
});

function openModal() {
  document.getElementById("popup-wrapper").style.display = "flex";
  document.body.style.overflow = "hidden";
  document.getElementById("laptop-form").reset();
}

function closeModal() {
  document.getElementById("popup-wrapper").style.display = "none";
  document.body.style.overflow = "";
}

function editRow(button) {
  openModal();
}

window.onclick = function(event) {
  const wrapper = document.getElementById("popup-wrapper");
  if (event.target === wrapper) {
    closeModal();
  }
};

import "./main.scss";

document.addEventListener("DOMContentLoaded", () => {
  initHeaderFade();
  initMobileMenu();
  initFeaturedList();
  initNewsletterValidation();
});

function initHeaderFade() {
  const headerNav = document.getElementById("site-header__nav");
  if (!headerNav) return;

  const THRESHOLD_PX = 120;
  let ticking = false;

  const applyHeaderFade = () => {
    headerNav.classList.toggle("is-opaque", window.scrollY > THRESHOLD_PX);
  };

  window.addEventListener("scroll", () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        applyHeaderFade();
        ticking = false;
      });
      ticking = true;
    }
  });

  applyHeaderFade();
}

function initMobileMenu() {
  const toggleBtn = document.getElementById("site-header__toggle");
  const siteModal = document.getElementById("site-modal");
  const icon = toggleBtn ? toggleBtn.querySelector("i") : null;
  if (!toggleBtn || !siteModal || !icon) return;

  const openModal = () => {
    siteModal.style.display = "block";
    icon.classList.remove("bi-list");
    icon.classList.add("bi-x-lg");
    toggleBtn.setAttribute("aria-expanded", "true");
  };

  const closeModal = () => {
    siteModal.style.display = "none";
    icon.classList.remove("bi-x-lg");
    icon.classList.add("bi-list");
    toggleBtn.setAttribute("aria-expanded", "false");
  };

  const toggleModal = () => {
    const isOpen = siteModal.style.display === "block";
    isOpen ? closeModal() : openModal();
  };

  closeModal();

  toggleBtn.addEventListener("click", toggleModal);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });
}

function initFeaturedList() {
  const featuredItems = document.querySelectorAll(".featured__item");
  if (!featuredItems.length) return;

  featuredItems.forEach((item) => {
    const line = item.querySelector(".featured__line");

    item.addEventListener("mouseenter", () => {
      item.classList.add("featured__item--active");
      if (line) line.classList.add("featured__line--active");
    });

    item.addEventListener("mouseleave", () => {
      if (!item.classList.contains("selected")) {
        item.classList.remove("featured__item--active");
        if (line) line.classList.remove("featured__line--active");
      }
    });

    item.addEventListener("click", () => {
      featuredItems.forEach((el) => {
        el.classList.remove("featured__item--active", "selected");
        const lineEl = el.querySelector(".featured__line");
        if (lineEl) lineEl.classList.remove("featured__line--active");
      });

      item.classList.add("featured__item--active", "selected");
      if (line) line.classList.add("featured__line--active");
    });
  });
}

function initNewsletterValidation() {
  const form = document.getElementById("newsletterForm");
  const emailInput = document.getElementById("newsletterEmail");
  const errorBox = document.getElementById("newsletterError");
  if (!form || !emailInput || !errorBox) return;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

  const validateEmail = () => {
    const value = emailInput.value.trim();
    const isValid = emailRegex.test(value);

    emailInput.classList.toggle("is-invalid", !isValid);
    emailInput.classList.toggle("is-valid", isValid);

    if (!isValid) {
      errorBox.textContent =
        value === "" ? "Please fill out your email." : "Please enter a valid email.";
      emailInput.setAttribute("aria-invalid", "true");
    } else {
      errorBox.textContent = "";
      emailInput.removeAttribute("aria-invalid");
    }
    return isValid;
  };

  emailInput.addEventListener("input", validateEmail);
  emailInput.addEventListener("blur", validateEmail);

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!validateEmail()) return;

    form.reset();
    emailInput.classList.remove("is-valid");
    console.log("Subscribed!");
  });
}

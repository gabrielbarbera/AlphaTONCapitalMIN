// AlphaTON Capital Corp. - Main JavaScript
// Vanilla JavaScript only - No external libraries

document.addEventListener("DOMContentLoaded", function () {
  // Initialize all interactive components
  initMobileMenu();
  initAccordions();
  initFAQ();
  initModals();
  initFormValidation();
  initActiveNavigation();
});

// Mobile Menu Toggle - Simple Version
function initMobileMenu() {
  const hamburger = document.querySelector(".hamburger");
  const mobileMenu = document.querySelector(".mobile-menu");

  function closeMobileMenu() {
    hamburger.setAttribute("aria-expanded", "false");
    mobileMenu.setAttribute("aria-hidden", "true");
    hamburger.classList.remove("active");
    mobileMenu.classList.remove("active");
    document.body.style.overflow = "";
  }

  function openMobileMenu() {
    hamburger.setAttribute("aria-expanded", "true");
    mobileMenu.setAttribute("aria-hidden", "false");
    hamburger.classList.add("active");
    mobileMenu.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  if (hamburger && mobileMenu) {
    hamburger.addEventListener("click", function () {
      const isExpanded = hamburger.getAttribute("aria-expanded") === "true";

      if (isExpanded) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });

    // Close menu when clicking on nav links
    const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");
    mobileNavLinks.forEach((link) => {
      link.addEventListener("click", closeMobileMenu);
    });

    // Close menu when clicking outside
    document.addEventListener("click", function (e) {
      if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
        closeMobileMenu();
      }
    });

    // Close menu on escape key
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && mobileMenu.classList.contains("active")) {
        closeMobileMenu();
      }
    });
  }
}

// Accordion Functionality
function initAccordions() {
  const accordionHeaders = document.querySelectorAll(".accordion-header");

  accordionHeaders.forEach((header) => {
    header.addEventListener("click", function () {
      const isActive = this.classList.contains("active");
      const panel = this.nextElementSibling;

      // Close all other accordions
      accordionHeaders.forEach((otherHeader) => {
        if (otherHeader !== this) {
          otherHeader.classList.remove("active");
          otherHeader.setAttribute("aria-expanded", "false");
          const otherPanel = otherHeader.nextElementSibling;
          if (otherPanel) {
            otherPanel.style.maxHeight = null;
            otherPanel.setAttribute("aria-hidden", "true");
          }
        }
      });

      // Toggle current accordion
      this.classList.toggle("active");
      this.setAttribute("aria-expanded", !isActive);

      if (panel) {
        if (isActive) {
          panel.style.maxHeight = null;
          panel.setAttribute("aria-hidden", "true");
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
          panel.setAttribute("aria-hidden", "false");
        }
      }
    });

    // Set initial ARIA attributes
    header.setAttribute("aria-expanded", "false");
    const panel = header.nextElementSibling;
    if (panel) {
      panel.setAttribute("aria-hidden", "true");
    }
  });
}

// FAQ Functionality - Milligram Compatible
function initFAQ() {
  const faqQuestions = document.querySelectorAll(".faq-question");

  faqQuestions.forEach((question) => {
    // Make FAQ questions focusable
    question.setAttribute("tabindex", "0");

    question.addEventListener("click", function () {
      toggleFAQ(this);
    });

    // Keyboard navigation support
    question.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggleFAQ(this);
      }
    });

    // Set initial ARIA attributes
    this.setAttribute("aria-expanded", "false");
    const answer = this.nextElementSibling;
    if (answer) {
      answer.setAttribute("aria-hidden", "true");
      answer.style.maxHeight = "0";
    }
  });
}

function toggleFAQ(question) {
  const isExpanded = question.getAttribute("aria-expanded") === "true";
  const answer = question.nextElementSibling;
  const icon = question.querySelector("svg");

  // Toggle current FAQ
  question.setAttribute("aria-expanded", !isExpanded);

  if (answer) {
    answer.setAttribute("aria-hidden", isExpanded);

    if (isExpanded) {
      // Close FAQ
      answer.style.maxHeight = "0";
      if (icon) {
        icon.style.transform = "rotate(0deg)";
      }
    } else {
      // Open FAQ
      // Use requestAnimationFrame to ensure proper height calculation
      requestAnimationFrame(() => {
        answer.style.maxHeight = answer.scrollHeight + "px";
      });
      if (icon) {
        icon.style.transform = "rotate(180deg)";
      }
    }
  }
}

// Modal Functionality
function initModals() {
  const modalTriggers = document.querySelectorAll("[data-modal-trigger]");
  const modals = document.querySelectorAll(".modal");
  const modalCloses = document.querySelectorAll(".modal-close");

  // Open modals
  modalTriggers.forEach((trigger) => {
    trigger.addEventListener("click", function (e) {
      e.preventDefault();
      const modalId = this.getAttribute("data-modal-trigger");
      const modal = document.getElementById(modalId);

      if (modal) {
        modal.classList.add("active");
        modal.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";

        // Focus first focusable element
        const firstFocusable = modal.querySelector(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (firstFocusable) {
          firstFocusable.focus();
        }
      }
    });
  });

  // Close modals
  modalCloses.forEach((close) => {
    close.addEventListener("click", function () {
      const modal = this.closest(".modal");
      if (modal) {
        modal.classList.remove("active");
        modal.setAttribute("aria-hidden", "true");
        document.body.style.overflow = "";
      }
    });
  });

  // Close modal on backdrop click
  modals.forEach((modal) => {
    modal.addEventListener("click", function (e) {
      if (e.target === this) {
        this.classList.remove("active");
        this.setAttribute("aria-hidden", "true");
        document.body.style.overflow = "";
      }
    });
  });

  // Close modal on escape key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      const activeModal = document.querySelector(".modal.active");
      if (activeModal) {
        activeModal.classList.remove("active");
        activeModal.setAttribute("aria-hidden", "true");
        document.body.style.overflow = "";
      }
    }
  });
}

// Form Validation
function initFormValidation() {
  const forms = document.querySelectorAll("form");

  forms.forEach((form) => {
    form.addEventListener("submit", function (e) {
      if (!validateForm(this)) {
        e.preventDefault();
      }
    });

    // Real-time validation
    const inputs = form.querySelectorAll("input, textarea, select");
    inputs.forEach((input) => {
      input.addEventListener("blur", function () {
        validateField(this);
      });
    });
  });
}

function validateForm(form) {
  let isValid = true;
  const inputs = form.querySelectorAll(
    "input[required], textarea[required], select[required]"
  );

  inputs.forEach((input) => {
    if (!validateField(input)) {
      isValid = false;
    }
  });

  return isValid;
}

function validateField(field) {
  const value = field.value.trim();
  const type = field.type;
  let isValid = true;
  let errorMessage = "";

  // Remove existing error
  removeFieldError(field);

  // Required field validation
  if (field.hasAttribute("required") && !value) {
    isValid = false;
    errorMessage = "This field is required.";
  }

  // Email validation
  if (type === "email" && value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      isValid = false;
      errorMessage = "Please enter a valid email address.";
    }
  }

  // Phone validation
  if (type === "tel" && value) {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    if (!phoneRegex.test(value.replace(/[\s\-\(\)]/g, ""))) {
      isValid = false;
      errorMessage = "Please enter a valid phone number.";
    }
  }

  if (!isValid) {
    showFieldError(field, errorMessage);
  }

  return isValid;
}

function showFieldError(field, message) {
  field.classList.add("error");

  const errorElement = document.createElement("div");
  errorElement.className = "field-error";
  errorElement.textContent = message;
  errorElement.setAttribute("role", "alert");

  field.parentNode.insertBefore(errorElement, field.nextSibling);
}

function removeFieldError(field) {
  field.classList.remove("error");
  const errorElement = field.parentNode.querySelector(".field-error");
  if (errorElement) {
    errorElement.remove();
  }
}

// Active Navigation Highlighting
function initActiveNavigation() {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll(".nav-link, .mobile-nav-link");

  navLinks.forEach((link) => {
    const href = link.getAttribute("href");
    if (href === currentPage || (currentPage === "" && href === "index.html")) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    }
  });
}

// Utility Functions
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

function throttle(func, limit) {
  let inThrottle;
  return function () {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

// Smooth scrolling for anchor links
document.addEventListener("click", function (e) {
  if (e.target.matches('a[href^="#"]')) {
    e.preventDefault();
    const target = document.querySelector(e.target.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }
});

// Loading states
function showLoading(element) {
  element.classList.add("loading");
}

function hideLoading(element) {
  element.classList.remove("loading");
}

// Export functions for use in other scripts
window.AlphaTON = {
  showLoading,
  hideLoading,
  debounce,
  throttle,
};

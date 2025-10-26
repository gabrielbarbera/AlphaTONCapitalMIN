// AlphaTON Capital Corp. - Main JavaScript
// Handles mobile menu, forms, FAQ accordion, and general interactions

document.addEventListener("DOMContentLoaded", function () {
  // Mobile Menu Toggle
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
  const mobileMenu = document.querySelector(".mobile-menu");
  const mobileMenuClose = document.querySelector(".mobile-menu-close");

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener("click", function () {
      mobileMenu.classList.add("active");
      document.body.style.overflow = "hidden";
    });
  }

  if (mobileMenuClose && mobileMenu) {
    mobileMenuClose.addEventListener("click", function () {
      mobileMenu.classList.remove("active");
      document.body.style.overflow = "auto";
    });
  }

  // Close mobile menu when clicking a link
  const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");
  mobileNavLinks.forEach((link) => {
    link.addEventListener("click", function () {
      mobileMenu.classList.remove("active");
      document.body.style.overflow = "auto";
    });
  });

  // FAQ Accordion
  const faqQuestions = document.querySelectorAll(".faq-question");
  faqQuestions.forEach((question) => {
    question.addEventListener("click", function () {
      const answer = this.nextElementSibling;
      const isActive = this.classList.contains("active");

      // Close all other FAQs
      faqQuestions.forEach((q) => {
        if (q !== this) {
          q.classList.remove("active");
          const a = q.nextElementSibling;
          a.classList.remove("active");
        }
      });

      // Toggle current FAQ
      if (isActive) {
        this.classList.remove("active");
        answer.classList.remove("active");
      } else {
        this.classList.add("active");
        answer.classList.add("active");
      }
    });
  });

  // Contact Form Handler
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Get form data
      const formData = new FormData(this);
      const data = Object.fromEntries(formData);

      // Simple validation
      if (!data["full-name"] || !data.email || !data.subject || !data.message) {
        alert("Please fill in all required fields.");
        return;
      }

      // Simulate form submission
      const submitBtn = this.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;

      submitBtn.textContent = "Sending...";
      submitBtn.disabled = true;

      setTimeout(() => {
        alert("Thank you for your message! We will get back to you soon.");
        this.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
      }, 2000);
    });
  }

  // Newsletter Form Handler
  const newsletterForm = document.querySelector(".newsletter-form");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const email = this.querySelector('input[type="email"]');
      if (email && email.value) {
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;

        submitBtn.textContent = "Subscribing...";
        submitBtn.disabled = true;

        setTimeout(() => {
          alert(
            "Thank you for subscribing! Check your email for confirmation."
          );
          this.reset();
          submitBtn.textContent = originalText;
          submitBtn.disabled = false;
        }, 2000);
      }
    });
  }
});

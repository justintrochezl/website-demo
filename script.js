// Scroll effect for navbar
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {  // triggers after scrolling 50px
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});


(function () {
  emailjs.init("pElaEW3hgu0TizosF"); // Replace with your EmailJS Public Key
})();

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const submitBtn = form.querySelector("button");
    submitBtn.disabled = true;
    submitBtn.innerText = "Sending...";

    emailjs.sendForm(
      "service_gxtba305",   // Replace with your EmailJS Service ID
      "template_2gr3i5u",  // Replace with your EmailJS Template ID
      form
    )
    .then(() => {
      submitBtn.innerText = "Sent!";
      setTimeout(() => {
        window.location.href = "submitted.html"; // Redirect after success
      }, 800);
    })
    .catch((error) => {
      console.error("EmailJS error:", error);
      submitBtn.innerText = "Try Again";
      submitBtn.disabled = false;
    });
  });
});

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links a');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  hamburger.classList.toggle('open');
});

// 🔥 CLOSE MENU WHEN A LINK IS CLICKED
navItems.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    hamburger.classList.remove('open');
  });
});
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
  item.querySelector(".faq-question").addEventListener("click", () => {
    item.classList.toggle("active");
  });
});


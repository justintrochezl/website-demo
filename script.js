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
  emailjs.init("pElaEW3hgu0TizosF"); // from EmailJS dashboard
})();

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Collect checked glass options
  const glassChecked = [...document.querySelectorAll('input[name="glass[]"]:checked')]
    .map(item => item.value)
    .join(", ");

  // Build template params
  const templateParams = {
    name: this.name.value,
    email: this.email.value,
    phone: this.phone.value,
    city: this.city.value,
    year: this.year.value,
    make: this.make.value,
    model: this.model.value,
    glass: glassChecked || "Not specified",
    message: this.message.value,
  };

  emailjs.send(
    "service_gxtba305",
    "template_2gr3i5u",
    templateParams
  )
  .then(() => {
    alert("Message sent successfully!");
    this.reset();
  })
  .catch((error) => {
    alert("Failed to send message.");
    console.error(error);
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


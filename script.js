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
 const glassChecked = [...document.querySelectorAll('input[name="glass"]:checked')]
  .map(cb => cb.value);

// Then send:


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

  // Send email and redirect on success
  emailjs.send("service_gxtba305", "template_2gr3i5u", templateParams)
    .then(response => {
      // Redirect to your submission page
     window.location.href = "submitted.html"; // or the correct path if in a folder

    })
    .catch(error => {
      alert("Oops... something went wrong. " + JSON.stringify(error));
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


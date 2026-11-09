/* =========================================
   PAWSITIVE OBEDIENCE ACADEMY
   JavaScript
   ========================================= */


/* ---------- Enquiry Form ---------- */

/* ---------- Enquiry Form ---------- */

const enquiryForm = document.getElementById("enquiryForm");

if (enquiryForm) {

    enquiryForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const message = document.getElementById("formMessage");

        const fullName = document.getElementById("fullName").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const dogName = document.getElementById("dogName").value.trim();
        const dogAge = document.getElementById("dogAge").value;
        const service = document.getElementById("service").value;
        const userMessage = document.getElementById("message").value.trim();

        message.style.color = "#d32f2f";

        if (fullName.length < 2) {
            message.textContent = "Please enter your full name.";
            return;
        }

        if (!email.includes("@") || !email.includes(".")) {
            message.textContent = "Please enter a valid email address.";
            return;
        }

        if (!/^[0-9+\s()-]{10,20}$/.test(phone)) {
            message.textContent = "Please enter a valid phone number.";
            return;
        }

        if (dogName.length < 2) {
            message.textContent = "Please enter your dog's name.";
            return;
        }

        if (dogAge === "" || Number(dogAge) < 0 || Number(dogAge) > 30) {
            message.textContent = "Please enter a valid dog age.";
            return;
        }

        if (service === "") {
            message.textContent = "Please select a training service.";
            return;
        }

        if (userMessage.length < 10) {
            message.textContent = "Your message must contain at least 10 characters.";
            return;
        }

        message.style.color = "#39843d";

        message.textContent =
            "Thank you, " + fullName +
            "! Your enquiry for " + dogName +
            " has been received successfully.";

        enquiryForm.reset();

    });
}


/* ---------- Contact Form ---------- */

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("contactName").value.trim();
        const email = document.getElementById("contactEmail").value.trim();
        const userMessage = document.getElementById("contactMessage").value.trim();

        const message = document.getElementById("contactFormMessage");

        if (name.length < 2) {
            message.textContent = "Please enter your full name.";
            return;
        }

        if (!email.includes("@") || !email.includes(".")) {
            message.textContent = "Please enter a valid email address.";
            return;
        }

        if (userMessage.length < 10) {
            message.textContent = "Your message must contain at least 10 characters.";
            return;
        }

       const recipient = "st10515569@myemeris.edu.za";

        const subject = encodeURIComponent("Website Enquiry - Pawsitive Obedience Academy");

        const body = encodeURIComponent(
            "Name: " + name +
            "\nEmail: " + email +
            "\n\nMessage:\n" + userMessage
        );

        const mailtoLink =
            "mailto:" + recipient +
            "?subject=" + subject +
            "&body=" + body;

        message.style.color = "#39843d";
        message.textContent = "Your email is ready. Please send it using your email application.";

        window.location.href = mailtoLink;

    });
}
/* ---------- FAQ Accordion ---------- */

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(function(question) {

    question.addEventListener("click", function() {

        const answer = question.nextElementSibling;
        const symbol = question.querySelector("span");

        if (answer.style.display === "block") {

            answer.style.display = "none";
            symbol.textContent = "+";

        } else {

            answer.style.display = "block";
            symbol.textContent = "-";

        }

    });

});
/* ---------- Image Gallery Lightbox ---------- */

// Select all service images
const galleryImages = document.querySelectorAll(".service-image img");

// Create lightbox container
const lightbox = document.createElement("div");
lightbox.id = "lightbox";

lightbox.innerHTML = `
    <span class="lightbox-close">&times;</span>
    <img id="lightbox-image" src="" alt="Enlarged dog training image">
`;

document.body.appendChild(lightbox);

// Get lightbox elements
const lightboxImage = document.getElementById("lightbox-image");
const closeButton = document.querySelector(".lightbox-close");

// Open image when clicked
galleryImages.forEach(function(image) {

    image.style.cursor = "pointer";

    image.addEventListener("click", function() {

        lightbox.style.display = "flex";
        lightboxImage.src = image.src;
        lightboxImage.alt = image.alt;

    });

});

// Close lightbox
closeButton.addEventListener("click", function() {
    lightbox.style.display = "none";
});

// Close when clicking outside the image
lightbox.addEventListener("click", function(event) {

    if (event.target === lightbox) {
        lightbox.style.display = "none";
    }

});

// Close using Escape key
document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        lightbox.style.display = "none";
    }

});
/* ---------- Service Search Functionality ---------- */

const serviceSearch = document.getElementById("serviceSearch");

if (serviceSearch) {

    const serviceCards = document.querySelectorAll(".service-card");

    const noResults = document.createElement("p");

    noResults.textContent = "No training services found. Please try another search.";

    noResults.style.display = "none";
    noResults.style.textAlign = "center";

    document.querySelector(".all-services").after(noResults);

    serviceSearch.addEventListener("input", function() {

        const searchValue = serviceSearch.value.toLowerCase().trim();

        let resultsFound = 0;

        serviceCards.forEach(function(card) {

            const serviceText = card.textContent.toLowerCase();

            if (serviceText.includes(searchValue)) {

                card.style.display = "";
                resultsFound++;

            } else {

                card.style.display = "none";

            }

        });

        if (resultsFound === 0) {
            noResults.style.display = "block";
        } else {
            noResults.style.display = "none";
        }

    });

}
/* ---------- Scroll Reveal Animation ---------- */

const animatedCards = document.querySelectorAll(".service-card");

if ("IntersectionObserver" in window) {

    const cardObserver = new IntersectionObserver(function(entries) {

        entries.forEach(function(entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("show-card");

                cardObserver.unobserve(entry.target);

            }

        });

    }, {
        threshold: 0.2
    });

    animatedCards.forEach(function(card) {

        card.classList.add("reveal-card");

        cardObserver.observe(card);

    });

}
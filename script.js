const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 150);
});


// Sélection des éléments des barres de compétences
const skillBars = document.querySelectorAll(".Services .progress-bar");

// Parcours de chaque barre de compétences
skillBars.forEach(skillBar => {
    // Récupération de la valeur du pourcentage depuis l'attribut "aria-valuenow"
    const percentage = parseInt(skillBar.getAttribute("aria-valuenow"));

    // Animation progressive de la largeur de la barre de compétences
    skillBar.style.width = "0"; // Commence avec une largeur de 0
    setTimeout(() => {
        skillBar.style.width = percentage + "%"; // Augmente progressivement la largeur jusqu'au pourcentage indiqué
    }, 100);

    // Changement de couleur de fond au survol
    skillBar.addEventListener("mouseenter", () => {
        skillBar.style.backgroundColor = "#1ABC9C"; // Nouvelle couleur de fond au survol
    });

    // Retour à la couleur d'origine lorsque la souris quitte la barre de compétences
    skillBar.addEventListener("mouseleave", () => {
        skillBar.style.backgroundColor = "#3498DB"; // Couleur de fond par défaut
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const projects = document.querySelectorAll(".project-card");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.3 });

    projects.forEach((project) => {
        observer.observe(project);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const submitBtn = document.getElementById("submit-btn");
    const spinner = document.querySelector(".loading-spinner");
    const message = document.getElementById("form-message");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Empêche l'envoi immédiat

        // Afficher le spinner
        spinner.style.display = "inline-block";
        submitBtn.disabled = true;
        submitBtn.style.opacity = "0.7";

        // Simuler l'envoi du formulaire (2s de chargement)
        setTimeout(() => {
            spinner.style.display = "none";
            submitBtn.disabled = false;
            submitBtn.style.opacity = "1";

            // Afficher le message de succès
            message.textContent = "✅ Votre message a bien été envoyé !";
            message.classList.remove("hidden");

            // Réinitialiser le formulaire après 3 secondes
            setTimeout(() => {
                form.reset();
                message.classList.add("hidden");
            }, 3000);
        }, 2000);
    });
});



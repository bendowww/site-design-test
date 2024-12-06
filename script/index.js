/* Box Contact */

// Sélectionner les éléments du DOM
const contactButton = document.getElementById('contact');
const contactBox = document.getElementById('contact-box');
const overlay = document.getElementById('overlay');

// Ajouter un événement au clic sur le bouton Contact
contactButton.addEventListener('click', function(event) {
    event.preventDefault(); // Empêcher le comportement par défaut du lien

    // Basculer la visibilité de la box
    if (contactBox.classList.contains('show')) {
        contactBox.classList.remove('show'); // Supprime l'animation et masque la box
        setTimeout(() => {
            contactBox.style.display = 'none'; // Masquer complètement après l'animation
        }, 300); // Correspond à la durée de l'animation
        overlay.style.display = 'none';
        contactButton.classList.remove('active');
    } else {
        // Obtenir les coordonnées du bouton "Contact"
        const rect = contactButton.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        // Calculer la position horizontale et verticale
        const buttonCenterX = rect.left + rect.width / 2; // Centre horizontal du bouton
        const boxHalfWidth = contactBox.offsetWidth / 2; // Moitié de la largeur de la boîte
        const boxTop = rect.bottom + scrollTop + 24; // Alignement en bas du bouton avec un padding de 24px

        // Appliquer les styles pour positionner la boîte
        contactBox.style.top = boxTop + "px";
        contactBox.style.left = buttonCenterX - boxHalfWidth + "px";

        contactBox.style.display = 'block'; // Afficher avant d'ajouter la classe `show`
        setTimeout(() => {
            contactBox.classList.add('show'); // Ajouter l'animation
        }, 10); // Petit délai pour déclencher l'animation

        overlay.style.display = 'block';
        contactButton.classList.add('active');
    }
});

// Ajouter un événement au clic sur l'overlay pour fermer la box
overlay.addEventListener('click', function() {
    contactBox.classList.remove('show'); // Supprime l'animation et masque la box
    setTimeout(() => {
        contactBox.style.display = 'none'; // Masquer complètement après l'animation
    }, 300); // Correspond à la durée de l'animation
    overlay.style.display = 'none';
    contactButton.classList.remove('active');
});

document.querySelector('.mail-copy').addEventListener('click', function() {
    const email = this.textContent;
    const tooltip = document.querySelector('.copy-tooltip');

    // Copie de l'email dans le presse-papier
    navigator.clipboard.writeText(email).then(() => {
        // Change le texte à "Copied!" et applique le style
        tooltip.textContent = 'Copied !';

        // Après 2 secondes, réinitialise le texte à "Click to Copy"
        setTimeout(() => {
            tooltip.textContent = 'Click to Copy';
        }, 2000);
    }).catch(err => {
        console.error('Erreur lors de la copie :', err);
    });
});

// Récupérer l'élément du bouton
var scrollToTopButton = document.getElementById('scroll-to-top');

// Afficher ou cacher le bouton selon le scroll
window.addEventListener('scroll', function() {
    if (window.scrollY > 300) { // Le bouton apparaît après avoir scrollé de 300px
        scrollToTopButton.classList.add('show');
    } else {
        scrollToTopButton.classList.remove('show');
    }
});

// Action au clic pour scroller en douceur vers le haut de la page
scrollToTopButton.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Permet de faire défiler la page en douceur
    });
});
let isScrolling = false; // Flag pour gérer l'animation
let targetScroll = 0; // Position cible du scroll
let currentScroll = window.scrollY || document.documentElement.scrollTop; // Position actuelle du scroll
let scrollSpeed = 0.3; // Vitesse de l'inertie (ajustée pour plus de fluidité)
let deltaMultiplier = 5; // Facteur pour augmenter l'effet de la molette

// Fonction qui va animer le scroll fluide
function smoothScroll() {
    // Calculer la nouvelle position en appliquant une inertie douce
    const distance = targetScroll - currentScroll;
    currentScroll += distance * scrollSpeed;

    // Appliquer la position calculée
    window.scrollTo(0, currentScroll);

    // Si la différence entre targetScroll et currentScroll est suffisamment petite, on arrête l'animation
    if (Math.abs(distance) > 1) {
        requestAnimationFrame(smoothScroll);
    } else {
        isScrolling = false; // Arrêter l'animation lorsque la position cible est atteinte
    }
}

// Gérer l'événement de défilement (molette ou trackpad)
window.addEventListener('wheel', (e) => {
    if (!isScrolling) { // Si aucune animation n'est en cours
        // Ajouter un multiplicateur pour augmenter l'effet du deltaY
        targetScroll += e.deltaY * deltaMultiplier; // Multiplier le deltaY pour un effet plus significatif
        isScrolling = true; // Lancer l'animation de défilement
        requestAnimationFrame(smoothScroll); // Démarrer l'animation fluide
    }
});

// Optionnel : Gérer le défilement manuel avec la barre de défilement ou d'autres événements
window.addEventListener('scroll', () => {
    if (!isScrolling) {
        // Synchroniser la position cible de défilement avec la position actuelle
        targetScroll = window.scrollY || document.documentElement.scrollTop;
    }
});
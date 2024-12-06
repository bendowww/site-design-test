function pageTransition(event) {
    event.preventDefault();

    const href = event.currentTarget.getAttribute('href');
    if (!href) {
        console.error("L'URL n'est pas définie !");
        return;
    }

    const overlay = document.querySelector('.transition-overlay');
    overlay.style.height = '100%';

    // Ajouter un listener pour détecter la fin de la transition
    overlay.addEventListener('transitionend', function() {
        window.location = href;
    });
};


document.addEventListener('DOMContentLoaded', () => {
    const contentElement = document.querySelector('.content');
    if (contentElement) {
        requestAnimationFrame(() => {
            contentElement.classList.add('fade-in');
        });
    } else {
        console.error("L'élément '.content' n'a pas été trouvé !");
    }
});
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
}
window.addEventListener('load', () => {
    // Ajouter la classe 'fade-in' au body pour déclencher l'animation
    document.body.classList.add('fade-in');
});
import Polyglot from 'https://cdn.skypack.dev/node-polyglot';

const basePath = `${window.location.origin}/site-design-test`;

// Charger les traductions
async function loadTranslations(language) {
    const response = await fetch(`${basePath}/translations/${language}.json`);
    if (!response.ok) {
        throw new Error(`Erreur ${response.status}: Impossible de charger ${language}.json`);
    }
    return await response.json();
}

// Mettre à jour la page avec transition fade
async function updateContent(language) {
    const phrases = await loadTranslations(language);
    const polyglot = new Polyglot({ phrases });

    // Cibler le conteneur principal (ou tous les éléments traduits)
    const content = document.querySelector('.content');

    // Ajouter une classe pour fade-out
    content.classList.add('fade-out');

    // Attendre que le fade-out soit terminé avant de changer le contenu
    setTimeout(() => {
        document.querySelector('.site-title').textContent = polyglot.t('site-title');
        document.querySelector('.work').textContent = polyglot.t('work');
        document.querySelector('.contact').textContent = polyglot.t('contact');
        document.querySelector('.mail-copy').textContent = polyglot.t('mail-copy');
        document.querySelector('.copy-tooltip').textContent = polyglot.t('copy-tooltip');
        document.querySelector('.project-sleek-description').textContent = polyglot.t('project-sleek-description');
        document.querySelector('.project-techno-description').textContent = polyglot.t('project-techno-description');
        document.querySelector('.project-tape-roll-description').textContent = polyglot.t('project-tape-roll-description');
        document.querySelector('.project-anchois-description').textContent = polyglot.t('project-anchois-description');
        document.querySelector('.project-sinergy-description').textContent = polyglot.t('project-sinergy-description');
        document.querySelector('.project-barstool-description').textContent = polyglot.t('project-barstool-description');
        document.querySelector('.footer-message').textContent = polyglot.t('footer-message');

        // Remettre le fade-in
        content.classList.remove('fade-out');
        content.classList.add('fade-in');
    }, 500); // Durée du fade-out
}

// Gestion du sélecteur de langue
document.getElementById('language-selector').addEventListener('change', (event) => {
    updateContent(event.target.value);
});

// Charger la langue par défaut
updateContent('en');

document.getElementById('language-selector').addEventListener('change', (event) => {
    const selectedLanguage = event.target.value;
    localStorage.setItem('preferredLanguage', selectedLanguage); // Stocke la langue choisie
    updateContent(selectedLanguage); // Met à jour le contenu
});

// Charger la langue par défaut ou celle stockée
const storedLanguage = localStorage.getItem('preferredLanguage') || 'en'; // Langue par défaut : anglais
updateContent(storedLanguage);
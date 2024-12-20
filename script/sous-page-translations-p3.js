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

// Appliquer les traductions
async function updateContent(language) {
    const phrases = await loadTranslations(language);
    const polyglot = new Polyglot({ phrases });

    // Ajouter une animation fade-out avant de traduire
    const content = document.querySelector('.content');
    content.classList.add('fade-out');

    // Utiliser setTimeout pour attendre la fin de l'animation fade-out
    setTimeout(() => {
        // Traduire les éléments de la page

        document.querySelector('.project-tape-roll-description').textContent = polyglot.t('project-tape-roll-description');
        document.querySelector('.project-sleek-description').textContent = polyglot.t('project-sleek-description');
        document.querySelector('.p3-title1').textContent = polyglot.t('p3-title1');
        document.querySelector('.p3-subtitle1').textContent = polyglot.t('p3-subtitle1');
        document.querySelector('.p3-title2').textContent = polyglot.t('p3-title2');
        document.querySelector('.p3-subtitle2').textContent = polyglot.t('p3-subtitle2');
        document.querySelector('.p3-title3').textContent = polyglot.t('p3-title3');
        document.querySelector('.p3-subtitle3').textContent = polyglot.t('p3-subtitle3');
        document.querySelector('.p3-title4').textContent = polyglot.t('p3-title4');
        document.querySelector('.p3-subtitle4').textContent = polyglot.t('p3-subtitle4');
        document.querySelector('.p3-title5').textContent = polyglot.t('p3-title5');
        document.querySelector('.p3-subtitle5').textContent = polyglot.t('p3-subtitle5');
        document.querySelector('.texte-title-op').textContent = polyglot.t('texte-title-op');
        document.querySelector('.footer-message').textContent = polyglot.t('footer-message');
        document.querySelector('.btw').textContent = polyglot.t('btw');

        // Remettre le fade-in
        content.classList.remove('fade-out');
        content.classList.add('fade-in');
    }, 500); // Durée de l'animation fade-out (0.5s)
}

// Récupérer la langue préférée depuis localStorage
const storedLanguage = localStorage.getItem('preferredLanguage') || 'en';
updateContent(storedLanguage);
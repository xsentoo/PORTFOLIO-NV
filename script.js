const toggleIcon = document.querySelector('.toggle-icon');

toggleIcon.addEventListener('click', () => {
    toggleIcon.classList.toggle('bx-sun'); // Ajoute la classe "bx-sun" pour changer l'icône du soleil/moon
    document.body.classList.toggle('dark-mode'); // Active/désactive la classe "dark-mode" sur le corps du document
});

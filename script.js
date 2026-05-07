// ===== NAVIGATION FLUIDE =====
const liens = document.querySelectorAll('nav ul li a');

liens.forEach(lien => {
    lien.addEventListener('click', function (e) {
        e.preventDefault();

        const cible = document.querySelector(this.getAttribute('href'));
        cible.scrollIntoView({ behavior: 'smooth' });
    });
});


// ===== MENU ACTIF SELON LA SECTION VISIBLE =====
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', function () {
    let position = window.scrollY;

    sections.forEach(section => {
        let hauteur = section.offsetHeight;
        let sommet = section.offsetTop - 80;

        if (position >= sommet && position < sommet + hauteur) {
            liens.forEach(lien => lien.classList.remove('actif'));

            let lienActif = document.querySelector(
                'nav ul li a[href="#' + section.getAttribute('id') + '"]'
            );
            if (lienActif) lienActif.classList.add('actif');
        }
    });
});
// Efecto de typing
const roles = [
    'Transformando datos en decisiones',
    'Optimizando procesos de negocio',
    'Generando valor medible',
    'Hablemos ;)'
];

const typingText = document.querySelector('.typing-text');
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const currentRole = roles[roleIndex];
    
    if (isDeleting) {
        // Borrando texto
        typingText.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
    } else {
        // Escribiendo texto
        typingText.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentRole.length) {
        // Terminó de escribir
        isDeleting = true;
        setTimeout(type, 2000); // Espera antes de borrar
    } else if (isDeleting && charIndex === 0) {
        // Terminó de borrar
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(type, 500); // Espera antes de escribir nuevo rol
    } else {
        // Continúa escribiendo o borrando
        setTimeout(type, isDeleting ? 50 : 100);
    }
}

// Iniciar el efecto cuando se carga la página
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(type, 1000); // Espera 1 segundo antes de empezar
});

// Opcional: Efecto de desvanecimiento del scroll indicator
window.addEventListener('scroll', () => {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (window.scrollY > 100) {
        scrollIndicator.style.opacity = '0';
    } else {
        scrollIndicator.style.opacity = '0.6';
    }
});

window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    const heroSection = document.querySelector('.hero');
    
    if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        
        // Si hemos scrolleado más allá del hero o estamos cerca del final del hero
        if (window.scrollY > 50 && window.scrollY < heroBottom) {
            nav.classList.add('scrolled');
        } else if (window.scrollY >= heroBottom) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    }
});
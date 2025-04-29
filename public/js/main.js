/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId);
    
    if(toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show');
        });
    }
}
showMenu('nav-toggle', 'nav-menu');

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    // Active link
    navLink.forEach(n => n.classList.remove('active-link'));
    this.classList.add('active-link');
    
    // Remove menu mobile
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*===== SCROLL TO TOP BUTTON =====*/
const scrollTop = document.getElementById('scroll-top');
window.addEventListener('scroll', () => {
    if (window.scrollY >= 200) {
        scrollTop.classList.add('show-scroll');
    } else {
        scrollTop.classList.remove('show-scroll');
    }
});

/*===== SMOOTH SCROLLING =====*/
const links = document.querySelectorAll('.nav__link');
links.forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href.startsWith('#')) {
            // Smooth scroll for internal links
            e.preventDefault();
            const targetId = href.substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
        // For external links (e.g., about.html), allow default navigation
    });
});

/*===== AOS Animation Init =====*/
AOS.init({
    duration: 1000,
    once: true,
});


/*SCROLL HOME*/
sr.reveal('.home__title', {});
sr.reveal('.home__social-icon', {delay: 200, interval: 200});
sr.reveal('.home__img', {delay: 400});

/*SCROLL ABOUT*/
sr.reveal('.about__img', {});
sr.reveal('.about__subtitle', {delay: 200});
sr.reveal('.about__text', {delay: 400});

/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle', {});
sr.reveal('.skills__text', {delay: 200});
sr.reveal('.skills__data', {delay: 400, interval: 200});
sr.reveal('.skills__img', {delay: 600});

/*SCROLL WORK*/
sr.reveal('.work__img', {interval: 200});

/*SCROLL CONTACT*/
sr.reveal('.contact__input', {delay: 200, interval: 200});
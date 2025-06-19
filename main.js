/*~~~~~~~~~~~~~~~ TOGGLE BUTTON ~~~~~~~~~~~~~~~*/
const navMenu = document.getElementById('nav-menu');
const navMenu2 = document.getElementById('nav-menu-2');
const navLink = document.querySelectorAll('.nav-link');
const hamburger = document.getElementById('hamburger');

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle('left-[0]');
    navMenu2.classList.toggle('top-[0]');
    hamburger.classList.toggle('ri-close-large-line');
});

navLink.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.toggle('left-[0]');
        navMenu2.classList.toggle('top-[0]');
        hamburger.classList.toggle('ri-close-large-line');
    });
});


/*~~~~~~~~~~~~~~~ Caurosel CAUROSEL ~~~~~~~~~~~~~~~*/


/*~~~~~~~~~~~~~~~ Effect MOUSEMOVE EFFECT ~~~~~~~~~~~~~~~*/


/*~~~~~~~~~~~~~~~ TABS ~~~~~~~~~~~~~~~*/


/*~~~~~~~~~~~~~~~ SWIPER ~~~~~~~~~~~~~~~*/


/*~~~~~~~~~~~~~~~ SHOW SCROLL UP ~~~~~~~~~~~~~~~*/


/*~~~~~~~~~~~~~~~ SCROLL SECTIONS ACTIVE LINK ~~~~~~~~~~~~~~~*/


/*~~~~~~~~~~~~~~~ SCROLL REVEAL ANIMATION ~~~~~~~~~~~~~~~*/


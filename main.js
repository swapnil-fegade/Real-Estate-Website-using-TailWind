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
let onSlide = false;

window.addEventListener("load", () => {
    autoslide();

    const buttonPrev = document.querySelector(".carousel__button__prev");
    const buttonNext = document.querySelector(".carousel__button__next");

    buttonNext.addEventListener("click", () => slide(getItemActiveIndex() + 1));

    buttonPrev.addEventListener("click", () => slide(getItemActiveIndex() - 1));
})

function autoslide(){
    setInterval(() => {
        slide(getItemActiveIndex() + 1);
    }, 5000)   // slide speed = 5s
}

// function slide(toIndex){

    // if(onSlide) return; // Prevent multiple clicks during transition
    // onSlide = true;
    // const itemsArray = Array.from(document.querySelectorAll('.carousel__item'));
    // const itemActive = document.querySelector(".carousel__item__active");
    // const itemActiveIndex = itemsArray.indexOf(itemActive);
    // let newItemActive = null;

    // if(toIndex > itemActiveIndex) {
    //         if(toIndex >= itemsArray.length) {
    //             toIndex = 0;
    //         }

    //         newItemActive = itemsArray[toIndex];
    //         newItemActive.classList.add("carousel__item__pos__next");
    //         setTimeout(() => {
    //             newItemActive.classList.add("carousel__item__next");
    //             itemActive.classList.add("carousel__item__next");
    //         }, 20);
    // } else {
    //     if(toIndex < 0) {
    //         toIndex = itemsArray.length - 1;
    //     }

    //     newItemActive = itemsArray[toIndex];
    //     newItemActive.classList.add("carousel__item__pos__prev");
    //     setTimeout(() => {
    //         newItemActive.classList.add("carousel__item__prev");
    //         itemActive.classList.add("carousel__item__prev");
    //     }, 20);
    // }

    // newItemActive.addEventListener("transitionend", () => {
    //     itemActive.className = "carousel__item";
    //     newItemActive.className = "carousel__item carousel__item__active";
    //     onSlide = false;
    // }, { once: true });

// }
function slide(toIndex) {
    if (onSlide) return;
    onSlide = true;
    const itemsArray = Array.from(document.querySelectorAll('.carousel__item'));
    const itemActive = document.querySelector(".carousel__item__active");
    const itemActiveIndex = itemsArray.indexOf(itemActive);

    // Wrap around
    if (toIndex >= itemsArray.length) toIndex = 0;
    if (toIndex < 0) toIndex = itemsArray.length - 1;

    if (toIndex === itemActiveIndex) {
        onSlide = false;
        return;
    }

    const newItemActive = itemsArray[toIndex];

    // Remove animation class from outgoing slide h4s
    itemActive.querySelectorAll('h4').forEach(h4 => {
        h4.classList.remove('carousel__h4-animate');
    });

    // Prepare new slide for fade
    newItemActive.classList.add("carousel__item__pos__next", "carousel__item__active");

    setTimeout(() => {
        newItemActive.classList.add("carousel__item__next");
        itemActive.classList.add("carousel__item__next");
    }, 20);

    function cleanUp() {
        itemActive.className = "carousel__item";
        newItemActive.className = "carousel__item carousel__item__active";
        // Add animation class to new active slide h4s
        newItemActive.querySelectorAll('h4').forEach(h4 => {
            h4.classList.add('carousel__h4-animate');
        });
        onSlide = false;
    }

    newItemActive.addEventListener("transitionend", cleanUp, { once: true });
    setTimeout(cleanUp, 600);
}

function getItemActiveIndex() {
    const itemsArray = Array.from(document.querySelectorAll('.carousel__item'));
    const itemActive = document.querySelector(".carousel__item__active");
    const itemActiveIndex = itemsArray.indexOf(itemActive);
    return itemActiveIndex;
}


/*~~~~~~~~~~~~~~~ Effect MOUSEMOVE EFFECT ~~~~~~~~~~~~~~~*/

function handleMouseMove(e, image) {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    const moveX = (x - 0.5) * 50;
    const moveY = (y - 0.5) * 50; // Adjust the multiplier for sensitivity

    image.style.transform = `translate(${moveX}px, ${moveY}px)`;
}
document.querySelector("#about").addEventListener("mousemove", (e) => {
    const image = document.querySelector(".background-image-about");
    handleMouseMove(e, image);
});

document.querySelector("#company").addEventListener("mousemove", (e) => {
    const image = document.querySelector(".background-image-company");
    handleMouseMove(e, image);
});

document.querySelector("#contact").addEventListener("mousemove", (e) => {
    const image = document.querySelector(".background-image-contact");
    handleMouseMove(e, image);
});

/*~~~~~~~~~~~~~~~ SWIPER ~~~~~~~~~~~~~~~*/

const swiper = new Swiper('.swiper', {
  
  loop: true,

  speed: 1000,
  spaceBetween: 30,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  grabCursor: true,

  
});


/*~~~~~~~~~~~~~~~ SHOW SCROLL UP ~~~~~~~~~~~~~~~*/
const scrollUp = () => {
    const scrollUpBtn = document.getElementById('scroll-up');

    if(this.scrollY >=250) {
        scrollUpBtn.classList.remove("-bottom-1/2")
        scrollUpBtn.classList.add("bottom-4")
    } else {
        scrollUpBtn.classList.add("-bottom-1/2")
        scrollUpBtn.classList.remove("bottom-4")
    }
}
window.addEventListener("scroll", scrollUp);


/*~~~~~~~~~~~~~~~ SCROLL SECTIONS ACTIVE LINK ~~~~~~~~~~~~~~~*/

const activeLink = () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    let current = "home"

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        
        if(this.scrollY >= sectionTop - 60) {
            current = section.getAttribute("id");

        }
    })

    navLinks.forEach(item => {
        item.classList.remove("active");

        if(item.href.includes(current)) {
            item.classList.add("active");
        }
    })

}

window.addEventListener("scroll", activeLink);


/*~~~~~~~~~~~~~~~ SCROLL REVEAL ANIMATION ~~~~~~~~~~~~~~~*/

const sr = ScrollReveal({
    origin: "left",
    distance: "60px",
    duration: 1500,
    delay: 300,
    reset: true
})

sr.reveal(`.about__item, .company__content h2, .company__content h4`, { interval : 100 })

sr.reveal(`.about__form h2, .about__form h4, .company__item, .contact__form h2, .contact__form h4`, { origin: "right", interval : 100 })

sr.reveal(`.about__form form, .company__content img, .contact__form form`, { origin: "top", scale: 0.5, delay: 500 })

sr.reveal(`.review__brand`, { origin: "top", interval : 100 })


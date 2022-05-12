const toggle = document.querySelector(".toggle");
const close = document.querySelector(".close");
const nav = document.querySelector("nav");
const header = document.querySelector("header");


//NAVBAR TOGGLE
toggle.addEventListener("click", () => {
    nav.classList.add("open-nav");
});

close.addEventListener("click", () => {
    nav.classList.remove("open-nav");
});


window.addEventListener('scroll', () => {
    header.classList.toggle('scrolling-active', window.scrollY > 500 );
})


window.sr = ScrollReveal();

/*sr.reveal('.header', {
        duration: 2000,
        origin: 'bottom',
        distance: '-100px'
    });*/
sr.reveal(".about-text", {
    duration: 2000,
    origin: "bottom",
    distance: "-100px",
});
sr.reveal(".about-img", {
    duration: 2000,
    origin: "bottom",
    distance: "-100px",
});
sr.reveal(".banner", {
    duration: 1000,
    origin: "left",
    distance: "100%",
});
sr.reveal(".food__row", {
    duration: 2000,
    origin: "top",
    distance: "-100%",
});
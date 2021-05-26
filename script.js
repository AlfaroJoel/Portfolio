addEventListener('DOMContentLoaded', ()=> {
    const navbar = document.querySelector('.navbar');
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    const navLink = document.querySelectorAll(".nav__link");
    window.addEventListener('scroll', ()=>{
        !navMenu.classList.contains('active') && navbar.classList.toggle("black", window.scrollY > 400);
    });
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
        navbar.classList.toggle('black', !navMenu.classList.contains('black'));
    });

    navLink.forEach(n => n.addEventListener("click", () =>{
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }));
})
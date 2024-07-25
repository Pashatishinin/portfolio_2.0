// typing effect
var typingEffect = new Typed(".type_effect",{
    strings : ["Designer","Python Developer","Frontend Developer"],
    loop : true,
    typeSpeed : 80,
    backSpeed : 80,
    backDelay : 1000
});




// project effect 
$('.wall').jaliswall({
    item : '.wall-item',
    columnClass : '.wall-column'
});



// scroll reveal
ScrollReveal({
    distance:"90px",
    duration:2000,
    delay:200,
    reset: true,
});

ScrollReveal().reveal('h1,.text-animate, h2,.hero p', { origin: 'top'});
ScrollReveal().reveal('.contact-form', { origin: 'left'});
ScrollReveal().reveal('.cta-box', { origin: 'bottom'});
ScrollReveal().reveal('.contact-detail', { origin: 'right'});
ScrollReveal().reveal('.wall-item,.about-wall-item', { origin: 'bottom', interval:300});






// active hamburger menu
let menuIcon = document.querySelector(".menu-icon");
let navlist = document.querySelector(".navlist");
menuIcon.addEventListener("click",()=>{
    menuIcon.classList.toggle("active");
    navlist.classList.toggle("active");
    document.body.classList.toggle("open");
});

// remove navbar
navlist.addEventListener("click",()=>{
    menuIcon.classList.remove("active");
    navlist.classList.remove("active");
    document.body.classList.remove("open");
})







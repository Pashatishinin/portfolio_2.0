// active hamburger menu
let menuIcon = document.querySelector(".menu-icon");
let navlist = document.querySelector(".nav-list-mobile");
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


// typing effect
var typingEffect = new Typed(".type_effect",{
    strings : ["Designer","Python Developer","Frontend Developer"],
    loop : true,
    typeSpeed : 80,
    backSpeed : 80,
    backDelay : 1000
});


// tweenmax

TweenMax.staggerFrom(".titles > div", 0.4, 
    {
    ease: Power3.easeInOut,
    opacity: "0"
}, 1);

TweenMax.staggerTo(".titles > div", 0.4, 
    {
    ease: Power3.easeInOut,
    delay: 0.6,
    opacity: "0"
}, 1);


TweenMax.staggerFrom("header", 9, 
    {
    y: "-1200",
    
    delay: 1.2,
    ease: Expo.easeInOut,
}, 0.6);

TweenMax.staggerFrom(".cta-box", 8, 
    {
    y: "-1600",
    delay: 1.2,
    ease: Expo.easeInOut,
}, 0.6);

TweenMax.staggerFrom(".hero-info h1", 10, 
    {
    y: "-1600",
    delay: 1.2,
    ease: Expo.easeInOut,
}, 0.6);

TweenMax.staggerFrom(".text-animate", 9, 
    {
    y: "-1600",
    delay: 1.2,
    ease: Expo.easeInOut,
}, 0.6);


TweenMax.staggerTo(".titles", 35, 
    {
    y: "-1600",
    ease: Power3.easeInOut,
    delay: 0.2,
}, 0.2);



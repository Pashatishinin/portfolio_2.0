// typing effect
var typingEffect = new Typed(".type_effect",{
    strings : ["Designer","Python Developer","Frontend Developer"],
    loop : true,
    typeSpeed : 80,
    backSpeed : 80,
    backDelay : 1000
});

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


// project effect 
$('.wall').jaliswall({
    item : '.wall-item',
    columnClass : '.wall-column'
});

$('.wall').jaliswall({
    item : '.wall-item',
    columnClass : '.wall-column'
});




// typing effect
var typingEffect = new Typed(".type_effect",{
    strings : ["Designer","Python Developer","Frontend Developer"],
    loop : true,
    typeSpeed : 80,
    backSpeed : 80,
    backDelay : 1000
});

// portfolio filter
var mixer = mixitup('.wall', {
    selectors: {
        target: '.wall-item'
    },
    animation: {
        duration: 800
    }
});

// scroll reveal
ScrollReveal({
    distance:"90px",
    duration:2000,
    delay:200,
    reset: true,
});

ScrollReveal().reveal('h1,.text-animate, h2', { origin: 'top'});
ScrollReveal().reveal('.buttons', { origin: 'left'});
ScrollReveal().reveal('.wall-item, .cta-box', { origin: 'bottom'});
     



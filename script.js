


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
}, 1.5);

TweenMax.staggerTo(".titles > div", 0.4, 
    {
    ease: Power3.easeInOut,
    delay: 0.6,
    opacity: "0"
}, 1.5);


TweenMax.staggerFrom("header", 12, 
    {
    y: "-1200",
    delay: 1.2,
    ease: Expo.easeInOut,
}, 0.6);

TweenMax.staggerFrom(".hero", 13, 
    {
    y: "-1600",
    delay: 1.2,
    ease: Expo.easeInOut,
}, 0.6);


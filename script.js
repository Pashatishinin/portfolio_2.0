$('.wall').jaliswall({
    item : '.wall-item',
    columnClass : '.wall-column'
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
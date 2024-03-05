new Glide('.international-community-trip-glide', {
    type: 'carousel',
    perView: 1,
    autoplay: 5000,
    hoverpause: true,
    animationDuration: 2000,
    animationTimingFunc: 'ease-in-out',

    pagination: {
        el: '.international-community-trip-glide__bullets',
        clickable: true
    }
}).mount();
// international community trips image banner carousel
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

//upcomming trips card carousel
new Glide('.upcomming-trips-glide', {
    type: 'carousel',
    perView: 3,
    hoverpause: true,
    animationDuration: 1000,
    animationTimingFunc: 'ease-in-out',
    breakpoints: {
        800: {
            perView: 1
        }
    },
}).mount();

//experience videos review
new Glide('.experience-videos-glide', {
    type: 'slide',
    perView: 1,
    animationTimingFunc: 'ease-out',
}).mount();

//international group departures slider
new Glide('.intl-grp-dep-glide', {
    type: 'carousel',
    perView: 3,
    hoverpause: true,
    animationDuration: 1000,
    animationTimingFunc: 'ease-in-out',
    breakpoints: {
        800: {
            perView: 1
        }
    },
}).mount();

//europe packages slider
new Glide('.europe-trip-glide', {
    type: 'carousel',
    perView: 3,
    hoverpause: true,
    animationDuration: 1000,
    animationTimingFunc: 'ease-in-out',
    breakpoints: {
        800: {
            perView: 1
        }
    },
}).mount();

// backpacking trips slider
new Glide('.backpacking-india-trip-glide', {
    type: 'carousel',
    perView: 3,
    hoverpause: true,
    animationDuration: 1000,
    animationTimingFunc: 'ease-in-out',
    breakpoints: {
        800: {
            perView: 1
        }
    },
}).mount();

// weekend trips slider
new Glide('.weeekend-trip-glide', {
    type: 'carousel',
    perView: 3,
    hoverpause: true,
    animationDuration: 1000,
    animationTimingFunc: 'ease-in-out',
    breakpoints: {
        800: {
            perView: 1
        }
    },
}).mount();

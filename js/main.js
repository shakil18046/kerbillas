$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 30,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
      nav: false,
    },
    992: {
      items: 2,
      nav: false,
    },
    1000: {
      items: 3,
      loop: true,
      nav: true,
    },
  },
});

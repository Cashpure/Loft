$(function () {

   $('.about__grid-item').on('click', function (e) {
      e.preventDefault()
   })
   $('.about__grid-item-1').hover(function (e) {
      e.preventDefault()
      $('.about__grid-description-content-1--active').slideToggle();
      $('.about__grid-item-1 img').toggleClass('active')
   })
   $('.about__grid-item-2').hover(function (e) {
      e.preventDefault()
      $('.about__grid-description-content-2--active').slideToggle();
      $('.about__grid-item-2 img').toggleClass('active')
   })
   $('.about__grid-item-3').hover(function (e) {
      e.preventDefault()
      $('.about__grid-description-content-3--active').slideToggle();
      $('.about__grid-item-3 img').toggleClass('active')
   })
   $('.about__grid-item-4').hover(function (e) {
      e.preventDefault()
      $('.about__grid-description-content-4--active').slideToggle();
      $('.about__grid-item-4 img').toggleClass('active')
   })

   $('.video__wrapper').hover(function (e) {
      e.preventDefault()
      $('.video__button svg').toggleClass('color');
      $('.video__wrapper').toggleClass('back');
   })

   $('.footer-nav__navigation-1').on('click', function (e) {
      e.preventDefault()
      $('.footer-nav__page-list').slideToggle();
   })
   $('.footer-nav__navigation-2').on('click', function (e) {
      e.preventDefault()
      $('.footer-nav__site-list').slideToggle();
   })

   Fancybox.bind("[data-fancybox]", {
      // Your custom options
   });

   $('.burger').on('click', function (e) {
      e.preventDefault()
      $('.header__nav').toggleClass('header__nav--open');
      $(this).toggleClass('burger--active')
   })
   setInterval(() => {
      if ($(window).scrollTop() > 0 && $('.header__nav').hasClass('header__nav--open') === false) {
         $('.burger').addClass('burger--follow')
      } else {
         $('.burger').removeClass('burger--follow')
      }
   }, 0)
   setInterval(() => {
      if ($(window).scrollTop() > 150) {
         $('.about__info-column img').addClass('about-img__active')
      }
   }, 0)
   setInterval(() => {
      if ($(window).scrollTop() > 150) {
         $('.about__info-column p').addClass('about-p__active')
      }
   }, 600)
   setInterval(() => {
      if ($(window).scrollTop() > 1480) {
         $('.cta__info-title').addClass('cta-title__active')
      }
   }, 0)
   // setInterval(() => {
   //    if ($(window).scrollTop() > 1480 ) {
   //       $('.cta__info-text').addClass('cta-text__active')
   //    }
   // }, 600)
   setInterval(() => {
      if ($('.cta__info-title').hasClass('cta-title__active')) {
         $('.cta__info-text').delay(600).addClass('cta-text__active')
      }
   }, 600)


      $(".header__nav-link").on("click", function (e) {
      var anchor = $(this);
      $('html, body').stop().animate({
         scrollTop: $(anchor.attr('href')).offset().top
      }, 777);
      e.preventDefault();
      return false;
   });
   $(".footer-nav__link").on("click", function (e) {
      var anchor = $(this);
      $('html, body').stop().animate({
         scrollTop: $(anchor.attr('href')).offset().top
      }, 777);
      e.preventDefault();
      return false;
   });
});


$('.header__nav-link').on('click', function () {
   $('.header__nav').toggleClass('header__nav--open');
   $('.burger').toggleClass('burger--active')
});



// initMap();

// async function initMap() {

//    await ymaps3.ready;

//    const { YMap, YMapDefaultSchemeLayer } = ymaps3;


//    const map = new YMap(

//       document.getElementById('map'),


//       {
//          location: {

//             center: [57.994164, 56.139333],


//             zoom: 10
//          }
//       }
//    );


//    map.addChild(new YMapDefaultSchemeLayer());
// }

// let map;

// async function initMap() {
//    const { Map } = await google.maps.importLibrary("maps");

//    map = new Map(document.getElementById("map"), {
//       center: { lat: -34.397, lng: 150.644 },
//       zoom: 15,
//    });
// }

// initMap();

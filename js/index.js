
$(document).ready(function () {

  // Load particlesJS
  particlesJS.load('particles-js', 'particles.json', function () {
    console.log('particles.json loaded');
  });

  // LOAD TYPED JS IN HERO SECTION
  var typed = new Typed('.typed', {
    strings: ["vegan.", "web developer.", "vizionar.", "visător", "multidisciplinar.",],
    typeSpeed: 70,
    loop: true,
    startDelay: 300,
    showCursor: false,
    contentType: null,
    backSpeed: 30,
  });

  // Scroll to About Page
  $('.js-scroll-to-about').click(function () {
    $('html, body').animate({
      scrollTop: $('.js-about').offset().top
    }, 800);
  });

  // Scroll to top
  $('.js-scroll-to-top').click(function () {
    $('html, body').animate({
      scrollTop: $('#top').offset().top
    }, 800);
  });

  // TILT JS | Projects Images ANIMATION ON HOVER
  $('.thumbnail').tilt({
    maxTilt: 2.5,
    glare: true,
    maxGlare: .2,
    reset: false
  });

  // Magnific Popup
  $(".video").magnificPopup({
    type: "iframe",
    iframe: {
      markup: '<div class="mfp-iframe-scaler">' +
        '<div class="mfp-close"></div>' +
        '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
        '</div>',

      patterns: {
        youtube: {
          index: 'youtube.com/',
          id: 'v=',

          src: 'https://www.youtube.com/embed/%id%?autoplay=1'
        },
      },
      srcAction: 'iframe_src',
    }
  });

  // Activate animations on scroll
  wow = new WOW({
    boxClass: 'wow',      // default
    animateClass: 'animate__animated', // default
    offset: 150,          // default
    mobile: true,       // default
    live: false,        // default
    resetAnimation: true,
  })

  wow.init();

});



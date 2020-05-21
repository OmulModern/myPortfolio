// LOAD PARTICLES
particlesJS.load('particles-js',
  'particles.json', function () {
    console.log('particles.json loaded');
});

// LOAD TYPED JS IN HERO SECTION
var typed = new Typed('.typed', {
  strings: ["web developer.", "multidisciplinar.", "vizionar.", "vegan."],
  typeSpeed: 70,
  loop: true,
  startDelay: 300,
  showCursor: false,
  contentType: null,
  backSpeed: 30,
});

$(document).ready(function () {
  // TILT JS | Projects Images ANIMATION ON HOVER
  $('.thumbnail').tilt({
    maxTilt: 2.5,
    glare: true,
    maxGlare: .2,
    reset: false
  })

  // Scroll to About Page
  $('.js-scroll-to-about').click(function () {
    $('html, body').animate({
      scrollTop: $('.js-about').offset().top
    }, 800);
  });
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



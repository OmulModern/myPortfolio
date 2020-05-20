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

// TILT JS CUSTIMIZATION ON HOVER
$(document).ready(function () {
  $('.thumbnail').tilt({
    maxTilt: 5,
    glare: true,
    maxGlare: .3,
    reset: false
  })
});



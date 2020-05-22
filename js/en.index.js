
// Magnific Popup
$(document).ready(function () {
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

  // LOAD TYPED JS IN HERO SECTION
  var typed = new Typed('.typed', {
    strings: ["vegan.", "web developer.", "dreamer.", "multidisciplinary.", "vizionary."],
    typeSpeed: 70,
    loop: true,
    startDelay: 300,
    showCursor: false,
    contentType: null,
    backSpeed: 30,
  });

  // Load particlesJS
  particlesJS.load('particles-js', 'particles.json', function () {
      console.log('particles.json loaded');
  });
});


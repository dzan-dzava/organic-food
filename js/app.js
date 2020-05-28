let menuIsOpen = false;
let isScrolling = false;

// load particles
particlesJS.load('particles', 'data/particles.json');

// minimize header on scroll
$(window).on('scroll', function() {  
  if($(this).scrollTop() > 0) {
      $('.header').addClass('minimized');
  } else {
      $('.header').removeClass('minimized');
  }
});

// menu toggle
$('#menuToggler').on('click', function() {
  if (menuIsOpen) {
    $('#headerNav').height(0);
    $('#menuOpenIcon').show();
    $('#menuCloseIcon').hide();
  } else {
    $('#headerNav').height($('#headerNav')[0].scrollHeight)
    $('#menuOpenIcon').hide();
    $('#menuCloseIcon').show();
  }

  menuIsOpen = !menuIsOpen;
});

$('#headerNav a').on('click', function(e) {
  e.preventDefault();

  if (isScrolling) {
    return;
  }

  if (menuIsOpen) {
    menuIsOpen = false;
    $('#headerNav').height(0);
    $('#menuOpenIcon').show();
    $('#menuCloseIcon').hide();
  }

  isScrolling = true;
  
  $("html, body").animate({
    scrollTop: $(`#${e.target.getAttribute('data-id')}`).offset().top
  }, 1000, function() {
    isScrolling = false;
  });
})

// photo popup
$('#galleryGrid').magnificPopup({
  delegate: 'a',
  type: 'image',
  gallery: {
    enabled: true
  }
});

const owl = $("#partnersCarousel").owlCarousel({
  loop: true,
  dots: false,
  autoplay: true,
  autoplayTimeout: 4000,
  nav: true,
  mouseDrag: false,
  touchDrag: false,
  navText: [
    '<img src="img/prev.svg">',
    '<img src="img/next.svg">'
  ],
  margin: 30,
  responsive: {
    0: {
      items: 2
    },
    768: {
      items: 3
    },
    1024: {
      items: 4
    },
    1200: {
      items: 5
    }
  }
});

// reset autoplay time after user action
owl.on('changed.owl.carousel', function() {
  owl.trigger('stop.owl.autoplay');
  owl.trigger('play.owl.autoplay');
});
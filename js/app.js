let menuIsOpen = false;

// load particles
particlesJS.load('particles', 'data/particles.json');

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

// photo popup
$('#galleryGrid').magnificPopup({
  delegate: 'a',
  type: 'image',
  gallery: {
    enabled: true
  }
});

$("#partnersCarousel").owlCarousel({
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
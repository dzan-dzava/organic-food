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
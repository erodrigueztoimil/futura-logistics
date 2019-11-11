// parallax bg image
$(window).scroll(function() {
  parallax();
})

function parallax() {

  var wScroll = $(window).scrollTop()


  $('.parallax--bg').css('background-position', 'left ' + (wScroll*0.5)+'px');


  $('.parallax--box').css('top', -5 + (wScroll*.002)+'em');
}


// navigation background change on scroll
jQuery(
  function() {
    var nav = $('nav');
    var position = 0;

    $(document).scroll(function() {
      position = $(this).scrollTop();

      if (position > 50) {
        nav.addClass('scrolled');
      }
      if (position < 50) {
        nav.removeClass('scrolled');
      }
    });
  }
)


// menu links active handler
jQuery(
  function() {
    var link = $('nav a');

    $(document).scroll(function() {
      var position = $(this).scrollTop();

      link.each(function() {
        var offset = $(this.hash).offset().top - 30;

        if ( offset <= position ) {
          $(this).parent().addClass('active');
          $(this).parent().siblings().removeClass('active');
        }
      })
    })
  }
);


// menu button animaiton handler
jQuery(
  function() {
    var menuItems = $('.menu-items');
    var menuButton = $('.menu-button');
    var menuLink = $('nav a');

    menuButton.click(() => {
      $('html').toggleClass('overflow');
      menuButton.toggleClass('show');
      menuItems.toggleClass('show');
    });

    menuLink.click(() => {
      $('html').removeClass('overflow');
      menuButton.removeClass('show');
      menuItems.removeClass('show');
    });
  }
)


// Initialize and add the map
function initMap() {
  // The location of Uluru
  var uluru = {lat: 25.8628727, lng: -80.3495185};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 16, center: uluru});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: uluru, map: map});
}

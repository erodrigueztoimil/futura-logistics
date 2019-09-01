console.log('Website made by Ernesto Rodriguez --- GitHub: erodrigueztoimil, Email: erodrigueztoimil@gmail.com');


// google maps
function initMap() {
  // The location of Uluru
  var uluru = {lat: 25.8628727, lng: -80.3495185};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 16, center: uluru});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: uluru, map: map});
}


// scroll animation with active handler
$(document).ready(function() {
  var scrollLink = $('.scroll');

  //smooth scrolling
  scrollLink.click(function(e) {
    e.preventDefault();
    $('body, html').animate({
      scrollTop: $(this.hash).offset().top
    }, 1500)
  });

  // active link switching
  $(window).scroll(function() {
    var scrollbarLocation = $(this).scrollTop();

    scrollLink.each(function() {
      var sectionOffset = $(this.hash).offset().top - 20

      if ( sectionOffset <= scrollbarLocation ) {
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
      }
    })
  })
})



// change navigation background on scroll
$(document).ready(function() {
  $(window).scroll(function() {
    var nav = $('.navigation');

    nav.toggleClass('scrolled', $(this).scrollTop() > nav.height());
  });
})



$('#home').scroll(function() {
    var x = $(this).scrollTop();
    $(this).css('background-position', '0% ' + parseInt(-x / 10) + 'px');
});

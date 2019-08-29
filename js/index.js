console.log('Website made by Ernesto Rodriguez --- GitHub: erodrigueztoimil, Email: erodrigueztoimil@gmail.com');


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


$(document).ready(function() {
  var scrollLink = $('.scroll');

  //smooth scrolling
  scrollLink.click(function(e) {
    e.preventDefault();
    $('body, html').animate({
      scrollTop: $(this.hash).offset().top
    }, 1000)
  })
})

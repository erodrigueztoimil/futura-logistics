$(document).ready(function () {
  // Add smooth scrolling to all links
  $("a").on("click", function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    } // End if
  });
});

// parallax bg image
$(window).scroll(function () {
  parallax();
});

function parallax() {
  var wScroll = $(window).scrollTop();

  $(".parallax--bg").css("background-position", "left " + wScroll * 0.5 + "px");

  $(".parallax--box").css("top", -5 + wScroll * 0.002 + "em");
}

// navigation background change on scroll
jQuery(function () {
  var nav = $("nav");
  var position = 0;

  $(document).scroll(function () {
    position = $(this).scrollTop();

    if (position > 50) {
      nav.addClass("scrolled");
    }
    if (position < 50) {
      nav.removeClass("scrolled");
    }
  });
});

// menu links active handler
jQuery(function () {
  var link = $("nav a");

  $(document).scroll(function () {
    var position = $(this).scrollTop();

    link.each(function () {
      var offset = $(this.hash).offset().top - 200;

      if (offset <= position) {
        $(this).parent().addClass("active");
        $(this).parent().siblings().removeClass("active");
      }
    });
  });
});

// menu button animaiton handler
jQuery(function () {
  var menuItems = $(".menu-items");
  var menuButton = $(".menu-button");
  var menuLink = $("nav a");

  menuButton.click(() => {
    $("html").toggleClass("overflow");
    menuButton.toggleClass("show");
    menuItems.toggleClass("show");
  });

  menuLink.click(() => {
    $("html").removeClass("overflow");
    menuButton.removeClass("show");
    menuItems.removeClass("show");
  });
});

$(document).ready(function () {
  let year = new Date().getFullYear();
  $("#year").text(year);
});

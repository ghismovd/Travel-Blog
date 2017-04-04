$(document).ready(function() {
  
  $(window).scroll(function () {
      //if you hard code, then use console
      //.log to determine when you want the 
      //nav bar to stick.  
      console.log($(window).scrollTop())
    if ($(window).scrollTop() > 80) {
      $('.navbar').addClass('navbar-fixed-top');
    }
    if ($(window).scrollTop() < 81) {
      $('.navbar').removeClass('navbar-fixed-top');
    }
  });
});



var step = 25;
var scrolling = false;

// Wire up events for the 'scrollUp' link:
$(".btn-nav-mp-top").bind("click", function(event) {
    event.preventDefault();
    // Animates the scrollTop property by the specified
    // step.
    $(".list-popular").animate({
        scrollTop: "-=" + step + "px"
    });
}).bind("mouseover", function(event) {
    scrolling = true;
    scrollContent("up");
}).bind("mouseout", function(event) {
    scrolling = false;
});


$(".btn-nav-mp-bottom").bind("click", function(event) {
    event.preventDefault();
    $(".list-popular").animate({
        scrollTop: "+=" + step + "px"
    });
}).bind("mouseover", function(event) {
    scrolling = true;
    scrollContent("down");
}).bind("mouseout", function(event) {
    scrolling = false;
});

function scrollContent(direction) {
    var amount = (direction === "up" ? "-=1px" : "+=1px");
    $(".list-popular").animate({
        scrollTop: amount
    }, 1, function() {
        if (scrolling) {
            scrollContent(direction);
        }
    });
}

 Carousel Auto-Cycle
$(document).ready(function() {

    $('.carousel').carousel({
     interval: 6000
    })
 });

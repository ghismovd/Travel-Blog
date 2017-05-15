
var overlay = document.getElementById("overlay");

window.addEventListener('load', function(){
  overlay.style.display = 'none';
})


jQuery(document).ready(function($) {

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


$(window).load(function(){
    $('#preloader').fadeOut('slow',function(){$(this).remove();});
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
 
$(document).ready(function() {

    $('.carousel').carousel({
     interval: 30000
    })
 });


//daca are id="category-asia"
//display a.categori 
//add class a.categori asia
//else id= "category-europ"
// display a.categori
// add class to a.categori . europa
//else id= "category-africa"
// display a.categori
// add class to a.categori . africa

if ($('p.asia').attr("id") == "europa") {
         $('a.categori').addClass('europe');
  }
 if ($('p.asia').attr("id") == "europa") {
         $('a.categori').addClass('europe');
  }
  if ($('p.asia').attr("id") == "europa") {
         $('a.categori').addClass('europe');
  }


'use strict';

$(function() {

    //settings for slider
    var width = 720;
    var animationSpeed = 1000;
    var pause = 3000;
    var currentSlide = 1;

    //cache DOM elements
    var $slider = $('#slider');
    var $slideContainer = $('.slides', $slider);
    var $slides = $('.slide', $slider);

    var interval;

    function startSlider() {
        interval = setInterval(function() {
            $slideContainer.animate({'margin-left': '-='+width}, animationSpeed, function() {
                if (++currentSlide === $slides.length) {
                    currentSlide = 1;
                    $slideContainer.css('margin-left', 0);
                }
            });
        }, pause);
    }
    function pauseSlider() {
        clearInterval(interval);
    }

    $slideContainer
        .on('mouseenter', pauseSlider)
        .on('mouseleave', startSlider);

    startSlider();


});

'use strict';

$(function() {

    //settings for slider
    var width = 720;
    var animationSpeed = 1000;
    var pause = 3000;
    var currentSlide = 1;

    //cache DOM elements
    var $slider = $('#slider');
    var $slideContainer = $('.slides', $slider);
    var $slides = $('.slide', $slider);

    var interval;

    function startSlider() {
        interval = setInterval(function() {
            $slideContainer.animate({'margin-left': '-='+width}, animationSpeed, function() {
                if (++currentSlide === $slides.length) {
                    currentSlide = 1;
                    $slideContainer.css('margin-left', 0);
                }
            });
        }, pause);
    }
    function pauseSlider() {
        clearInterval(interval);
    }

    $slideContainer
        .on('mouseenter', pauseSlider)
        .on('mouseleave', startSlider);

    startSlider();


});


});

//first 3 sa aiba active
//first remove active
//pune la urmatoarea 
//daca ajunge la +lenght du te iar la primu

//daca primele 3 active dai al patru lea active si remove la primu fa asta pana ajunge la lenght

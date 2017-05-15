   $(document).ready(function() {
     var owl = $("#slider-carousel");
     owl.owlCarousel({
       items: 4,
       itemsDesktop: [1000, 4],
       itemsDesktopSmall: [900, 2],
       itemsTablet: [600, 1],
       itemsMobile: false,
       pagination: false
     });
     $(".next").click(function() {
       owl.trigger('owl.next');
     })
     $(".prev").click(function() {
       owl.trigger('owl.prev');
     })
  

     
   
$(window).scroll(function(){

 var pContainerHeight = $('.big').height();

  var wScroll = $(this).scrollTop();

  if (wScroll <= pContainerHeight) {

    $('.logo').css({
      'transform' : 'translate(0px, '+ wScroll /4 +'%)'
    });

  }
});





   });


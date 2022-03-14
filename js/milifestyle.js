    $(document).ready(function(){ 
        $(window).scroll(function(){
            if ($(this).scrollTop() > 100) {
                $('.scrollup').fadeIn();
            } else {
                $('.scrollup').fadeOut();
            }
        }); 
        $('.scrollup').click(function(){
            $("html, body").animate({ scrollTop: 0 }, 700);
            return false;
        });
    });
	  $('.dropdown').hover(function() {
  $(this).find('.dropdown-menu').first().stop(true, true).delay(250).slideDown();
}, function() {
  $(this).find('.dropdown-menu').first().stop(true, true).delay(100).slideUp()
});

  $(window).scroll(function(){
    if ($(window).scrollTop() >= 60) {
       $('.navbar').addClass('fixed-header');
    }
    else {
       $('.navbar').removeClass('fixed-header');
    }
});

$(document).ready(function() {
  //carousel options
  $('#quote-carousel').carousel({
    pause: true, interval: 10000,
  });
});


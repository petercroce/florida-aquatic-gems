function initScrollTo()
{
  $('a[href^="#"]').on('click', function(event) {
      var target = $(this.getAttribute('href'));
      if( target.length ) {
          event.preventDefault();
          $('html, body').stop().animate({
              scrollTop: target.offset().top
          }, 1000);
      }
  });

  jQuery(window).on('scroll', function() {
    if (jQuery(this).scrollTop() > 200) {
      jQuery('#toTop').fadeIn(400);
    } else {
      jQuery('#toTop').fadeOut(400);
    }
  });
}

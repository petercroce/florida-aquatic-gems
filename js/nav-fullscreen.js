function openNav()
{
  // Add the classes to open nav and change hamburger to an 'x'
  jQuery('body').toggleClass('nav-open').find('.hamburger').toggleClass('is-active');
}

function initNavFullscreen()
{
  jQuery('.hamburger').click(openNav);
  jQuery('.home-page #header .wsite-button').click(openNav);
  jQuery('#footer .wsite-button').click(openNav);
}

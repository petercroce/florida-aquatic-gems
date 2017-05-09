function initFullscreenMenu()
{
  // function menuResize() {
  //   var menu = jQuery(".wsite-menu-default");
  //   var menuHeight = menu.height();
  //   var menuItem = jQuery(".wsite-menu-item-wrap");
  //   var documentHeight = jQuery(document).innerHeight();
  //   var documentWidth = jQuery(document).innerWidth();
  //   var tabletWidth = 992;
  //   if ((menuHeight > (documentHeight)/2) && (documentWidth > tabletWidth)) {
  //     menu.css("font-size", "1.2rem");
  //     menuItem.css("width", "25%");
  //   }
  // }
  // menuResize();
  // jQuery(window).resize(function(){
  //   menuResize();
  // })

  jQuery('.hamburger').on('click', function(){
    // Prevent jump
    if ( jQuery(window).height() < jQuery('html').height() ) {
      jQuery('html').addClass('scrollbar');
    }
    // Add the classes to open nav and change hamburger to an 'x'
    jQuery('body').toggleClass('nav-open')
      .find('.hamburger').toggleClass('is-active');
  });
  jQuery('.home-page .wsite-button').on('click', function(){
    // Prevent jump
    if ( jQuery(window).height() < jQuery('html').height() ) {
      jQuery('html').addClass('scrollbar');
    }
    // Add the classes to open nav and change hamburger to an 'x'
    jQuery('body').toggleClass('nav-open')
      .find('.hamburger').toggleClass('is-active');
  });
}


// while (menuHeight > (windowHeight)/2) {
//   fontSize = fontSize - 0.1;
// }
// for (fontSize = 2.3; menuHeight > windowHeight/2; fontSize - 0.1) {
//
// }

// First crack at doing what sidebar-menu.js and nav.js do
// but in vanilla JS

// First we detect the click event
// document.getElementById('.hamburger').addEventListener('click', function () {
//
//   // We use an if statement to check if the .hamburger has the .is-active class
//   if (this.classList.contains('is-active')) {
//     // it does, so let's remove it
//    this.classList.remove('is-active');
//   } else {
//     // it doesn't, so let's add it
//     this.classList.add('good');
//   }
//
//   // We use an if statement to check if the body has the .nav-open class
//   if (body.classList.contains('nav-open')) {
//     // it does, so let's remove it
//     body.classList.remove('nav-open');
//   } else {
//     // it doesn't, so let's add it
//     body.classList.add('nav-open');
//   }
//
//   // /* Open */
//   // function openNav() {
//   //     document.getElementById('.nav-outer-wrap').style.opacity = '1';
//   // }
//   //
//   // /* Close */
//   // function closeNav() {
//   //     document.getElementById('.nav-outer-wrap').style.opacity = '0';
//   // }
//
// });

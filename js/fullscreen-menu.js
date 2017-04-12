function initFullscreenMenu()
{
  jQuery('.hamburger').on('click', function(){
    // Fix body where it is
    jQuery('body').css({
                  'top': -(document.documentElement.scrollTop) + 'px',
                  'position': 'fixed'})
                  .addClass('no-scroll');
    // Release body if the nav was open
    jQuery('.nav-open').css({
                       'top': -(document.documentElement.scrollTop) + 'px',
                       'position': 'static'})
                       .removeClass('no-scroll');
    // Add the classes to open nav and change hamburger to an 'x'
    jQuery('body').toggleClass('nav-open')
                  .find('.hamburger').toggleClass('is-active');
  });
}


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

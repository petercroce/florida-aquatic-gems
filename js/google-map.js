function initGoogleMap()
{
  infoWrittenHeight = jQuery('#expanded-info__written').outerHeight();
  infoMap = jQuery('#expanded-info__map');
  viewportHeight = jQuery(window).height();
  viewportWidth = jQuery(window).width();
  smartphoneWidth = 421;

  // If the viewport is not a smartphone,
  // size the map according to the size of the area to its left
  if(viewportWidth >= smartphoneWidth) {
    infoWrittenHeight = jQuery('#expanded-info__written').outerHeight();
    jQuery(infoMap).css("height", infoWrittenHeight +"px");
  } else {
    jQuery(infoMap).css("height", viewportHeight +"px");
  }

  // Add the '.clicked' class if map is clicked, remove it if mouse leaves
  // Nice solution from: https://codepen.io/status201/pen/wKowKz
  jQuery('.map-container')
    .click(function(){
      jQuery(this).find('iframe').addClass('clicked')})
    .mouseleave(function(){
      jQuery(this).find('iframe').removeClass('clicked')});

  jQuery(window).resize(function()
  {
    // If the viewport is not a smartphone, resize the map according to the
    // size of the area to its left when the window is resized.
    if(viewportWidth >= smartphoneWidth) {
      infoWrittenHeight = jQuery('#expanded-info__written').outerHeight();
      jQuery(infoMap).css("height", infoWrittenHeight +"px");
    } else {
      jQuery(infoMap).css("height", viewportHeight +"px");
    }

  });

}

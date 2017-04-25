function initGoogleMap()
{
  infoWrittenHeight = jQuery('#expanded-info__written').outerHeight();
  infoMap = jQuery('#expanded-info__map');
  viewportWidth = jQuery(window).width();

  // Size the map according to the size of the area to its left
  jQuery(infoMap).css("height", infoWrittenHeight +"px");

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
    if(viewportWidth >= 421) {
      infoWrittenHeight = jQuery('#expanded-info__written').outerHeight();
      jQuery(infoMap).css("height", infoWrittenHeight +"px");
    }

  });

}

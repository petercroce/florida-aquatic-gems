jQuery(document).ready(function() {
  jQuery(".mobile-controls").on("click", function(){
    jQuery("#nav").toggleClass("active");
  });
});

jQuery(window).on("load", function(){
    var submenus = jQuery("#wsite-menus ul");
    var main_menu_li = jQuery(".wsite-menu-default li");

    jQuery.each(submenus, function(idx, menu) {
        var showmore_html = "<span class='submenu__show-more'></span>";
        var mySubmenu = jQuery(menu).clone();

        jQuery(main_menu_li[idx]).append(showmore_html);
        jQuery(main_menu_li[idx]).append(mySubmenu);
    });

    jQuery(".wsite-menu-default .submenu__show-more").on("click", function(e) {
      jQuery(this).parent("li")
                  .toggleClass("submenu--open")
                  .siblings("li")
                  .removeClass("submenu--open");
    });
});

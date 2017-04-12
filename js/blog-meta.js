
//Select button and deselect siblings
function buttonToggle(el){
  el.siblings().removeClass("selected");
  el.toggleClass("selected");
}

//Show selected content and hide other content
function contentToggle(el){
  console.log("Toggle Me:", el);
  var height = el.children().height();
  console.log(height);
  if(el.siblings().hasClass("visible")){
    el.siblings().removeClass("visible");
  }

  el.toggleClass("visible");
  console.log(el);
  if(el.hasClass("visible")){
    jQuery(".blog-meta__content").css({
      "max-height": height + "px",
      "height": height + "px",
      "padding-top": "60px",
      "padding-bottom": "60px"
    });
  }
}

//Open or close meta content as necessary
function accToggle(){
  if(jQuery(".blog-meta__archives, .blog-meta__categories, .blog-meta__search").hasClass("visible")){
    jQuery(".blog-meta").addClass("blog-meta--open");
  }else{
    jQuery(".blog-meta").removeClass("blog-meta--open");
    jQuery(".blog-meta__content").css({
      "max-height": "0",
      "height": "0",
      "padding-top": "0",
      "padding-bottom": "0"
    });
  }
}

function initBlogMeta()
{
  if(jQuery(".blog-meta").length > 0) {
    jQuery("button.categories").on("click", function(){
      if(!jQuery(this).hasClass("selected")){
        buttonToggle(jQuery(this));
        contentToggle(jQuery(".blog-meta__categories"));
        accToggle();
      }
    });

    jQuery("button.archives").on("click", function(){
      if(!jQuery(this).hasClass("selected")){
        buttonToggle(jQuery(this));
        contentToggle(jQuery(".blog-meta__archives"));
        accToggle();
      }
    });

    jQuery("button.search").on("click", function(){
      if(!jQuery(this).hasClass("selected")){
        buttonToggle(jQuery(this));
        contentToggle(jQuery(".blog-meta__search"));
        accToggle();
      }
    });

    jQuery(".blog-meta__categories").addClass("visible");
    var height = jQuery(".blog-meta__categories").children().height();
    jQuery(".blog-meta__content").css({
      "max-height": height + "px",
      "height": height + "px",
      "padding-top": "60px",
      "padding-bottom": "60px"
    });
  }
}

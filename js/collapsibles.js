
function triggerCollapsible(clicked_obj) {
    var jquery_object = jQuery(clicked_obj);

    // search for collapsible divs in both children and siblings
    var collapsible_elems_kids = jquery_object.children().filter(function () {return $(this).hasClass("collapsible");})
    var collapsible_elems_sibs = jquery_object.siblings().filter(function () {return $(this).hasClass("collapsible");})
    var collapsible_elems = jQuery.merge(collapsible_elems_kids, collapsible_elems_sibs);
    var was_closed = collapsible_elems.is(':hidden'); // extract if it was closed before or not
    
    // collapse the element
    collapsible_elems.slideToggle({
        duration: DROPDOWN_SPEED_MS
    });

    // give fade arrows (if there are any) "active" status.
    // var arrows = jquery_object.children().filter(function () {return $(this).hasClass("fade-arrow");});
    var arrows_kids = jquery_object.children().find("i").filter(function () {return $(this).hasClass("right-hat")});
    var arrows_sibs = jquery_object.siblings().find("i").filter(function () {return $(this).hasClass("right-hat")});
    var arrows = jQuery.merge(arrows_kids, arrows_sibs);
    if (arrows.length > 0)
        if (was_closed)
            arrows.addClass("right-hat-active");
        else
            arrows.removeClass("right-hat-active");
    
}
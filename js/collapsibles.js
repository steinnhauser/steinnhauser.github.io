
function triggerCollapsible(clicked_obj) {
    var jquery_object = jQuery(clicked_obj);
    var collapsible_elems = jquery_object.children().filter(function () {return $(this).hasClass("collapsible");})
    var was_closed = collapsible_elems.is(':hidden'); // extract if it was closed before or not
    
    // collapse the element
    collapsible_elems.slideToggle({
        duration: DROPDOWN_SPEED_MS
    });

    // give fade arrows (if there are any) "active" status.
    // var arrows = jquery_object.children().filter(function () {return $(this).hasClass("fade-arrow");});
    var arrows = jquery_object.children().find("i").filter(function () {return $(this).hasClass("down-hat")});
    if (arrows.length > 0)
        if (was_closed)
            arrows.addClass("down-hat-active");
        else
            arrows.removeClass("down-hat-active");
    
    
}
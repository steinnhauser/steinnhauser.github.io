
// Close the dropdown menu if the user clicks outside of it
$('body').click(function(e) {
    var target = $(e.target);
    // Check if item is not either topnav button or itself. Then check if visible.
    if (!(target.hasClass("dropdown-container") || target.hasClass("topnav-dropdown"))){
        if (!$('.dropdown-container').children().is(':hidden')){
            triggerDropdown();
        }
    }
});

$('a.link-item').attr('target', '_blank'); // Add target=_blank to all a.link-items. Opens popup
$('a').click(function(e) {
    // When clicking anchor tags, avoid click propagating upwards in DOM.
    e.stopPropagation();
});




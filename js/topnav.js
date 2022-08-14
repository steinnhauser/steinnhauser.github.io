const DROPDOWN_SPEED_MS=700;

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function triggerDropdown() {
  $("#dropdown-menu").children().slideToggle({
      duration:DROPDOWN_SPEED_MS,
      start: function () {$(this).css({display: "block"})}
    }
  )
}

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

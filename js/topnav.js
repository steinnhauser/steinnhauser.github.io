// load topnav HTML content. Places in (div#topnav)
$(function(){$("#topnav").load("common/topnav.html");});

const DROPDOWN_SPEED_MS=700;

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function triggerDropdown() {
  $("#dropdown-menu").children().slideToggle({
      duration: DROPDOWN_SPEED_MS,
      start: function () {$(this).css({display: "block"})}
    }
  )
}

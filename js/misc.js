/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function triggerDropdown() {
  document.getElementById("dropdown-menu").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  var toggleTarget = '.triple-choice-bar'; //'.dropbtn';
  if (!event.target.matches(toggleTarget)) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

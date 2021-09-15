/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function triggerDropdown() {
  console.log('Triggering dropdown...');
  var elm = document.getElementById("dropdown-menu");
  console.log(elm);
  elm.classList.toggle("show");

  // if (elm.classList.contains('show')) {
  //   elm.classList.remove('show');
  // } else {
  //   elm.classList.toggle("show");
  // }
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {

  console.log(event.target);

  var toggleTarget = '.triple-choice-bar';
  var targetMatches = event.target.matches(toggleTarget);

  // check for the three additional divs hidden in the button
  var i;
  for (i = 1; i < 4; i++) {
    var additionalDiv = `${toggleTarget}-${i}`;
    var matchAdditionalDivs = event.target.matches(additionalDiv);
    targetMatches = (targetMatches || matchAdditionalDivs);
  }

  // if the click is outside of these regions, close the dropdown content
  if (!targetMatches) {
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

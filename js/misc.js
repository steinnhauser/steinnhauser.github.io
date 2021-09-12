function triggerDropdown() {
  // Show the dropdown menu or hide it when clicked.
  const el = document.getElementById("dropdown-menu");
  console.log(el.style.display);
  if (el.style.display === "none") {
    el.style.display = "block"; //"flex";
  } else {
    // hide the window again
    el.style.display = "none";
  }
}




/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
// function myFunction() {
//   document.getElementById("myDropdown").classList.toggle("show");
// }
//
// // Close the dropdown menu if the user clicks outside of it
// window.onclick = function(event) {
//   if (!event.target.matches('.dropbtn')) {
//     var dropdowns = document.getElementsByClassName("dropdown-content");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('show')) {
//         openDropdown.classList.remove('show');
//       }
//     }
//   }
// }

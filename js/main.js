var topnavDropdownIsOpen = false;

// background magic nr
var BACKGROUND_COLOR_OPACITY = 0.4;

// these are already defined in base.css, but opacity can be changed here.
document.documentElement.style.setProperty('--cream-color', '#F6F6F8');
document.documentElement.style.setProperty('--main-bkg-repeat-1', `rgba(255, 200, 200, ${BACKGROUND_COLOR_OPACITY})`);
document.documentElement.style.setProperty('--main-bkg-repeat-2', `rgba(200, 255, 200, ${BACKGROUND_COLOR_OPACITY})`);
document.documentElement.style.setProperty('--main-bkg-repeat-3', `rgba(200, 200, 255, ${BACKGROUND_COLOR_OPACITY})`);

// Close the dropdown menu if the user clicks outside of it
$('body').click(function(e) {
    var target = $(e.target);

    // if there is a popup video in the current webpage
    try{ 
        // check if videopopup is opened. 
        if (video_modem_is_open && target.is("#opct")) {
            closeVideoModem();
            video_modem_is_open = false;
        }
    }
    catch(e) {
        if(e.name == "ReferenceError") {
            // video modem is not included in this page. Catch this error to avoid console log cluter
        }
    }

    // Check if item is not either topnav button or itself. Then check if visible.
    if (!(target.hasClass("dropdown-container") || target.hasClass("topnav-dropdown"))){
        if (!$('.dropdown-container').children().is(':hidden') && topnavDropdownIsOpen){
            triggerDropdown();
            topnavDropdownIsOpen = false;
        }
    }

    
});

$('a.link-item').attr('target', '_blank'); // Add target=_blank to all a.link-items. Opens popup
$('a').click(function(e) {
    // When clicking anchor tags, avoid click propagating upwards in DOM.
    e.stopPropagation();
});

function verifyURL(url) {

    // have parameter which indicates if it's a local url or new
    var isLocalUrl = false
    try { url = new URL(url); } 
    catch (_) { isLocalUrl = true; }

    if (isLocalUrl && isLocalMachine) {
        url += ".html"; // this extension is needed in local mode.
        url = window.location.origin + "/" + url;
    }
    return url;

}




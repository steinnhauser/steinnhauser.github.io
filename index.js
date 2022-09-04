/* Script to add base webpage imports to headers. 
Add new code which is loaded to all pages into <srcs> array. 
*/

// Configure root to be current working dir if not set otherwise
var __ROOT_DIR__ = __ROOT_DIR__ || '.';

// debug mode
var debug = false;
if (window.location.origin == "http://0.0.0.0:8000") { debug = true };

// animation between items:
// https://stackoverflow.com/questions/5841424/smooth-transition-between-html-pages
// https://stackoverflow.com/questions/5397260/animates-callback-function-complete-executed-at-start
// https://stackoverflow.com/questions/1652576/how-do-you-fadein-and-animate-at-the-same-time
// https://stackoverflow.com/questions/9229921/animating-marginleft-with-jquery

var FADE_BETWEEN_HTML_SPEED = 500;
var full_body = $('html, body');

full_body.hide();

$(window).on('pageshow', function () {
    full_body.show();
    full_body.css({ opacity: 0, marginLeft: '+=10px' })
    full_body.animate(
        { opacity: 1, marginLeft: '-=10px' },
        {
            complete: function () {
                // Set a listener function for all HREFs. On HREF make sure to fade body out.
                $('a[href], button[href]').click(function (event) {

                    // Avoid fade-out when the target is a blank (opens new page)
                    if ($(this).attr('target') === "_blank") return;

                    var url = $(this).attr('href');
                    if (url.indexOf('#') == 0 || url.indexOf('javascript:') == 0) {
                        redirectURL = $(this).data('url');
                        if (typeof redirectURL === "undefined") {
                            return;
                        } else {
                            url = verifyURL(redirectURL);
                        }
                    }
                    event.preventDefault();

                    console.log(url);
                    // Animate the fade-out.
                    full_body.animate({ opacity: 0, marginLeft: '-=10px' },
                        FADE_BETWEEN_HTML_SPEED, function () {
                            // on-end of opacity animation, fade out very fast and then change url location.
                            full_body.fadeOut(100, function () { window.location = url; })
                        }
                    );
                });
            }
        }
    );
});

const JSdir = "./js";
const JSsrcs = [
    // add all base scripts for import here.
    "collapsibles.js",
    "text_imports.js",
    "main.js",
];

function pathJoin(parts, sep){
    // function which emulates python's os.path.join(). Sep default '/'
    var separator = sep || '/';
    var replace   = new RegExp(separator+'{1,}', 'g');
    return parts.join(separator).replace(replace, separator);
}

// add all script imports to document header with defer attibute
for (var src of JSsrcs) {
    let scriptEle = document.createElement("script");
    scriptEle.setAttribute("src", pathJoin([__ROOT_DIR__, JSdir, src]));
    scriptEle.setAttribute("async", "false");
    scriptEle.setAttribute("defer", true);
    document.head.appendChild(scriptEle);
}

// add import of CSS master sheet. One stylesheet to import them all.
let cssEle = document.createElement("link");
cssEle.setAttribute("href", pathJoin([__ROOT_DIR__, "css", "master.css"]));
cssEle.setAttribute("rel", "stylesheet");
document.head.appendChild(cssEle);

if (debug) {
    // debug CSS file
    let cssEle = document.createElement("link");
    cssEle.setAttribute("href", pathJoin([__ROOT_DIR__, "css", "debug.css"]));
    cssEle.setAttribute("rel", "stylesheet");
    document.head.appendChild(cssEle);
}

// add favicon
let faviconEle = document.createElement("link");
faviconEle.setAttribute("href", pathJoin([__ROOT_DIR__, "images", "self", "cool_s.png"]));
faviconEle.setAttribute("type", "image/png");
faviconEle.setAttribute("rel", "icon");
document.head.appendChild(faviconEle);

// load topnav HTML content. Places in (div#topnav)
const DROPDOWN_SPEED_MS = 700;
$(function () { $("#topnav").load(pathJoin([__ROOT_DIR__, "common", "topnav.html"])); });

// When the user clicks on the button, toggle between hiding and showing the dropdown content
function triggerDropdown() {
    $("#dropdown-menu").children().slideToggle({
        duration: DROPDOWN_SPEED_MS,
        start: function () { $(this).css({ display: "block" }) }
    })
}

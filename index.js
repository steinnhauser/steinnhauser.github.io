/* Script to add base webpage imports to headers. 
Add new code which is loaded to all pages into <srcs> array. 
*/

// animation between items:
// https://stackoverflow.com/questions/5841424/smooth-transition-between-html-pages
// https://stackoverflow.com/questions/5397260/animates-callback-function-complete-executed-at-start
// https://stackoverflow.com/questions/1652576/how-do-you-fadein-and-animate-at-the-same-time
// https://stackoverflow.com/questions/9229921/animating-marginleft-with-jquery

var FADE_BETWEEN_HTML_SPEED = 500;
var full_body = $('html, body');

full_body.hide();

$(document).ready(function() { 
    full_body.show();
    full_body.css({opacity: 0, marginLeft: '+=10px'})
    full_body.animate(
        { opacity: 1, marginLeft: '-=10px' },
        { complete: function() {
            // Set a listener function for all HREFs. On HREF make sure to fade body out.
            $('a[href], button[href]').click(function(event) {

                // Avoid fade-out when the target is a blank (opens new page)
                if ($(this).attr('target') === "_blank") return;

                var url = $(this).attr('href');
                if (url.indexOf('#') == 0 || url.indexOf('javascript:') == 0) return;
                event.preventDefault();

                // Animate the fade-out.
                full_body.animate({ opacity: 0, marginLeft: '-=10px' }, 
                    FADE_BETWEEN_HTML_SPEED, function () {
                        // on-end of opacity animation, fade out very fast and then change url location.
                        full_body.fadeOut(100, function() { window.location = url; })
                    }
                );
            });
        }}
    );
});

const dir = "./js";
const srcs = [
    // add all base scripts for import here.
    "topnav.js",
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
for (var src of srcs) {
    let scriptEle = document.createElement("script");
    scriptEle.setAttribute("src", pathJoin([dir,src]));
    scriptEle.setAttribute("async", "false");
    scriptEle.setAttribute("defer", true);
    document.head.appendChild(scriptEle);
}
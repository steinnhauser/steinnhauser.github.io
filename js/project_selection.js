// load content in.

content_array = [ // [Title, HTML pointer, Image cover file]
    ["Online Piano", "projects/piano.html", "images/projects/pexels-bryan-geraldo-586415.jpg"]
]


function LoadContent() {
    mfb = document.getElementById('main-flex-box');
    for (var i = 0; i < content_array.length; i++) {
        mfb.innerHTML += 
        `
            <a href="${content_array[i][1]}" class="main-links">
                <li class="list-items-content">
                    <div class="content-holder" style="display:inline; width:100%; height:100%;">
                        <div class="top-content" style="background-image:url(${content_array[i][2]});"></div>
                        <div class="bottom-content">
                            <p class="footer-content">
                                ${content_array[i][0]}
                            </p>
                        </div>
                    </div>
                </li>
            </a>
        `
    }
}

LoadContent();
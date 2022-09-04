// load content in.

content_array = [ // [Title, HTML pointer (without '.html' ext), Image cover file]
    ["Online Piano", "projects/piano", "images/projects/pexels-bryan-geraldo-586415.jpg"],
    ["Pong", "projects/pong", "images/projects/pexels-todd-trapani-2339377.jpg"],
    ["Universe Sandbox", "projects/universe_sandbox", "images/projects/pexels-pixabay-2150.jpg"],
]


function LoadContent() {
    mfb = document.getElementById('main-flex-box');
    for (var i = 0; i < content_array.length; i++) {
        mfb.innerHTML += 
        `
            <a href="#" data-url="${content_array[i][1]}" class="main-links">
                <li class="list-items-content">
                    <div class="content-holder" style="display:inline; width:100%; height:100%;">
                        <div class="top-content" style="background-image:url(${content_array[i][2]});"></div>
                        <div class="bottom-content">
                            <p class="footer-content" style="color:black;">
                                ${content_array[i][0]}
                            </p>
                        </div>
                    </div>
                </li>
            </a>
        `;
    }
}

LoadContent();
const urlParams = new URLSearchParams(window.location.search);

async function initMenu() {
    if(!document.getElementById("menu")) {
        if(document.querySelector(".content")) {
            const content = document.querySelector(".content");
            let menu = "<div id='menu' class='navbar navbar-expand-lg'><div class='container-fluid container-lg'><a class='navbar-brand' href='/'>nerotv.live</a><button class='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'><span class='navbar-toggler-icon'></span></button><div class='collapse navbar-collapse' id='navbarSupportedContent'><ul class='navbar-nav me-auto mb-2 mb-lg-0'>%1</ul>%2</div></div></div>";

            let menuContent = "";

            menu = menu.replace("%1",menuContent).replace("%2","");
            content.innerHTML = menu + content.innerHTML;
        }
    }
}

function addFooter() {
    if(!document.getElementById("menu")) {
        const content = document.querySelector(".content");
        let footer = "<div class='container-fluid bg-black p-3 py-5 w-100 d-flex justify-content-center align-items-center text-center'><p class='m-0 p-0 opacity-75'><a class='link' href='https://nerofy.de/rechtliches' target='_blank'>Imprint and Privacy Declaration (ger)</a><br>©copyright 2026 Nerofy Network. All rights reserved.</p></div>";
        content.innerHTML += footer;
    }
}
addFooter();
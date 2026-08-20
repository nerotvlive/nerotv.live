const urlParams = new URLSearchParams(window.location.search);

async function initMenu() {
    if(!document.getElementById("menu")) {
        if(document.querySelector(".content")) {
            const content = document.querySelector(".content");
            let menu = "<div id='menu' class='navbar navbar-expand-lg'><div class='container-fluid container-lg'><a class='navbar-brand' href='https://nerotvlive.github.io/nerotv.live'>nerotv.live</a><button class='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'><span class='navbar-toggler-icon'></span></button><div class='collapse navbar-collapse' id='navbarSupportedContent'><ul class='navbar-nav me-auto mb-2 mb-lg-0'>%1</ul>%2</div></div></div>";

            let menuContent = "<a type=\"button\" href=\"https://nerotv.live\" class=\"btn btn-primary btn-sm\" target='_blank'>Neue Website aufrufen</a>";

            menu = menu.replace("%1","").replace("%2",menuContent);
            content.innerHTML = menu + content.innerHTML;
        }
    }
}

function addFooter() {
    if(!document.getElementById("menu")) {
        const content = document.querySelector(".content");
        let footer = "<div class='container-fluid bg-black p-3 py-5 w-100 d-flex justify-content-center align-items-center text-center'><p class='m-0 p-0 opacity-75 text-secondary'><a class='link-underline-opacity-0 link-underline-opacity-50-hover link-light' href='https://nerotv.live/imprint' target='_blank'>Impressum</a> <a class='link-underline-opacity-0 link-underline-opacity-50-hover link-light' href='https://nerotv.live/privacy' target='_blank'>Datenschutzerklärung</a><br><br>Diese Seite ist Teil des <a class='link-underline-opacity-0 link-underline-opacity-50-hover link-light' href='https://www.zyneoncollective.com' target='_blank'>Zyneon Collective</a><br>©copyright 2026 <a class='link-underline-opacity-0 link-underline-opacity-50-hover link-light' href='https://www.zyneonstudios.com' target='_blank'>Zyneon Studios</a>. All rights reserved.</p></div>";
        content.innerHTML += footer;
    }
}
addFooter();
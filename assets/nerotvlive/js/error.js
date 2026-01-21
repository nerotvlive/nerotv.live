function createTicker(string) {
    if(!string) {
        string = "ERROR"
    }
    const word = string;
    const rowCount = 20;
    const repeatCount = 20;
    const container = document.getElementById('bg-ticker');

    for (let i = 0; i < rowCount; i++) {
        const row = document.createElement('div');
        row.classList.add('ticker-row');
        if (i % 2 === 0) {
            row.classList.add('move-left');
        } else {
            row.classList.add('move-right');
        }
        row.innerHTML = ("<span>"+word+"</span>").repeat(repeatCount);
        container.appendChild(row);
    }
}

addEventListener("DOMContentLoaded", () => {
    let menu = true;
    if(urlParams.has("hideMenu")) {
        if(urlParams.get("hideMenu").toLowerCase() === "true") {
            menu = false;
        }
    }
    if(menu) {
        initMenu();
    }
    if(urlParams.has("classList")) {
        document.querySelector(".error-title").classList.add(urlParams.get("classList"));
    }
    if(urlParams.has("hideBack")) {
        if(urlParams.get("hideBack").toLowerCase() === "true") {
            document.querySelector(".btn-back").style.display = "none";
        }
    }
    if(urlParams.has("hideReload")) {
        if(urlParams.get("hideReload").toLowerCase() === "true") {
            document.querySelector(".btn-reload").style.display = "none";
        }
    }
    if(urlParams.has("error")) {
        document.querySelector(".error-title").innerText = urlParams.get("error");
        createTicker(urlParams.get("error"));
    } else {
        createTicker("UNKNOWN ERROR");
    }
    if(urlParams.has("message")) {
        document.querySelector(".error-message").innerText = urlParams.get("message");
    }
});

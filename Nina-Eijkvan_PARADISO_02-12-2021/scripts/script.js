// JavaScript Document

// openen hamburger menu // 

var menuButton = document.querySelector("button");

menuButton.addEventListener('click', naarBenee);

function naarBenee() {
    let menu = document.querySelector("div:first-of-type");
    menu.classList.toggle("hamburgerOpen");
}



// hamburger menu van burger naar kruis laten gaan //

menuButton.addEventListener("click", vanBurgerNaarKruis);

function vanBurgerNaarKruis() {
    var deNav = document.querySelector("nav:first-of-type");
    deNav.classList.toggle("kruis");
}

//Dark modus inschakelen// 

var darkBox = document.querySelector(".indieHeader>nav>section>input");
darkBox.addEventListener('change', hetWordtDonker);


function hetWordtDonker() {
    if (darkBox.checked) {
        document.documentElement.classList.add("darkmode");
    }
    else {
        document.documentElement.classList.remove("darkmode");
    }
}

// kerst thema! // 

var kerstBox = document.querySelector("header>nav:first-of-type>section>input");

kerstBox.addEventListener('change', kerstThemaAan);

function kerstThemaAan() {
    if (kerstBox.checked) {
        document.documentElement.classList.add("kerstThema");
    }
    else {
        document.documentElement.classList.remove("kerstThema");
    }
}
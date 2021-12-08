// JavaScript Document

// openen hamburger menu // 

var menuButton = document.querySelector("button");

function naarBenee(){
    let menu = document.querySelector("div");
    menu.classList.toggle("hamburgerOpen");
}

menuButton.addEventListener("click", naarBenee); 
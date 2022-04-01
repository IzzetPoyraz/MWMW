'use strict';

(function () {
    let btnMenu = document.getElementById("menu")
    let icon = document.querySelector(".icon")


    if (window.matchMedia("(max-width: 750px)").matches) {
        btnMenu.getAttribute("aria-expanded") === "false" ? "true" : "false";
    }

    btnMenu.addEventListener('click', function() {
        btnMenu.setAttribute("aria-expanded", btnMenu.getAttribute("aria-expanded") === "true" ? "false" : "true")
    })

    btnMenu.addEventListener('click', function() {
        icon.setAttribute("aria-hidden", icon.getAttribute("aria-hidden") === "false" ? "true" : "false")
    }) 

    const open = document.getElementById('open');
    const container_popup = document.getElementById('container-popup');
    const sluiten = document.getElementById('sluiten');

    open.addEventListener('click', ()=>{
        container_popup.classList.add('show');
    });
    sluiten.addEventListener('click', ()=>{
        container_popup.classList.remove('show');
    }); 
})();
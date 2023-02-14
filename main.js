var openToggle=document.querySelector("#open");
var closeToggle=document.querySelector("#close");
var toggleHamburger=document.querySelector(".hamburgerMenu");
var toggleBarWithDarkBg=document.querySelector(".toggleBarWithDarkBg");


toggleHamburger.addEventListener(
    "click", () => {
        if (openToggle.hasAttribute("data-visible")){

            toggleBarWithDarkBg.toggleAttribute("data-visible");
            openToggle.toggleAttribute("data-visible");
    
            closeToggle.toggleAttribute("data-visible");
        }
        else 
        {
            openToggle.toggleAttribute("data-visible");
            closeToggle.toggleAttribute("data-visible");
            toggleBarWithDarkBg.toggleAttribute("data-visible");

        }


});  
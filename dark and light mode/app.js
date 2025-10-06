let fulldarkMode = document.querySelector("#fulldark-mode");
let body = document.querySelector("body");

// For Body
fulldarkMode.addEventListener("change", () => {
    if(fulldarkMode.checked) {
        body.classList.add("dark");
        
    }
    else {
        body.classList.remove("dark");
    }
    containerDark.checked = fulldarkMode.checked;
    // containerDark.click();
    darkContainerMode();

})

let containerDark = document.querySelector("#contained-dark-mode");
let container = document.querySelector(".container");

// For Container
containerDark.addEventListener("change", darkContainerMode)

function darkContainerMode() {
    if(containerDark.checked) {
        container.classList.add("container-dark");
    }
    else {
        container.classList.remove("container-dark");
    }
}
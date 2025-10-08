let darkBtn = document.querySelector(".dark-btn");
let lightBtn = document.querySelector(".light-btn");
let body = document.querySelector("body");

lightBtn.addEventListener("click", () => {
    darkBtn.classList.add("visible");
    darkBtn.classList.remove("hidden");
    lightBtn.classList.add("hidden");

    body.style.background = "#fff";
})

darkBtn.addEventListener("click", () => {
    lightBtn.classList.add("visible");
    lightBtn.classList.remove("hidden");
    darkBtn.classList.add("hidden");

    body.style.background = "#111";
})
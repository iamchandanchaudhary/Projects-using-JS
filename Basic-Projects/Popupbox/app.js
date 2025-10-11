const btn = document.querySelector(".btn");
const okbtn = document.querySelector(".okbtn");
const body = document.querySelector("body");
const popup = document.querySelector(".popup");

btn.addEventListener("click", () => {
    popup.classList.add("open-popup");
})

okbtn.addEventListener("click", () => {
    popup.classList.remove("open-popup");
})
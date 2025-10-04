// Share button
const shareBtn = document.querySelector(".share-btn");

shareBtn.addEventListener("click", (event) => {
    if(navigator.share) {
        navigator.share({
            title: "This is an amazing LinkTree Website of Chandan Chaudhary 😍",
            url: "https://chandanchaudhary-linktree.netlify.app/",
        }).then(() => console.log("Thanks for Sharing"))
        .catch((err) => console.log(err));
    } else {
        alert("Something Wrong");
    }
})
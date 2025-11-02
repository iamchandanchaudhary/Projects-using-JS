const shareBtn = document.querySelector(".share-btn");

shareBtn.addEventListener("click", (event) => {
    // if(navigator.share) {
        navigator.share({
            title: "Hello 👋, from Chandan Chaudhary",
            url: "https://chandanchaudhary-portfolio.netlify.app/",
        }).then(() => console.log("Thanks for Sharing"))
        .catch((err) => console.log(err));
    // } else {
    //     alert("Something Wrong");
    // }
})
function openVideo() {
    document.getElementById("videoPopup").style.display = "flex";
}

function closeVideo() {
    document.getElementById("videoPopup").style.display = "none";
}

window.onclick = function(event) {
    const popup = document.getElementById("videoPopup");

    if (event.target === popup) {
        closeVideo();
    }
};
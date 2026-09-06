function openVideo() {
    document.getElementById("videoPopup").style.display = "flex";
}

function closeVideo() {
    const popup = document.getElementById("videoPopup");
    const video = popup.querySelector("video");

    video.pause();
    video.currentTime = 0;

    popup.style.display = "none";
}

window.onclick = function(event) {
    const popup = document.getElementById("videoPopup");

    if (event.target === popup) {
        closeVideo();
    }
};
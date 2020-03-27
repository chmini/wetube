const videoContainer = document.getElementById("jsVideoContainer");
const video = videoContainer.querySelector("video");

const registerView = () => {
  const videoId = window.location.href.split("/videos/")[1];
  fetch(`/api/${videoId}/view`, {
    method: "POST"
  });
};

const handleEnded = () => {
  registerView();
};

const init = () => {
  video.addEventListener("ended", handleEnded);
};

if (videoContainer) {
  init();
}

import "./styles.css";

const videoContainer = document.querySelector(".videoContainer"),
  video = videoContainer.querySelector("video"),
  controls = document.querySelector(".controls"),
  playPauseBtn = controls.querySelector(".playPauseBtn"),
  soundBtn = controls.querySelector(".soundBtn"),
  timer = controls.querySelector(".timer");

let hideTimeout = null;

const showControls = () => {
  if (hideTimeout) {
    clearTimeout(hideTimeout);
  }
  controls.classList.add("showing");
  videoContainer.style.cursor = "default";
  hideTimeout = setTimeout(hideControls, 3000);
};

const hideControls = () => {
  controls.classList.remove("showing");
  videoContainer.style.cursor = "none";
};

const togglePlayPause = () => {
  const { paused } = video;
  if (paused) {
    video.play();
    playPauseBtn.innerHTML = `<i class="fas fa-pause"></i>`;
  } else {
    video.pause();
    playPauseBtn.innerHTML = `<i class="fas fa-play"></i>`;
  }
};

const handleTimeUpdate = e => {
  const { currentTime, duration } = video;
  const formattedTime = `${Math.floor(currentTime)}`.padStart(2, "0");
  const formattedDuration = `${Math.floor(duration)}`.padStart(2, "0");
  timer.innerHTML = `00:${formattedTime} / 00:${formattedDuration}`;
};

const handleKeyDown = e => {
  const { code } = e;
  if (code === "Space") {
    togglePlayPause();
  }
};

const toggleSound = e => {
  const { muted } = video;
  if (muted) {
    soundBtn.innerHTML = `<i class="fas fa-volume-up"></i>`;
    video.muted = false;
  } else {
    soundBtn.innerHTML = `<i class="fas fa-volume-mute"></i>`;
    video.muted = true;
  }
};

video.addEventListener("timeupdate", handleTimeUpdate);
videoContainer.addEventListener("mousemove", showControls);
videoContainer.addEventListener("mouseleave", hideControls);
playPauseBtn.addEventListener("click", togglePlayPause);
soundBtn.addEventListener("click", toggleSound);
document.addEventListener("keydown", handleKeyDown);

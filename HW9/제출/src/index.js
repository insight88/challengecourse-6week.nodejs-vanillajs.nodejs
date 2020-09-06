import "./styles.css";

const videoContainer = document.querySelector(".videoPlayer");
const videoPlayer = document.querySelector("video");
const playBtn = document.querySelector(".controls__playBtn");
const volumeBtn = document.querySelector(".controls__volumeBtn");
const totalTime = document.querySelector(".controls__totalTime");
const currentTime = document.querySelector(".controls__currentTime");
const volumeRange = document.querySelector(".controls__volume");
const timeNow = document.querySelector(".controls__timenow");

function handlePlayClick() {
  if (videoPlayer.paused) {
    videoPlayer.play();
    playBtn.innerHTML = '<i class="fas fa-pause"></i>';
  } else {
    videoPlayer.pause();
    playBtn.innerHTML = '<i class="fas fa-play"></i>';
  }
}

function handlePlayKey(event) {
  if (event.code === "Space") {
    event.preventDefault();
    handlePlayClick();
  }
}

function handelVolumeClick() {
  if (videoPlayer.muted) {
    videoPlayer.muted = false;
    volumeBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
    volumeRange.value = videoPlayer.volume;
  } else {
    videoPlayer.muted = true;
    volumeBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
    volumeRange.value = 0;
  }
}

function formatDate(seconds) {
  const secondsNumber = parseInt(seconds, 10);
  let hours = Math.floor(secondsNumber / 3600);
  let minutes = Math.floor((secondsNumber - hours * 3600) / 60);
  let totalSeconds = secondsNumber - hours * 3600 - minutes * 60;

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (seconds < 10) {
    totalSeconds = `0${totalSeconds}`;
  }
  if (hours === 0) {
    return `${minutes}:${totalSeconds}`;
  } else if (hours < 10 && hours !== 0) {
    return `${hours}:${minutes}:${totalSeconds}`;
  }
}

function getCurrentTime() {
  currentTime.innerHTML = formatDate(Math.floor(videoPlayer.currentTime));
  timeNow.value = (videoPlayer.currentTime / videoPlayer.duration) * 100;
}

function setTotalTime() {
  console.log(videoPlayer.duration);
  console.dir(videoPlayer);
  const totalTimeString = formatDate(videoPlayer.duration);
  totalTime.innerHTML = totalTimeString;
  setInterval(getCurrentTime, 200);
}

function handleEnded() {
  videoPlayer.currentTime = 0;
  playBtn.innerHTML = '<i class="fas fa-play"></i>';
  videoPlayer.play();
}

function handleDrag(event) {
  const {
    target: { value }
  } = event;
  videoPlayer.volume = value;
  if (value >= 0.6) {
    volumeBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
  } else if (value >= 0.2) {
    volumeBtn.innerHTML = '<i class="fas fa-volume-down"></i>';
  } else {
    volumeBtn.innerHTML = '<i class="fas fa-volume-off"></i>';
  }
}

function handleDragTime(event) {
  const {
    target: { value }
  } = event;
  videoPlayer.currentTime = (videoPlayer.duration * value) / 100;
  playBtn.innerHTML = '<i class="fas fa-pause"></i>';
  videoPlayer.play();
}

function handleHide() {
  document.body.style.cursor = "none";
}

function handleStop() {
  setTimeout(handleHide, 2000);
}

function handlePointer() {
  document.body.style.cursor = "auto";
}

function init() {
  videoPlayer.addEventListener("loadedmetadata", setTotalTime);
  playBtn.addEventListener("click", handlePlayClick);
  document.addEventListener("keypress", handlePlayKey);
  volumeBtn.addEventListener("click", handelVolumeClick);
  videoPlayer.addEventListener("ended", handleEnded);
  volumeRange.addEventListener("input", handleDrag);
  timeNow.addEventListener("input", handleDragTime);
  videoContainer.addEventListener("mousemove", handleStop);
  document.addEventListener("mousemove", handlePointer);
}

if (videoContainer) {
  init();
  setTotalTime();
}

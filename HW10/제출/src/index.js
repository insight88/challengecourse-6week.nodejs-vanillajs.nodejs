import "./styles.css";

const recordBtn = document.querySelector(".recordBtn");
const record__time = document.querySelector(".record__time");

let streamObject;
let audioRecorder;
let timecount;
let second = 0;

const handleAudioData = event => {
    const {
        data: audioFile
    } = event;
    console.log(event.data);
    const link = document.createElement("a");
    link.href = URL.createObjectURL(audioFile);
    link.download = "Audio.webm";
    document.body.appendChild(link);
    link.click();
};

const stopRecording = () => {
    audioRecorder.stop();
    clearInterval(timecount);
    record__time.innerHTML = "";
    recordBtn.removeEventListener("click", stopRecording);
    recordBtn.addEventListener("click", getAudio);
    recordBtn.innerHTML = "Start recording";
};

const recordMessage = () => {
    second++;
    record__time.innerHTML = `Recording for ${second}`;
};

const startRecording = () => {
    record__time.innerHTML = "Recording for 0";
    timecount = setInterval(recordMessage, 1000);
    audioRecorder.addEventListener("dataavailable", handleAudioData);
    recordBtn.addEventListener("click", stopRecording);
};

function getAudio() {
    navigator.mediaDevices.getUserMedia({
        audio: true
    }).then(stream => {
        audioRecorder = new MediaRecorder(stream, {
            type: "audio/webm;codecs=opus"
        });
        audioRecorder.start();
        startRecording();
    });
    recordBtn.removeEventListener("click", getAudio);
}

function init() {
    recordBtn.addEventListener("click", getAudio);
}

init();
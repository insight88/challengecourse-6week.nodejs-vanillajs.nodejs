import "./styles.css";

const button = document.querySelector("button"),
    body = document.querySelector("body"),
    counter = document.querySelector(".counter");
let isRecording = false;
let stream = null;
let mediaRecorder = null;
let chunks = [];
let count = 0;
let countInterval = null;

navigator.mediaDevices
    .getUserMedia({
        audio: true
    })
    .then(streamObj => (stream = streamObj))
    .catch(err => console.log(err));

const startCounting = () => {
    counter.innerHTML = `Recording for ${count}`;
    count++;
};

const handleStreamData = e => {
    const {
        data
    } = e;
    chunks.push(data);
};

const handleStreamStop = () => {
    const audio = new Blob(chunks, {
        type: "audio/webm;codecs=opus"
    });
    const url = URL.createObjectURL(audio);
    const link = document.createElement("a");
    button.innerHTML = "Start Recording";
    clearInterval(countInterval);
    count = 0;
    counter.innerHTML = "";
    body.appendChild(link);
    link.href = url;
    link.download = "Audio";
    link.click();
};

const startRecording = () => {
    if (stream) {
        mediaRecorder = new MediaRecorder(stream);
        mediaRecorder.start();
        mediaRecorder.addEventListener("dataavailable", handleStreamData);
        mediaRecorder.addEventListener("stop", handleStreamStop);
        startCounting();
        countInterval = setInterval(startCounting, 1000);
    }
};

const toggleState = () => {
    if (isRecording) {
        button.innerHTML = "Start Recording";
        mediaRecorder.stop();
    } else {
        button.innerHTML = "Stop Recording";
        startRecording();
    }
    isRecording = !isRecording;
};

button.addEventListener("click", toggleState);
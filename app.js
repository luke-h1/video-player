const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

// PLAY + PAUSE
function toggleVideoStatus() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

// UPDATE PLAY + PAUSE ICON
function updatePlayIcon() {
  if (video.paused) {
    play.innerHTML = `<i class="fa fa-youtube-play"></i>`;
  } else {
    play.innerHTML = `<i class="fa fa-pause-circle" aria-hidden="true"></i>`;
  }
}

// UPDATE PROGRESS + TIMESTAMP
function updateProgress() {
  console.log(video.curentTime);
  progress.value = (video.currentTime / video.duration) * 100;
  let minutes = Math.floor(video.currentTime / 60);
  if (minutes < 10) {
    minutes = '0' + String(minutes);
  }
  let seconds = Math.floor(video.currentTime % 60)  // get remainder of 60 
  if(seconds < 10){
    seconds = '0' + String(seconds)
  }
  timestamp.innerHTML = `${minutes} - ${seconds}`
}


// SET VIDEO TIME ON PROGRESS BAR 
function setVideoProgress(){
  video.currentTime = (parseInt(progress.value) * video.duration / 100); 
}


// STOP VIDEO 
function stopVideo(){
  video.currentTime = 0;
  video.pause(); 
}

// EVENT LISTENERS
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);

play.addEventListener('click', toggleVideoStatus);

stop.addEventListener('click', stopVideo);

progress.addEventListener('change', setVideoProgress);

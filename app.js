const video = document.getElementById('video');  
const play = document.getElementById('play'); 
const stop = document.getElementById('stop'); 
const progress = document.getElementById('progress'); 
const timestamp = document.getElementById('timestamp'); 









// EVENT LISTENERS 
video.addEventListener('click', toggleVideoStatus); 
video.addEventListener('pause', updatePlayIcon); 
video.addEventListener('play', updatePlayIcon); 
video.addEventListener('timeupdate', updateProgress); 

play.addEventListener('click', toggleVideoStatus); 

stop.addEventListener('click', stopvideo); 

progress.addEventListener('change', setVideoProgress); 

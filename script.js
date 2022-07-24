const bioButton = document.querySelector('#bioButton');
const bio = document.querySelector('#bio');
let music = document.querySelector('.audio');
let seekBar = document.querySelector('.seek-bar');
let currentTime = document.querySelector('.current-time');
let musicDuration = document.querySelector('.song-duration');
let playBtn = document.querySelector('.play-btn');

bioButton.addEventListener('click', (e)=> {
  e.preventDefault();
  bio.scrollIntoView({
    behavior: "smooth"
  })
})

let formatTime = (time) => {
  let min = Math.floor(time/60);
  if(min < 10){
    min = `0${min}`
  }
  let sec = Math.floor(time % 60);
  if (sec < 10){
    sec = `0${sec}`
  }
  return `${min}:${sec}`
}

playBtn.addEventListener('click', () => {
  if(playBtn.className.includes('pause')){
    music.play();
  } else {
    music.pause();
  }
  playBtn.classList.toggle('pause');
})

let setMusic = () => {
  setTimeout(() => {
    seekBar.max = music.duration;
    musicDuration.innerHTML = formatTime(music.duration);
  }, 300)
}


setInterval(() => {
  seekBar.value = music.currentTime;
  currentTime.innerHTML = formatTime(music.currentTime)
}, 500)

seekBar.addEventListener('change', ()=> {
  music.currentTime = seekBar.value;
})

setMusic()
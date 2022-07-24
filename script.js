const bioButton = document.querySelector('#bioButton');
const bio = document.querySelector('#bio');
let music = document.querySelectorAll('.audio');
let seekBar = document.querySelectorAll('.seek-bar');
let currentTime = document.querySelectorAll('.current-time');
let musicDuration = document.querySelectorAll('.song-duration');
let playBtn = document.querySelectorAll('.play-btn');

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

for (let i=0; i<music.length; i++) {
  playBtn[i].addEventListener('click', () => {
    if(playBtn[i].className.includes('pause')){
      music[i].play();
    } else {
      music[i].pause();
    }
    playBtn[i].classList.toggle('pause');
  })

  let setMusic = () => {
    setTimeout(() => {
      seekBar[i].max = music[i].duration;
      musicDuration[i].innerHTML = formatTime(music[i].duration);
    }, 300)
  }

  setInterval(() => {
    seekBar[i].value = music[i].currentTime;
    currentTime[i].innerHTML = formatTime(music[i].currentTime)
  }, 500)

  seekBar[i].addEventListener('change', ()=> {
    music[i].currentTime = seekBar[i].value;
  })

  setMusic()
}

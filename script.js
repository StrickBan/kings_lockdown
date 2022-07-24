const bioButton = document.querySelector('#bioButton');
const bio = document.querySelector('#bio');
let track = document.querySelectorAll('.track')
let music = document.querySelectorAll('.audio');
let seekBar = document.querySelectorAll('.seek-bar');
let currentTime = document.querySelectorAll('.current-time');
let musicDuration = document.querySelectorAll('.song-duration');
let playBtn = document.querySelectorAll('.play-btn');
const playBtnCover = document.querySelector('.play-btn-cover')

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
    track[i].classList.toggle('active-track');
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
    if(music[i].currentTime >= music[i].duration && (i+1) == music.length){
      music[i].currentTime = 0;
      playBtn[i].classList.toggle('pause');
      track[i].classList.toggle('active-track');
    } else if (music[i].currentTime >= music[i].duration){
      music[i].currentTime = 0;
      playBtn[i].classList.toggle('pause');
      track[i].classList.toggle('active-track');
      playBtn[i+1].click()
    }
  }, 500)

  seekBar[i].addEventListener('change', ()=> {
    music[i].currentTime = seekBar[i].value;
  })

  setMusic()
}

const resetTracks = function() {
  seekBar.forEach(bar => {
    bar.value = 0;
  })
  music.forEach(music => {
    music.currentTime = 0;
    music.pause();
  })
  playBtn.forEach(btn => {
    btn.classList.add('pause')
  })
  track.forEach(tra => {
    tra.classList.remove('active-track')
  })
}

playBtnCover.addEventListener('click', ()=> {
  resetTracks();
  playBtn[0].click();
})
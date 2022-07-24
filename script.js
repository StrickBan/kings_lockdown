const bioButton = document.querySelector('#bioButton');
const bio = document.querySelector('#bio');
let tracks = document.querySelectorAll('.track')
let music = document.querySelectorAll('.audio');
let seekBars = document.querySelectorAll('.seek-bar');
let currentTimes = document.querySelectorAll('.current-time');
let musicDurations = document.querySelectorAll('.song-duration');
let playBtns = document.querySelectorAll('.play-btn');
const playBtnCover = document.querySelector('.play-btn-cover')
const creditsAside = document.querySelector('.credits-container')

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
  playBtns[i].addEventListener('click', () => {
    if(playBtns[i].className.includes('pause')){
      music[i].play();
    } else {
      music[i].pause();
    }
    playBtns[i].classList.toggle('pause');
    tracks[i].classList.toggle('active-track');
  })

  let setMusic = () => {
    setTimeout(() => {
      seekBars[i].max = music[i].duration;
      musicDurations[i].innerHTML = formatTime(music[i].duration);
    }, 300)
  }

  setInterval(() => {
    seekBars[i].value = music[i].currentTime;
    currentTimes[i].innerHTML = formatTime(music[i].currentTime)
    if(music[i].currentTime >= music[i].duration && (i+1) == music.length){
      music[i].currentTime = 0;
      playBtns[i].classList.toggle('pause');
      tracks[i].classList.toggle('active-track');
    } else if (music[i].currentTime >= music[i].duration){
      music[i].currentTime = 0;
      playBtns[i].classList.toggle('pause');
      tracks[i].classList.toggle('active-track');
      playBtns[i+1].click()
    }
  }, 500)

  seekBars[i].addEventListener('change', ()=> {
    music[i].currentTime = seekBars[i].value;
  })

  setMusic()
}

const resetTracks = function() {
  seekBars.forEach(bar => {
    bar.value = 0;
  })
  music.forEach(music => {
    music.currentTime = 0;
    music.pause();
  })
  playBtns.forEach(btn => {
    btn.classList.add('pause')
  })
  tracks.forEach(tra => {
    tra.classList.remove('active-track')
  })
}

playBtnCover.addEventListener('click', ()=> {
  resetTracks();
  playBtns[0].click();
})

// if(window.innerWidth <= 750){
//   creditsAside.remove();
// }
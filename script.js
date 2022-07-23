const bioButton = document.querySelector('#bioButton');
const bio = document.querySelector('#bio');
let music = document.querySelector('#audio');
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

playBtn.addEventListener('click', () => {
  playBtn.classList.toggle('pause');
})
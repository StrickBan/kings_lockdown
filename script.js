const bioButton = document.querySelector('#bioButton')
const bio = document.querySelector('#bio')

bioButton.addEventListener('click', (e)=> {
  e.preventDefault();
  bio.scrollIntoView({
    behavior: "smooth"
  })
})
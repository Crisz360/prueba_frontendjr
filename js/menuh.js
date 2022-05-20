const toggleButton = document.getElementById('button')
const Wrapper = document.getElementById('nav')

toggleButton.addEventListener('click',() => {
  toggleButton.classList.toggle('close')
  Wrapper.classList.toggle('show')
})

Wrapper.addEventListener('click',e => {
  if(e.target.id === 'menu-nav'){
    Wrapper.classList.remove('show')
    toggleButton.classList.remove('close')
  }
})

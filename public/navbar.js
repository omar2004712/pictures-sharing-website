const navBar = document.querySelector('.nav-bar');
window.addEventListener('scroll', () => {
  if(window.scrollY){
    navBar.classList.add('shadow-y');
  }
  else{
    navBar.classList.remove('shadow-y')
  }
})

console.log('done')
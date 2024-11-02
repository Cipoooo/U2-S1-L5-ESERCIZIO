document.addEventListener('scroll', ()=>{
    const navbar = document.querySelector('nav')
    const navButton = document.querySelector('button')
    if(window.scrollY > 200){
        navbar.classList.add('scrolled')
        navButton.classList.add('scrolled')
    }else{
        navbar.classList.remove('scrolled')
        navButton.classList.remove('scrolled')
    }
})
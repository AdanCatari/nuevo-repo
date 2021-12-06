addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.navToggle')
    if(navToggle){
        navToggle.addEventListener('click' , () =>{
            const nav__barra = document.querySelector('.nav__barra')
            nav__barra.classList.toggle('show')
        })
    }
})
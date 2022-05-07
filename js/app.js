const toggle = document.querySelector('.toggle')
const close = document.querySelector('.close')
const nav = document.querySelector('nav')

    toggle.addEventListener('click', () => {
        nav.classList.add('open-nav')
    })

    close.addEventListener('click', () => {
        nav.classList.remove('open-nav')
    })
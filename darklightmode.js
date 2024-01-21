const lightModeIcon = document.getElementById('light-mode')
const darkModeIcon = document.getElementById('dark-mode')
const body = document.body
const p = document.querySelectorAll('p')
const a = document.querySelectorAll('a')
const text = document.querySelectorAll('.text')
const icons = document.querySelectorAll('.icon')

let link = document.querySelector("link[rel~='icon']")

const light_img = document.getElementById('my-img')
const dark_img = document.getElementById('my-img-dark')


const localMode = localStorage.getItem('mode')
if(localMode === 'light'){
    enableDarkMode()
}else{
    enableLightMode()
}

function enableDarkMode() {
    lightModeIcon.style.display = 'none'
    darkModeIcon.style.display = 'block'

    link.href = './public/bg remove dark.svg'

    body.classList.toggle('dark-mode')

    p.forEach((para) => {
        para.classList.add('text-dark-mode')
    })

    a.forEach((anchor) => {
        anchor.classList.add('dark-mode')
    })

    text.forEach((each) => {
        each.classList.add('text-dark-mode')
    })

    icons.forEach((icon) => {
        icon.classList.add('icon-dark-mode')
    })

    // img.src = "./public/bg remove dark.svg";

    light_img.style.display = "none"
    dark_img.style.display = "block"

    localStorage.setItem('mode', 'dark')
}

function enableLightMode(){
    lightModeIcon.style.display = 'block'
    darkModeIcon.style.display = 'none'

    link.href = './public/bg remove.svg'

    body.classList.remove('dark-mode')

    p.forEach((para) => {
        para.classList.remove('text-dark-mode')
    })

    a.forEach((anchor) => {
        anchor.classList.remove('dark-mode')
    })

    text.forEach((each) => {
        each.classList.remove('text-dark-mode')
    })

    icons.forEach((icon) => {
        icon.classList.remove('icon-dark-mode')
    })

    // img.src = "./public/bg remove.svg";

    light_img.style.display = "block"
    dark_img.style.display = "none"


    localStorage.setItem('mode', 'light')
}


function toggleMode() {
    const currentMode = localStorage.getItem('mode')
    if(currentMode === 'dark')
        enableLightMode()
    else
        enableDarkMode()
}

lightModeIcon.addEventListener('click', toggleMode)
darkModeIcon.addEventListener('click', toggleMode)
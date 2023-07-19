'use strick'

//Menu hamburguesa para responsive
//Cuando hago CLICK en headerBtn hace una FUNTION
    //headerNav le TOGGLE la clase isActive

const headerBtn = document.querySelector(`.Header-btn`)
const headerNav = document.querySelector(`.Header-nav`)

console.log( headerBtn )
console.log( headerNav)

headerBtn.addEventListener(`click` , ()=>{
    headerNav.classList.toggle(`isActive`)
})


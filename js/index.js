'use strick'

//Cuando hago CLICK en headerBtn hace una FUNTION
    //headerNav le TOGGLE la clase isActive

const headerBtn = document.querySelector(`.Header-btn`)
const headerNav = document.querySelector(`.Header-nav`)

console.log( headerBtn )
console.log( headerNav)

headerBtn.addEventListener(`click` , ()=>{
    headerNav.classList.toggle(`isActive`)
})

//Cuando hago CLICK en designWrap hace una FUNTION


const designWrap     = document.querySelector(`.Design-wrap`)
const designLightBox = document.querySelector(`.Design-lightbox`)
const designBtn      = document.querySelector(`.Design-btn`)

console.log( designWrap )
console.log( designLightBox )
console.log( designBtn )

//designLighBox le add la clase isActive

designWrap.addEventListener(`click` , ()=>{
    designLightBox.classList.add(`isActive`)
})

//Cuando hago CLICK en designBtn hace una FUNTION
    //designLightBox le REMOVE la clase isActive

designBtn.addEventListener(`click` , ()=>{
    designLightBox.classList.remove(`isActive`)
})

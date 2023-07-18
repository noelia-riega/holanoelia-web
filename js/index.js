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



//const designWrap     = document.querySelector(`.Design-wrap`)
//const designLightBox = document.querySelector(`.Design-lightbox`)
//const designBtn      = document.querySelector(`.Design-btn`)

//console.log( designWrap )
//console.log( designLightBox )
//console.log( designBtn )

//designLighBox le add la clase isActive

//designWrap.addEventListener(`click` , ()=>{
//    designLightBox.classList.add(`isActive`)
//})

//Cuando hago CLICK en designBtn hace una FUNTION
    //designLightBox le REMOVE la clase isActive

//designBtn.addEventListener(`click` , ()=>{
//    designLightBox.classList.remove(`isActive`)
//})


//Cuando hago CLICK en designWrap
 //designLightBox le add isActive
 //designWrap TRAE su atributo "SRC"
 //lightBoxImg COLOCA el "SRC" de designImg  

 /* const enlacesDesign = document.querySelectorAll(`.Design-article .Design-img`)
 const designLighBox = document.querySelector(`.Design-lightbox`)
 const lightBoxImg = document.querySelector(`.Lightbox-img`)

 enlacesDesign.forEach(( eachEnlacesDesign , i )=>{
    enlacesDesign[i].addEventListener(`click` , ( e )=>{
        e.preventDefault()
        let enlacesDesign = eachEnlacesDesign.querySelector(`.Design-img`).src
        console.log( enlacesDesign )

        designLighBox.classList.add(`isActive`)
        lightBoxImg.setAttribute(`src` , enlacesDesign)
    })
 }) */

// Cuando CLICK en btnPrev hace una FUNTION
 //MeSliderActive++
 // Si MeSliderActive es IGUAL o MAYOR a 11
 // Entonces MeSliderActive es igual a 0
//Todas las meImgList le REMOVE la clase isActive
//A meImgList le ADD la clase isActive

//Cuando hago CLICK en btnNext hace una FUNTION
//MESliderActive--
 //Si MeSliderActive es IGUAL o MENOR a -1
 //Entonces MesliderActive es igual a 11



 const btnPrev      = document.querySelector(`.Btn-prev`)
 const btnNext      = document.querySelector(`.Btn-next`)
 const meImgList    = document.querySelectorAll(`.Me-img`)

 console.log( btnPrev )
 console.log( btnNext )
 console.log( meImgList )

 let sliderActive = 0

 btnPrev.addEventListener(`click` , ()=>{

    sliderActive++
    if( sliderActive >= 12 ){
        sliderActive = 0
    }

    meImgList.forEach(( eachMeImg , index )=>{
        meImgList[index].classList.remove(`isActive`)
    })
    meImgList[sliderActive].classList.add(`isActive`)

 })

 btnNext.addEventListener(`click` , ()=>{
    sliderActive--
    if( sliderActive <= -1 ){
        sliderActive = 11
    }

    meImgList.forEach(( eachMeImg , index )=>{
        meImgList[index].classList.remove(`isActive`)
    })
    meImgList[sliderActive].classList.add(`isActive`)
 })
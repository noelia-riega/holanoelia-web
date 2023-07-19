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
    
//Lightbox para designArticle
//Cuando hago CLICK en designArticle hace una FUNTION
    //DesignLighBox le ADD la clase isActive
//Cuando hago CLICK en designBtn hace una FUNTION
    //DesignLighbox le REMOVE la clase isActive

    const designArticle     = document.querySelectorAll(`.Design-img`)
    const designLightBox    = document.querySelector(`.Design-lightbox`)
    const lightboxImg       = document.querySelector(`.Lightbox-img`)
    const designBtn         = document.querySelector(`.Design-btn`)
    
    console.log( designArticle )
    console.log( designLightBox )
    console.log( lightboxImg )
    console.log( designBtn)
    
    designArticle.forEach((eachDesignArticle , i)=>{
        designArticle[i].addEventListener(`click` , ()=>{
            designLightBox.classList.add(`isActive`)
            lightboxImg.src = designArticle[i].src
    
        })
    })
    
    designBtn.addEventListener(`click` , ()=>{
        designLightBox.classList.remove(`isActive`)
    })
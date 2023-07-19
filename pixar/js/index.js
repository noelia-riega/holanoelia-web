`use strick`

//headerBtn cuando hago CLICK hace una FUNCTION
    //headerNav le TOOGLE la clase isActive

    const headerBtn     = document.querySelector(`.Header-btn`)
    const headerNav     = document.querySelector(`.Header-nav`)

    console.log(headerBtn)
    console.log(headerNav)

    headerBtn.addEventListener(`click` , ()=>{
        headerNav.classList.toggle(`isActive`)
    })
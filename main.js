let user = document.querySelector(".navbar-email")
let infoUser = document.querySelector(".desktop-menu")

let mobileMenu = document.querySelector(".mobile-menu")
let menuBurguer = document.querySelector(".menu")



user.addEventListener("click", () =>{desplegarMenus(infoUser)})
menuBurguer.addEventListener("click", () =>{desplegarMenus(mobileMenu)})


// 
// function inactiveMenu(params) {
//inteto propio//
    // if (infoUser.classList.contains('inactive')) {
    //     infoUser.classList.remove('inactive')
    // } else {
    //     infoUser.classList.add('inactive')
    // }

//respuesta de juandc
    // infoUser.classList.toggle('inactive')
// }

function desplegarMenus(cambio) {
    cambio.classList.toggle('inactive')
}
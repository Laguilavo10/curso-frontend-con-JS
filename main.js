let user = document.querySelector(".navbar-email")
let infoUser = document.querySelector(".desktop-menu")

let mobileMenu = document.querySelector(".mobile-menu")
let menuBurguer = document.querySelector(".menu")

let carritoIcon = document.querySelector(".navbar-shopping-cart")
let infoCarrito = document.querySelector(".product-detail")



user.addEventListener("click", () =>{
    desplegarMenus(infoUser)
    if (!infoCarrito.classList.contains("inactive")) {
        infoCarrito.classList.add("inactive")
    }

})

menuBurguer.addEventListener("click", () =>{
    desplegarMenus(mobileMenu)
    if (!infoCarrito.classList.contains("inactive")) {
        infoCarrito.classList.add("inactive")
    }

})

carritoIcon.addEventListener("click", () =>{
    desplegarMenus(infoCarrito) 
    
    if (!mobileMenu.classList.contains("inactive")) {
        mobileMenu.classList.add("inactive")   
    }
    
    if (!infoUser.classList.contains("inactive")) {
        infoUser.classList.add("inactive")
    }


})


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

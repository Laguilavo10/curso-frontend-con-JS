let user = document.querySelector(".navbar-email")
let infoUser = document.querySelector(".desktop-menu")

let mobileMenu = document.querySelector(".mobile-menu")
let menuBurguer = document.querySelector(".menu")

let carritoIcon = document.querySelector(".navbar-shopping-cart")
let infoCarrito = document.querySelector(".product-detail")


function desplegarMenus(cambio) {
    cambio.classList.toggle('inactive')
}

user.addEventListener("click", () =>{
    desplegarMenus(infoUser)
    infoCarrito.classList.add("inactive")
})

menuBurguer.addEventListener("click", () =>{
    desplegarMenus(mobileMenu)
    infoCarrito.classList.add("inactive")
})

carritoIcon.addEventListener("click", () =>{
    desplegarMenus(infoCarrito) 
    mobileMenu.classList.add("inactive")   
    infoUser.classList.add("inactive")
})


let productos = document.querySelector(".product-card")
let containerProductos = document.querySelector(".cards-container")

//intento propio duplicando divs y sus nodos con JS en html
for (let index = 0; index < 8; index++) {
    let casilla = productos.cloneNode(true)
    containerProductos.append(casilla)
}
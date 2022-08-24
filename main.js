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


/*

//intento propio duplicando divs y sus nodos con JS en html

for (let index = 0; index < 8; index++) {
    let casilla = productos.cloneNode(true)
    containerProductos.append(casilla)
}

*/

let productList = []


function crearNuevosProductos(nombre1, precio1, img1) {
    productList.push(
        {
            nombre : nombre1,
            precio : precio1,
            img : img1,
        }
    )
}

crearNuevosProductos("bicicleta", 500, "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
crearNuevosProductos("televisor", 1000, "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
crearNuevosProductos("celular", 200, "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")

let cardsContainer = document.querySelector(".cards-container")

for (const iterator of productList) { 

    //creacion de las etiquetas HTML
    let productCard = document.createElement('div')
    let img = document.createElement('img')
    let productInfo = document.createElement('div')
    let divSolo = document.createElement('div')
    let precio = document.createElement('p')
    let nombre = document.createElement('p')
    let figure = document.createElement('figure')
    const imgConst = document.createElement('img')

    //dandole contenido a las etiquetas
    productCard.setAttribute('class','product-card')
    img.setAttribute('src', iterator.img)
    productInfo.setAttribute('class','product-info')
    precio.innerText = "$" + iterator.precio
    nombre.innerText = iterator.nombre
    imgConst.setAttribute('src', "./icons/bt_add_to_cart.svg")

    //insertando las etiquetas en sus etiquetas padres
    divSolo.append(precio, nombre)
    figure.appendChild(imgConst)
    productInfo.append(divSolo, figure)
    productCard.append(img, productInfo)

    //integrando todo al HMTL
    cardsContainer.appendChild(productCard)


    
}


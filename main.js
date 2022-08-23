let user = document.querySelector(".navbar-email")
let infoUser = document.querySelector(".desktop-menu")

console.log({infoUser});


user.addEventListener("click", inactiveMenu)

function inactiveMenu(params) {
    //inteto propio
    // if (infoUser.classList.contains('inactive')) {
    //     infoUser.classList.remove('inactive')
    // } else {
    //     infoUser.classList.add('inactive')
    // }

    //repsuesta de juandc
    infoUser.classList.toggle('inactive')
}
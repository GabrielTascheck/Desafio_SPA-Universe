import Router from "./router.js"

const router = new Router()
router.add('/','../pages/home.html')
router.add('/exploration','../pages/exploration.html')
router.add('/universe','../pages/universe.html')
router.add(404,'../pages/404.html')

const homeButton = document.querySelector('li a')

// const routes = {
//   "/":"/pages/home.html",
//   "/exploration": "/pages/exploration.html",
//   "/home": "/pages/home.html",
//   "/universe": "/pages/universe.html",
//   404: "/pages/404.html",
// }

router.handle()

window.onpopstate = () => router.handle() //fazer funcionar a setinha funcionar
window.route = () => router.route() //fazer o onclick do html funcionar 
// homeButton.click() //acho que vai sair


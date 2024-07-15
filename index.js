import home from './pages/home.js'
import universe from './pages/universe.js'
import exploration from './pages/exploration.js'

const main = document.querySelector("#app")

const links = {
  nav: document.querySelectorAll('a'),
  home: document.querySelector('.home'),
  universe: document.querySelector('.universe'),
  exploration: document.querySelector('.exploration'),
} 

export default links;

const init = () => {
  window.addEventListener('hashchange', () => {

    main.innerHTML = ''

    removeSpan()

    switch(window.location.hash){
      case "":
        main.appendChild(home());
        break
      case "#universe":
        main.appendChild(universe())
        break
      case "#exploration":
        main.appendChild(exploration())
        break
      default:
        main.appendChild(home());//erro/não encontrado
        break
    }
  })
}

function removeSpan(){
  links.nav.forEach(link => {
    link.classList.remove('span');
  });
}

window.addEventListener("load", () => {
  console.log("oi")
  main.appendChild(home());
  init()
})
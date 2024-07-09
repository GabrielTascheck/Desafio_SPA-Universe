import home from './pages/home/main.js'
import universe from './pages/universe/main.js'
import exploration from './pages/exploration/main.js'

const main = document.querySelector("#root")

const init = () => {
  window.addEventListener('hashchange', () => {

    main.innerHTML = ''

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


window.addEventListener("load", () => {
  main.appendChild(home());
  init()
})
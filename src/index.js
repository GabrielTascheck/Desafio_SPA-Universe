const routes = {
  "/":"/pages/home.html",
  "/exploration": "/pages/exploration.html",
  "/home": "/pages/home.html",
  "/universe": "/pages/universe.html",
  404: "/pages/404.html",
  homeButton: document.querySelector('li a'),
}

function route(event){
  event = event || window.event
  event.preventDefault()

  // const target = event.currentTarget;
  // const href = target.getAttribute('href');
  // event.currentTarget.getAttribute('href')

  window.history.pushState({}, "", event.currentTarget.getAttribute('href'))
  //Antes estava event.target.href ... porém não funcionava quando pressionava o logo para redirecionar.

  handle()
}

function handle(){

  const pathname = window.location.pathname
  // const { pathname } = window.location
  //pode ser usado pra desestruturar mais itens
  /*
    const { pathname, href, host, port} = window.location
  */
  const route = routes[pathname] || routes[404]
  fetch(route)
  .then(data => data.text())
  // .then((data) => {
  //   return data.text
  // })
  .then(html => {
    document.querySelector('#app').innerHTML = html
  })
      
}

handle()

window.onpopstate = () => handle()
window.route = () => route()
routes.homeButton.click() //acho que vai sair


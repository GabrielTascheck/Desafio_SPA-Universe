
const routes = {
  "/exploration": "/pages/exploration.html",
  "/home": "/pages/home.html",
  "/universe": "/pages/universe.html",
  404: "/pages/404.html",
}

function route(event){
  event = event || window.event
  event.preventDefault()

  window.history.pushState()

  handle()
}

function handle(){
  const pathName = window.location.pathname

  
}
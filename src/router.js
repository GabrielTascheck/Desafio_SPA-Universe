export default class Router {
  routes = {}

  add(routeName, page){
    this.routes[routeName] = page
    console.log(this.routes[routeName])
  }

  route(event){
    event = event || window.event
    event.preventDefault()
  
    // const target = event.currentTarget;
    // const href = target.getAttribute('href');
    // event.currentTarget.getAttribute('href')
  
    window.history.pushState({}, "", event.currentTarget.getAttribute('href'))
    //Antes estava event.target.href ... porém não funcionava quando pressionava o LOGO para redirecionar.
  
    this.handle()
  }

  handle(){

    const pathname = window.location.pathname
    // const { pathname } = window.location
    //pode ser usado pra desestruturar mais itens
    /*
      const { pathname, href, host, port} = window.location
    */
    // console.log(pathname)
    const route = this.routes[pathname] || this.routes[404]
    fetch(route)
    .then(data => data.text())
    // .then((data) => {
    //   return data.text
    // })
    .then(html => {
      document.querySelector('#app').innerHTML = html
    })
        
  }
}
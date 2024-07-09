export default function(){
  const container = document.createElement('div');

  const template = `
  <div id="grid">
    <h1>Explore o universo</h1>
    <a href="/#universe"><button>Quero saber mais</button></a>
  </div>
  `

  container.innerHTML = template

  return container
}



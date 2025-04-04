import links from '../../index.js'

export default function(){
  const container = document.createElement('div');
  
  links.exploration.classList.add('span')

  const template = `
  <h2>Exploração</h2>
  <p>Os corpos celestes e astros sempre foram motivo de grande fascinação na humanidade. Há registros de gregos, mesopotâmicos e astecas descrevendo vários acontecimentos celestes. Na era contemporânea, vários cientistas deram grandes contribuições para que o sonho de explorar o espaço pudesse se tornar realidade, como o russo Konstantin Tsiolkovsky, o alemão Hermann Oberth e o estadunidense Robert Goddard.
  </p>
  `

  container.innerHTML = template

  return container
}







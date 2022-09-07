/* eslint-disable guard-for-in */
const projects = [
  {
    name: 'Multi Post Historys',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    featuredimage: './imgs/Snapshoot Portfolio.png',
    tech1: 'html',
    tech2: 'bootstrap',
    tech3: 'ruby on rails',
    liveversion: '#liveversion',
    linksource: '#linksource',
  },
  {
    name: 'Multi Post Historys2',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    featuredimage: './imgs/Snapshoot Portfolio.png',
    tech1: 'html',
    tech2: 'bootstrap',
    tech3: 'ruby on rails',
    liveversion: '#liveversion',
    linksource: '#linksource2',
  },
  {
    name: 'Multi Post Historys3',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    featuredimage: './imgs/Snapshoot Portfolio.png',
    tech1: 'html',
    tech2: 'bootstrap',
    tech3: 'ruby on rails',
    liveversion: '#liveversion',
    linksource: '#linksource',
  },
  {
    name: 'Multi Post Historys',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    featuredimage: './imgs/Snapshoot Portfolio.png',
    tech1: 'html',
    tech2: 'bootstrap',
    tech3: 'ruby on rails',
    liveversion: '#liveversion',
    linksource: '#linksource',
  },
  {
    name: 'Multi Post Historys',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    featuredimage: './imgs/Snapshoot Portfolio.png',
    tech1: 'html',
    tech2: 'bootstrap',
    tech3: 'ruby on rails',
    liveversion: '#liveversion',
    linksource: '#linksource',
  },
  {
    name: 'Multi Post Historys',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    featuredimage: './imgs/Snapshoot Portfolio.png',
    tech1: 'html',
    tech2: 'bootstrap',
    tech3: 'ruby on rails',
    liveversion: '#liveversion',
    linksource: '#linksource',
  },

];

// eslint-disable-next-line no-unused-vars
function deploypopup(x) {
  const buttonCard = document.getElementById('popupmobile');
  const titulo = document.getElementById('titulo');
  const parrafo = document.getElementById('parrafo');
  const imagen = document.getElementById('imagen');
  const live = document.getElementById('live');
  const source = document.getElementById('source');
  const tech1 = document.getElementById('tech1');
  const tech2 = document.getElementById('tech2');
  const tech3 = document.getElementById('tech3');

  buttonCard.style.display = 'block';
  titulo.innerHTML = projects[x].name;
  parrafo.innerHTML = projects[x].description;
  imagen.src = projects[x].featuredimage;
  live.href = projects[x].liveversion;
  source.href = projects[x].linksource;

  tech1.innerHTML = projects[x].tech1;
  tech2.innerHTML = projects[x].tech2;
  tech3.innerHTML = projects[x].tech3;
}

function closemenu() {
  const buttonCard = document.getElementById('popupmobile');
  buttonCard.style.display = 'none';
}
document.getElementById('closepopup').addEventListener('click', closemenu);

function cardworksection() {
  // eslint-disable-next-line no-unused-vars, no-restricted-syntax
  for (const project in projects) {
    const nameproject = projects[project].name;
    const description = projects[project];
    const featuredimage = projects[project];
    const tech1 = projects[project];
    const tech2 = projects[project];
    const tech3 = projects[project];
    const card = `<div class="grid2">
    <img src="${featuredimage}" alt="" class="styleimg">
    <div class="lay-on-top">
        <h3 class="card-header">${nameproject}</h3>
        <p class="description">${description}</p>
        <ul class="technology">
            <li class=>${tech1}</li>
            <li class="boostrap">${tech2}</li>
            <li class="ruby">${tech3}</li>
        </ul>
        <button type="button" class="card-btn" id="card-btn-1" onclick='deploypopup(${project})'> See Project</button>
    </div>
    `;
    document.getElementById('grid4').insertAdjacentHTML('beforeend', card);
  }
}
cardworksection();
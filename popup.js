const projects = [
  {
    name: 'Awesome Books',
    description: 'On this page, you can save and load all the awesome books you have and save the name and the author into the local storage. this project uses Javascript to interact with the pages',
    featuredimage: './imgs/awesomebooks.png',
    tech1: 'html',
    tech2: 'CSS',
    tech3: 'Javascript',
    liveversion: 'https://cvalencia1991.github.io/Awesome-Books/',
    linksource: 'https://github.com/cvalencia1991/Awesomebooks.git',
  },
  {
    name: 'Deck of Cards',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    featuredimage: './imgs/deck of cards.jpg',
    tech1: 'html',
    tech2: 'Javascript',
    tech3: 'Css',
    liveversion: 'https://cvalencia1991.github.io/deck-of-cards/',
    linksource: 'https://github.com/cvalencia1991/deck-of-cards.git',
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

document.getElementById('closepopup').addEventListener('click', ()=>{
  const buttonCard = document.getElementById('popupmobile');
  buttonCard.style.display = 'none';
});

function cardworksection() {
  for (const project in projects) {
    const nameproject = projects[project].name;
    const description = projects[project].description
    const featuredimage = projects[project].featuredimage;
    const tech1 = projects[project].tech1;
    const tech2 = projects[project].tech2;
    const tech3 = projects[project].tech3;
    const card = `<div class="grid2">
    <img src="${featuredimage}" alt="" class="styleimg">
    <div class="lay-on-top">
        <h3 class="card-header">${nameproject}</h3>
        <p class="description">${description}</p>
        <ul class="technology">
            <li class="html1">${tech1}</li>
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

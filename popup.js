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
    name: 'Multi Post Historys',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    featuredimage: './imgs/Snapshoot Portfolio.png',
    tech1: 'html2',
    tech2: 'bootstrap2',
    tech3: 'ruby on rails2',
    liveversion: '#liveversion2',
    linksource: '#linksource2',
  },
  {
    name: 'Multi Post Historys',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    featuredimage: './imgs/Snapshoot Portfolio.png',
    tech1: 'html3',
    tech2: 'bootstrap3',
    tech3: 'ruby on rails3',
    liveversion: '#liveversion3',
    linksource: '#linksource3',
  },
  {
    name: 'Multi Post Historys',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    featuredimage: './imgs/Snapshoot Portfolio.png',
    tech1: 'html4',
    tech2: 'bootstrap4',
    tech3: 'ruby on rails4',
    liveversion: '#liveversion4',
    linksource: '#linksource4',
  },
  {
    name: 'Multi Post Historys',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    featuredimage: './imgs/Snapshoot Portfolio.png',
    tech1: 'html5',
    tech2: 'bootstrap5',
    tech3: 'ruby on rails5',
    liveversion: '#liveversion5',
    linksource: '#linksource5',
  },
  {
    name: 'Multi Post Historys',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    featuredimage: './imgs/Snapshoot Portfolio.png',
    tech1: 'html6',
    tech2: 'bootstrap6',
    tech3: 'ruby on rails6',
    liveversion: '#liveversion6',
    linksource: '#linksource6',
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

document.getElementById('card-btn-1').addEventListener('click', () => { deploypopup(0); });
document.getElementById('card-btn-2').addEventListener('click', () => { deploypopup(1); });
document.getElementById('card-btn-3').addEventListener('click', () => { deploypopup(2); });
document.getElementById('card-btn-4').addEventListener('click', () => { deploypopup(3); });
document.getElementById('card-btn-5').addEventListener('click', () => { deploypopup(4); });
document.getElementById('card-btn-6').addEventListener('click', () => { deploypopup(5); });

function closemenu() {
  const buttonCard = document.getElementById('popupmobile');
  buttonCard.style.display = 'none';
}
document.getElementById('closepopup').addEventListener('click', closemenu);
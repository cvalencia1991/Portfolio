const projects = [
  {
    name: 'Space Travel Hub',
    description: 'SpaceTravelHub is a live data from the SpaceX API. Web application development for a commercial and scientific space travel company. Rockets and space missions will be available for booking through the application.',
    featuredimage: './imgs/spaceTravelHub.jpg',
    tech1: 'React',
    tech2: 'Redux',
    tech3: 'Boostrap',
    liveversion: 'https://cvalencia1991.github.io/Awesome-Books/',
    linksource: 'https://github.com/cvalencia1991/Awesomebooks.git',
  },
  {
    name: 'Chicago Art Gallery',
    description: 'Page that showcases artworks from the Art Institute of Chicago using their API. It displays high-quality images of various art forms, such as paintings, sculptures, and textiles.',
    featuredimage: './imgs/cichacoArtGallery.jpg',
    tech1: 'React',
    tech2: 'Redux',
    tech3: 'Jest',
    liveversion: 'https://chicagoartgallery.netlify.app/',
    linksource: 'https://github.com/cvalencia1991/Chicago-Art-Gallery',
  },
  {
    name: 'Multi Post Historys3',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    featuredimage: './imgs/Snapshoot-Portfolio.avif',
    tech1: 'html',
    tech2: 'bootstrap',
    tech3: 'ruby on rails',
    liveversion: '#liveversion',
    linksource: '#linksource',
  },
  {
    name: 'Multi Post Historys',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    featuredimage: './imgs/Snapshoot-Portfolio.avif',
    tech1: 'html',
    tech2: 'bootstrap',
    tech3: 'ruby on rails',
    liveversion: '#liveversion',
    linksource: '#linksource',
  },
  {
    name: 'Multi Post Historys',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    featuredimage: './imgs/Snapshoot1.avif, ./imgs/Snapshoot2.png',
    tech1: 'html',
    tech2: 'bootstrap',
    tech3: 'ruby on rails',
    liveversion: '#liveversion',
    linksource: '#linksource',
  },
  {
    name: 'Multi Post Historys',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    featuredimage: './imgs/Snapshoot1.avif, ./imgs/Snapshoot Portfolio.png',
    tech1: 'html',
    tech2: 'bootstrap',
    tech3: 'ruby on rails',
    liveversion: '#liveversion',
    linksource: '#linksource',
  },
];

const deploypopup = (x) => {
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

const cardworksection =() => {
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

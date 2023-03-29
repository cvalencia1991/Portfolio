/* eslint-disable no-unused-vars */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
const projects = [
  {
    name: 'Space Travel Hub',
    description: 'SpaceTravelHub is live data from the SpaceX API. This application is developed for a commercial and scientific space travel company. Rockets and space missions will be available for booking through the application.',
    featuredimage: './imgs/spaceTravelHub.jpg',
    tech1: 'React',
    tech2: 'Redux',
    tech3: 'Bootstrap',
    liveversion: 'https://spacetravelhubspacex.netlify.app/',
    linksource: 'https://github.com/cvalencia1991/SpaceTravelHub',
  },
  {
    name: 'Chicago Art Gallery',
    description: 'A website that showcases artworks from the Art Institute of Chicago using their API. It displays high-quality images of various art forms, such as paintings, sculptures, and textiles.',
    featuredimage: './imgs/cichacoArtGallery.jpg',
    tech1: 'React',
    tech2: 'Redux',
    tech3: 'Jest',
    liveversion: 'https://chicagoartgallery.netlify.app/',
    linksource: 'https://github.com/cvalencia1991/Chicago-Art-Gallery',
  },
  {
    name: 'Bookstore CMS',
    description: 'Bookstore CMS allows users to add and remove books. It sends information to APIs. The system helps manage inventory and tracks book details such as author, title, and category.',
    featuredimage: './imgs/Bookstore.jpg',
    tech1: 'React',
    tech2: 'Redux',
    tech3: 'Bootstrap',
    liveversion: 'https://bookstorelibrary.netlify.app/',
    linksource: 'https://github.com/cvalencia1991/Bookstore-React',
  },
  {
    name: 'Deck Of Cards',
    description: 'Deck of Cards is an application that allows users to compare two cards and simplify the items. When the matches between the cards become empty, the user can proceed to the next level. The application includes a counter to keep track of the user\'s progress and a timer to add a time limit to each level.',
    featuredimage: './imgs/deckOfCards.jpg',
    tech1: 'HTML',
    tech2: 'CSS',
    tech3: 'JavaScript',
    liveversion: 'https://cvalencia1991.github.io/deck-of-cards/',
    linksource: 'https://github.com/cvalencia1991/deck-of-cards',
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
};
document.getElementById('closepopup').addEventListener('click', () => {
  const buttonCard = document.getElementById('popupmobile');
  buttonCard.style.display = 'none';
});

const cardworksection = () => {
  for (const project in projects) {
    const nameproject = projects[project].name;
    const { description } = projects[project];
    const { featuredimage } = projects[project];
    const { tech1 } = projects[project];
    const { tech2 } = projects[project];
    const { tech3 } = projects[project];
    const card = `<div class="grid2">
    <img src="${featuredimage}"  data-aos="flip-left" alt="" class="styleimg">
    <div class="lay-on-top" data-aos="flip-left">
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
};
cardworksection();

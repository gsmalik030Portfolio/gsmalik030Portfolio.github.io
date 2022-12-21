// const hamBurger = document.querySelector('.mobile-nav');
// const cellphoneNav = document.querySelector('.cellphone-nav');
// const iconHamburger = document.querySelector('.mobile-nav-icon');
// const hamburgerNavLinks = document.querySelectorAll('.nav-link');
// function displayNav() {
//   cellphoneNav.classList.toggle('active');
//   hamBurger.classList.toggle('HamBurger-hide');
// }
// function removeNav() {
//   cellphoneNav.classList.remove('active');
//   hamBurger.classList.remove('HamBurger-hide');
// }

// hamBurger.addEventListener('click', displayNav);
// iconHamburger.addEventListener('click', removeNav);

// // eslint-disable-next-line no-plusplus
// for (let i = 0; i < hamburgerNavLinks.length; i++) {
//   hamburgerNavLinks[i].addEventListener('click', removeNav);
// }

/* Popups */

const projects = [
  {
    image: 'images/mobile-Snapshoot-1.svg',
    title: 'Topic',
    name: 'CANOPY',
    devloper: 'Back End Dev',
    year: '2015',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
      framework1: 'html',
      framework2: 'Ruby on rails',
      framework3: 'css',
      framework4: 'javascript',
    demo: '#',
    source: '#',
  },
  {
    image: 'images/mobile-Snapshoot-2.svg',
    title: 'Multi-Post Stories',
    name: 'FACEBOOK',
    devloper: 'Back End Dev',
    year: '2015',
    description:
      'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
      framework1: 'html',
      framework2: 'Ruby on rails',
      framework3: 'css',
      framework4: 'javascript',
    demo: '#',
    source: '#',
  },
  {
    image: 'images/mobile-Snapshoot-3.svg',
    title: 'Facebook 360',
    name: 'FACEBOOK',
    devloper: 'Back End Dev',
    year: '2015',
    description:
      'Exploring the future of media in Facebooks first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
      framework1: 'html',
      framework2: 'Ruby on rails',
      framework3: 'css',
      framework4: 'javascript',
    demo: '#',
    source: '#',
  },
  {
    image: 'images/mobile-Snapshoot-4.svg',
    title: 'Uber Navigation',
    name: 'UBER',
    devloper: 'Back End Dev',
    year: '2015',
    description:
      'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    framework1: 'html',
    framework2: 'Ruby on rails',
    framework3: 'css',
    framework4: 'javascript',
    demo: '#',
    Source: '#',
  },
];

let count=0;

const startPoint=document.querySelector('.body')

function creatPopup(){
  startPoint.insertAdjacentHTML("afterbegin", `    <section class="popup padding: 5% 20%;">
  <article class="card-work">
    <img class="popup-icon" src="images/x-symbol-svgrepo-com.svg" alt="">
      <img class="project-image" src="" alt=" Portfolio snapshoot" />
    <div class="card-info-box">
      <h2 class="client-title"></h2>
      <ul class="client">
        <li class="client-name"></li>
        <li><div class="counter"></div></li>
        <li class="client-info devloper"></li>
        <li><div class="counter"></div></li>
        <li class="client-info year"></li>
      </ul>
      <p class="clint-info-text">
      </p>
      <ul class="framework-box">
        <li class="framework btn--normal framework1"></li>
        <li class="framework btn--normal framework2"></li>
        <li class="framework btn--normal framework3"></li>
        <li class="framework btn--normal framework4"></li>
      </ul>
      <div class="popup-btn">
        <a href="" class="demo "><button class="btn btn--normal btn-card">See Live</button></a>
        <a href="" class="source"><button class="btn btn--normal btn-card">See Source</button></a>
      </div>
    </div>
  </article>
</section>`);
}

creatPopup()
const projectTitle=document.querySelector('.client-title')
const  projectImage=document.querySelector('.project-image') 
const projectName=document.querySelector('.client-name')
const devloper=document.querySelector('.devloper')
const year=document.querySelector('.year')
const description=document.querySelector('.clint-info-text')
const framework1=document.querySelector('.framework1')
const framework2=document.querySelector('.framework2')
const framework3=document.querySelector('.framework3')
const framework4=document.querySelector('.framework4')
const demoLink=document.querySelector('.demo')
const sourceLink=document.querySelector('.source')
const projectButton=document.querySelectorAll('.card-btn')
const popupSection=document.querySelector('.popup')

projectButton.forEach((button) => {
button.addEventListener('click',() =>{
  count=parseInt(button.id)
projectTitle.textContent = projects[count].title;
projectImage.setAttribute('src', projects[count].image);
projectName.textContent = `${projects[count].name}`;
devloper.textContent = `${projects[count].devloper}`;
year.textContent = `${projects[count].year}`;
description.textContent = `${projects[count].description}`;
framework1.textContent = `${projects[count].framework1}`;
framework2.textContent = `${projects[count].framework2}`;
framework3.textContent = `${projects[count].framework3}`;
framework4.textContent = `${projects[count].framework4}`;
demoLink.setAttribute('href', `${projects[count].demo}`)
sourceLink.setAttribute('href', `${projects[count].source}`)
popupSection.classList.add('popup-active')
})
})







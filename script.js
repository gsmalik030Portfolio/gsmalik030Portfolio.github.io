const hamBurger = document.querySelector('.mobile-nav');
const cellphoneNav = document.querySelector('.cellphone-nav');
const iconHamburger = document.querySelector('.mobile-nav-icon');
const hamburgerNavLinks = document.querySelectorAll('.nav-link');
function displayNav() {
  cellphoneNav.classList.toggle('active');
  hamBurger.classList.toggle('HamBurger-hide');
}
function removeNav() {
  cellphoneNav.classList.remove('active');
  hamBurger.classList.remove('HamBurger-hide');
}

hamBurger.addEventListener('click', displayNav);
iconHamburger.addEventListener('click', removeNav);

// eslint-disable-next-line no-plusplus
for (let i = 0; i < hamburgerNavLinks.length; i++) {
  hamburgerNavLinks[i].addEventListener('click', removeNav);
}

/* Popups */

const projects = [
  {
    image: 'images/mobile-Snapshoot-1.svg',
    desktopImg: 'images/desktop-snapshot-1.svg',
    title: 'Topic',
    name: 'CANOPY',
    devloper: 'Back End Dev',
    year: '2015',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    framework1: 'html',
    framework2: 'CSS',
    framework3: 'javascript',
    framework4: 'Github',
    framework5: 'Ruby',
    framework6: 'Bootstrap',
    demo: 'https://gsmalik030portfolio.github.io/',
    source: 'https://github.com/gsmalik030Portfolio/gsmalik030Portfolio.github.io',
  },
  {
    image: 'images/mobile-Snapshoot-2.svg',
    desktopImg: 'images/desktop-snapshot-2.svg',
    title: 'Multi-Post Stories',
    name: 'FACEBOOK',
    devloper: 'Back End Dev',
    year: '2015',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    framework1: 'html',
    framework2: 'CSS',
    framework3: 'javascript',
    framework4: 'Github',
    framework5: 'Ruby',
    framework6: 'Bootstrap',
    demo: 'https://gsmalik030portfolio.github.io/',
    source: 'https://github.com/gsmalik030Portfolio/gsmalik030Portfolio.github.io',
  }, {
    image: 'images/mobile-Snapshoot-3.svg',
    desktopImg: 'images/desktop-snapshot-3.svg',
    title: 'Facebook 360',
    name: 'FACEBOOK',
    devloper: 'Back End Dev',
    year: '2015',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    framework1: 'html',
    framework2: 'CSS',
    framework3: 'javascript',
    framework4: 'Github',
    framework5: 'Ruby',
    framework6: 'Bootstrap',
    demo: 'https://gsmalik030portfolio.github.io/',
    source: 'https://github.com/gsmalik030Portfolio/gsmalik030Portfolio.github.io',
  },
  {
    image: 'images/mobile-Snapshoot-4.svg',
    desktopImg: 'images/desktop-snapshot-4.svg',
    title: 'Uber Navigation',
    name: 'UBER',
    devloper: 'Back End Dev',
    year: '2015',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    framework1: 'html',
    framework2: 'CSS',
    framework3: 'javascript',
    framework4: 'Github',
    framework5: 'Ruby',
    framework6: 'Bootstrap',
    demo: 'https://gsmalik030portfolio.github.io/',
    Source: 'https://github.com/gsmalik030Portfolio/gsmalik030Portfolio.github.io',
  },
];

let count = 0;

const startPoint = document.querySelector('.body');

function creatPopup() {
  startPoint.insertAdjacentHTML('afterbegin', `    <section id="popup" class="popup">
  <article class="card-work popup-card-work">
  <div class="card-info-box">
  <h2 class="client-title"></h2>
  <ul class="client">
    <li class="client-name"></li>
    <li><div class="counter"></div></li>
    <li class="client-info devloper"></li>
    <li><div class="counter"></div></li>
    <li class="client-info year"></li>
  </ul>
  </div>
    <img class="popup-icon" src="images/x-symbol-svgrepo-com.svg" alt="">

    <picture>
    <source class="desktop-img"
      media="(min-width:1230px)"
      srcset=""
    />
    <source class="mobile-img"
      media="(min-width:400px)"
      srcset=""
    />
    <img class="project-image" src="" alt="Portfolio snapshoot" />
  </picture>
    <div class="popup-card-info-box">
      <p class="clint-info-text">
      </p>
      <div>
        <ul class="framework-box">
          <li class="framework btn--normal framework1"></li>
          <li class="framework btn--normal framework2"></li>
          <li class="framework btn--normal framework3"></li>
          </ul>
          <ul class="framework-box">
          <li class="framework btn--normal framework4 desktop-fw"></li>
          <li class="framework btn--normal framework5 desktop-fw"></li>
          <li class="framework btn--normal framework6 desktop-fw"></li>
        </ul>
        <img class="line" src="images/Vector 4.svg" alt="Line Break">
        <div class="popup-btn">
          <a class="btn btn--normal btn-card popup-btn demo" href="">
          See Live
          <span>
            <img
              class="button-icons"
              src="./images/popup1.svg"
              alt="white live icon" /></span>
          </a>
          <a class="btn btn--normal btn-card popup-btn source" href="" >See Source<span>
            <img
              class="button-icons"
              src="images/popup2.svg"
              alt="white github icon"/></span>
          </a>
        </div>
      </div>
    </div>
  </article>
</section>`);
}
creatPopup();
const projectTitle = document.querySelector('.client-title');
const projectImage = document.querySelector('.project-image');
const desktopImg = document.querySelector('.desktop-img');
const mobileImg = document.querySelector('.mobile-img');
const projectName = document.querySelector('.client-name');
const devloper = document.querySelector('.devloper');
const year = document.querySelector('.year');
const description = document.querySelector('.clint-info-text');
const framework1 = document.querySelector('.framework1');
const framework2 = document.querySelector('.framework2');
const framework3 = document.querySelector('.framework3');
const framework4 = document.querySelector('.framework4');
const framework5 = document.querySelector('.framework5');
const framework6 = document.querySelector('.framework6');
const demoLink = document.querySelector('.demo');
const sourceLink = document.querySelector('.source');
const projectButton = document.querySelectorAll('.card-btn');
const popupSection = document.querySelector('.popup');

projectButton.forEach((button) => {
  button.addEventListener('click', () => {
    // eslint-disable-next-line radix
    count = parseInt(button.id);
    projectTitle.textContent = projects[count].title;
    projectImage.setAttribute('src', projects[count].image);
    mobileImg.setAttribute('srcset', projects[count].image);
    desktopImg.setAttribute('srcset', projects[count].desktopImg);
    projectImage.setAttribute('src', projects[count].image);
    projectName.textContent = `${projects[count].name}`;
    devloper.textContent = `${projects[count].devloper}`;
    year.textContent = `${projects[count].year}`;
    description.textContent = `${projects[count].description}`;
    framework1.textContent = `${projects[count].framework1}`;
    framework2.textContent = `${projects[count].framework2}`;
    framework3.textContent = `${projects[count].framework3}`;
    framework4.textContent = `${projects[count].framework4}`;
    framework5.textContent = `${projects[count].framework5}`;
    framework6.textContent = `${projects[count].framework6}`;
    demoLink.setAttribute('href', `${projects[count].demo}`);
    sourceLink.setAttribute('href', `${projects[count].source}`);
    popupSection.classList.add('popup-active');
  });
});
const popupIcon = document.querySelector('.popup-icon');
popupIcon.addEventListener('click', () => {
  popupSection.classList.remove('popup-active');
});

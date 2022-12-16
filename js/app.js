// GLOBAL VARIABLES .
const navbarList = document.querySelector('#navbar__list');

const navbarMenu = document.querySelector('.navbar__menu');

// CONVERT ALL SECTIONS TO AARAY .

const allSections = Array.from(document.querySelectorAll('section'));

// BUILD THE NAV MENU DYNAMICALLY BY FUNCTION &&
// CHANGE STYLE TO SMOOTH ON SCROLL &&
// When clicking an item from the navigation menu, the link  scroll to the appropriate section .

const bulidLi = () => {
  for (let i = 1; i <= allSections.length; i++) {
    let liEl = document.createElement('li');
    liEl.innerHTML = `<li class="menu__link section${i}"><a> Section ${i}</a></li>`;
    navbarList.appendChild(liEl);
    liEl.addEventListener('click', (x) => {
      x.preventDefault();
      allSections[i - 1].scrollIntoView({
        behavior: 'smooth',
      });
    });
  }
};

bulidLi();

// CHANGE CLASS NAME TO SECTION DYMNAMICALLY WHEN THE CLIENT IS ON THIS SECTION .

window.onscroll = () => {
  let section = document.querySelectorAll('section');
  section.forEach((key) => {
    let x = key.getBoundingClientRect().top;
    if (x >= 0 && x <= 300) {
      key.classList.add('your-active-class');
      navbarList.querySelector(`.${key.id}`).classList.add('active__link');
    } else {
      key.classList.remove('your-active-class');
      navbarList.querySelector(`.${key.id}`).classList.remove('active__link');
    }
  });
};

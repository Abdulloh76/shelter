

// DOM Elements
const burger=document.querySelector('.burger');
const navBar=document.querySelector('.navigation');
const logo=document.querySelector('.header__logo');


// NavBar
const showNavBar = () => {
  burger.classList.toggle('burger-active');
  navBar.classList.toggle('navigation-active');
  logo.classList.toggle('logo-move');
  
  document.addEventListener('click', e => {
    if(e.target.closest('.burger') === burger) return
    else if(navBar.classList.contains('navigation-active') && !e.target.classList.contains('navigation'))
      showNavBar();
  })

}

// Pets Generation


// Events
burger.addEventListener('click', showNavBar);

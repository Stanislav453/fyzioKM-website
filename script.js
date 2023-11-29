let navIcon1 = document.getElementById('nav-icon1');
let buttonPhone = document.getElementsByClassName('menu-button-phone')[0];
let headerNavShow = document.getElementsByClassName('header-nav')[0];
let headerPhone = document.getElementsByClassName('menu-button-phone')[0];
let headerPhoneContainer = document.getElementsByClassName(
  'header-contact-container'
)[0];
let headerPhoneCLoseButton = document.getElementsByClassName('hide-phone')[0];
let aboutReadMore = document.getElementsByClassName('about-read-more')[0];
let aboutReadMoreWrapper =
  document.getElementsByClassName('about-me-wrapper')[0];
let cursContentContainer = document.querySelectorAll('.curs-content-container');
let openWrapperB = document.querySelectorAll('.open-wrapper-b');
let bxsChevronsDown = document.querySelectorAll('.bxs-chevrons-down');

////////////////////////CODE
navIcon1.addEventListener('click', function () {
  navIcon1.classList.toggle('open');
  headerNavShow.classList.toggle('header-nav-show');
});

headerPhone.addEventListener('click', function () {
  headerPhoneContainer.classList.add('header-contact-container-show');
});

headerPhoneCLoseButton.addEventListener('click', function () {
  headerPhoneContainer.classList.remove('header-contact-container-show');
});

aboutReadMore.addEventListener('click', () => {
  aboutReadMoreWrapper.classList.toggle('wrapper-content-open');
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      document.querySelectorAll('.animated')[0].classList.add('fade-left');
      document.querySelectorAll('.animated')[1].classList.add('fade-right');
    }
  });
});

observer.observe(document.querySelector('.about-me-content-container'));

const priceList = new IntersectionObserver((item) => {
  item.forEach((entry) => {
    if (entry.isIntersecting) {
      document.querySelectorAll('.box')[0].classList.add('fade-block');
      document.querySelectorAll('.box')[1].classList.add('fade-block');
      document.querySelectorAll('.box')[1].style.animationDelay = '.7s';
      document.querySelectorAll('.box')[2].classList.add('fade-block');
      document.querySelectorAll('.box')[2].style.animationDelay = '.9s';
      document.querySelectorAll('.box')[3].classList.add('fade-block');
      document.querySelectorAll('.box')[3].style.animationDelay = '1.1s';
      document.querySelectorAll('.box')[4].classList.add('fade-block');
      document.querySelectorAll('.box')[4].style.animationDelay = '1.3s';
      document.querySelectorAll('.box')[5].classList.add('fade-block');
      document.querySelectorAll('.box')[5].style.animationDelay = '1.5s';
      document.querySelectorAll('.box')[6].classList.add('fade-block');
      document.querySelectorAll('.box')[6].style.animationDelay = '1.7s';
      document.querySelectorAll('.box')[7].classList.add('fade-block');
    }
  });
});

priceList.observe(document.querySelector('.price-list-content'));

// TIMELINE

(function () {
  'use strict';

  // define variables
  let items = document.querySelectorAll('.curs-container');

  // check if an element is in viewport
  // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
  function isElementInViewport(el) {
    let rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function callbackFunc() {
    for (let i = 0; i < items.length; i++) {
      if (isElementInViewport(items[i])) {
        items[i].classList.add('fade-bottom');
      }
    }
  }

  // listen for events
  window.addEventListener('load', callbackFunc);
  window.addEventListener('resize', callbackFunc);
  window.addEventListener('scroll', callbackFunc);
})();

openWrapperB.forEach((item, buttonId) =>
  item.addEventListener('click', () => {
    cursContentContainer.forEach((item, itemId) => {
      if (buttonId === itemId) {
        item.classList.toggle('curs-content-container-is-open');
        bxsChevronsDown[itemId].classList.toggle('icon-move');
      }
    });
  })
);

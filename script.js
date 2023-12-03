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
let serviceContainerP = document.querySelectorAll(
  '.service-cont-left > ul > li > .service-container-p'
);
let bxsDownArrow = document.querySelectorAll('.bxs-down-arrow');
let serviceLiHeader = document.querySelectorAll('.service-li-header');
let serviceContainerPright = document.querySelectorAll(
  '.service-cont-right > ul > li > .service-container-p'
);
let serviceLiHeaderRight = document.querySelectorAll(
  '.service-cont-right > ul > li > .service-li-header'
);

let bxsDownArrowRight = document.querySelectorAll(
  ' .service-cont-right > ul > li > .service-li-header > button > .bxs-down-arrow'
);

let serviceContLeftUlLi = document.querySelectorAll(
  '.service-cont-left > ul > .section-list'
);

let serviceContRightUlLi = document.querySelectorAll(
  '.service-cont-right > ul > .section-list'
);

let aboutMeBlock = document.querySelectorAll('.animated');
let box = document.querySelectorAll('.box');

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

// TIMELINE
(function () {
  ('use strict');

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
    if (isElementInViewport(aboutMeBlock[0])) {
      aboutMeBlock[0].classList.add('fade-left');
    }

    if (isElementInViewport(aboutMeBlock[1])) {
      aboutMeBlock[1].classList.add('fade-right');
    }

    box.forEach((item, key) => {
      if (isElementInViewport(item)) {
        item.classList.add('fade-block');
      }
    });

    for (let i = 0; i < items.length; i++) {
      if (isElementInViewport(items[i])) {
        items[i].classList.add('fade-bottom');
      }
    }

    for (let i = 0; i < serviceContLeftUlLi.length; i++) {
      if (isElementInViewport(serviceContLeftUlLi[i])) {
        serviceContLeftUlLi[i].classList.add('fade-bottom');
      }
    }

    for (let i = 0; i < serviceContRightUlLi.length; i++) {
      if (isElementInViewport(serviceContRightUlLi[i])) {
        serviceContRightUlLi[i].classList.add('fade-bottom');
      }
    }
  }

  //serviceLiHeader

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

serviceLiHeader.forEach((item, buttonId) =>
  item.addEventListener('click', () => {
    serviceContainerP.forEach((item, itemId) => {
      if (buttonId === itemId) {
        item.classList.toggle('service-container-p-show');
        bxsDownArrow[itemId].classList.toggle('icon-move');
      }
    });
  })
);

serviceLiHeaderRight.forEach((item, buttonId) =>
  item.addEventListener('click', () => {
    serviceContainerPright.forEach((item, itemId) => {
      if (buttonId === itemId) {
        item.classList.toggle('service-container-p-show');
        bxsDownArrowRight[itemId].classList.toggle('icon-move');
      }
    });
  })
);

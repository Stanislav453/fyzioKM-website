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
let methodUlList = document.querySelectorAll('.method-ul li');
let methodUl = document.querySelectorAll('.method-ul');
let methodCount = document.querySelector('.method-count');
let animationMethodCountExecuted = false;
let galleryImg = document.querySelectorAll('.img-container > div > img');

const animationMethodCount = () => {
  const interval = setInterval(() => {
    ++methodCount.innerText;

    if (methodCount.innerText >= methodUlList.length) {
      clearInterval(interval);
      animationMethodCountExecuted = true;
    }
  }, 30);
};

const observerOne = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !animationMethodCountExecuted) {
        animationMethodCount();
      }
    });
  },
  {
    threshold: 0.5,
  }
);

const countersOne = document.querySelectorAll('.method-count');
countersOne.forEach((c) => observerOne.observe(c));

const counters = document.querySelectorAll('.value'),
  speed = 400,
  observer = new IntersectionObserver(
    (entries) =>
      entries.forEach((entry) => entry.isIntersecting && animate(entry.target)),
    {
      threshold: 1,
    }
  ),
  animate = (counter) => {
    const value = +counter.dataset.value,
      data = +counter.innerText,
      time = value / speed;
    if (data < value) {
      counter.innerText = Math.ceil(data + time);
      setTimeout(() => animate(counter), 25);
    } else {
      counter.innerText = value + '€';
    }
  };

counters.forEach((c) => observer.observe(c));

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

(function () {
  let items = document.querySelectorAll('.curs-container');

  function isElementInViewport(el, once = false) {
    let rect = el.getBoundingClientRect();
    const isVisible =
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth);

    if (once && isVisible) {
      el.classList.add('fade-in');
    }

    return isVisible;
  }

  function callbackFunc() {
    if (isElementInViewport(aboutMeBlock[0], true)) {
      aboutMeBlock[0].classList.add('fade-left');
    }

    if (isElementInViewport(aboutMeBlock[1], true)) {
      aboutMeBlock[1].classList.add('fade-right');
    }

    box.forEach((item) => {
      if (isElementInViewport(item, true)) {
        item.classList.add('fade-block');
      }
    });

    methodUl.forEach((item) => {
      if (isElementInViewport(item, true)) {
        item.classList.add('fade-block');
      }
    });

    for (let i = 0; i < items.length; i++) {
      if (isElementInViewport(items[i], true)) {
        items[i].classList.add('fade-bottom');
      }
    }

    for (let i = 0; i < serviceContRightUlLi.length; i++) {
      if (isElementInViewport(serviceContRightUlLi[i], true)) {
        serviceContRightUlLi[i].classList.add('fade-bottom');
      }
    }

    for (let i = 0; i < serviceContLeftUlLi.length; i++) {
      if (isElementInViewport(serviceContLeftUlLi[i], true)) {
        serviceContLeftUlLi[i].classList.add('fade-bottom');
      }
    }

        for (let i = 0; i < galleryImg.length; i++) {
          if (isElementInViewport(galleryImg[i], true)) {
            galleryImg[i].classList.add('fade-block');
          }
        }


  }

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

// ====== GALLERY ============================

galleryImg.forEach((item, key) => {
  item.addEventListener('click', function () {
    let imgCount = key;
    let imgModal = document.createElement('div');
    let imgSrc = document.createElement('img');
    let modalContainer = document.createElement('div');
    let imgContainer = document.createElement('div');
    let closeBtn = document.createElement('i');
    let arrowRight = document.createElement('i');
    let arrowLeft = document.createElement('i');
    closeBtn.setAttribute('class', 'bx bxs-x-circle');
    arrowRight.setAttribute('class', 'bx bxs-right-arrow');
    arrowLeft.setAttribute('class', 'bx bxs-left-arrow');
    imgModal.classList.add('img-modal');
    imgContainer.classList.add('select-img');
    modalContainer.classList.add('photo-container');
    document.body.appendChild(imgModal);
    imgModal.append(modalContainer, closeBtn);
    modalContainer.append(arrowLeft, imgContainer, arrowRight);
    imgContainer.append(imgSrc);

    closeBtn.addEventListener('click', function () {
      imgModal.remove();
    });

    arrowRight.addEventListener('click', function () {
      imgCount = (imgCount + 1) % galleryImg.length; 
      updateImg();
    });

  

    arrowLeft.addEventListener('click', function () {
      imgCount = (imgCount - 1 + galleryImg.length) % galleryImg.length; 
      updateImg();
    });

    const updateImg = () => {
      imgSrc.setAttribute('src', galleryImg[imgCount].src);
    };

    updateImg()
  });
});

// == BACK TO HOME BUTTON ===================================

let backToHome = document.querySelector('.back_to_home');

window.addEventListener('scroll', function () {
  let scroll = this.window.scrollY;

  if (Math.ceil(scroll) > 400) {
    backToHome.style.opacity = 1;
  } else {
    backToHome.style.opacity = 0;
  }
});

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

// console.log(aboutReadMoreWrapper)

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
      document.querySelectorAll('.animated')[0].classList.add('fade-block');
      document.querySelectorAll('.animated')[1].classList.add('fade-block');
    }
  });
});

observer.observe(document.querySelector('.about-me-content-container'));

const priceList = new IntersectionObserver((item) => {
  item.forEach((entry) => {
    if (entry.isIntersecting) {
      document.querySelectorAll('.box')[0].classList.add('fade-block');
      document.querySelectorAll('.box')[1].classList.add('fade-block');
      document.querySelectorAll('.box')[2].classList.add('fade-block');
      document.querySelectorAll('.box')[3].classList.add('fade-block');
      document.querySelectorAll('.box')[4].classList.add('fade-block');
      document.querySelectorAll('.box')[5].classList.add('fade-block');
      document.querySelectorAll('.box')[6].classList.add('fade-block');
      document.querySelectorAll('.box')[7].classList.add('fade-block');
    }
  });
});

priceList.observe(document.querySelector('.price-list-content'));

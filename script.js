let navIcon1 = document.getElementById('nav-icon1');
let buttonPhone = document.getElementsByClassName('menu-button-phone')[0];
let headerNavShow = document.getElementsByClassName('header-nav')[0];
let headerPhone = document.getElementsByClassName('menu-button-phone')[0];
let headerPhoneContainer = document.getElementsByClassName('header-contact-container')[0];
let headerPhoneCLoseButton = document.getElementsByClassName('hide-phone')[0];

  // getElementsByClassName(headerPhoneContainer);

navIcon1.addEventListener('click', function () {
  navIcon1.classList.toggle('open');
  headerNavShow.classList.toggle('header-nav-show');
});


headerPhone.addEventListener('click', function () {
  headerPhoneContainer.classList.add('header-contact-container-show');
});

headerPhoneCLoseButton.addEventListener('click', function ()  {
  headerPhoneContainer.classList.remove('header-contact-container-show');
})

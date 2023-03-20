const hamburger = document.querySelector('#hamburger');
const navUl = document.querySelector('#nav-Ul');

hamburger.onclick = function() {
  if (navUl.classList.contains('show')) {
    navUl.classList.remove('show');
  } else {
    navUl.classList.add('show');
  }
};

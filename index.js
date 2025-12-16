const blurElement = document.querySelector('.blur');
const cartMenu = document.querySelector('.cartMenu');
const mobileMenu = document.querySelector('.mobile-wrapper');

const removeActiveClasses = () => {
  blurElement.classList.remove('blur--show');
  cartMenu.classList.remove('cartMenu--open');
  mobileMenu.classList.remove('mobile-wrapper--active');

  blurElement.removeEventListener('click', removeActiveClasses);
};

blurElement.addEventListener('click', removeActiveClasses);

document.querySelector('.burger').addEventListener('click', () => {
  blurElement.classList.add('blur--show');
  mobileMenu.classList.add('mobile-wrapper--active');
});

document.querySelector('.burger--close').addEventListener('click', () => {
  blurElement.classList.remove('blur--show');
  mobileMenu.classList.remove('mobile-wrapper--active');
});

document.querySelector('.header__cart-button')?.addEventListener('click', () => {
  blurElement.classList.add('blur--show');
  cartMenu.classList.add('cartMenu--open');
});

document.querySelector('.cartMenu__close-button')?.addEventListener('click', () => {
  blurElement.classList.remove('blur--show');
  cartMenu.classList.remove('cartMenu--open');
});

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 100) {
    document.querySelector('.header').classList.add('header--moved');
  } else {
    document.querySelector('.header--moved')?.classList.remove('header--moved');
  }
});

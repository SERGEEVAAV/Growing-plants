const sandwichmenu = document.querySelector('#sandwichmenu');
const header__navigation = document.querySelector('.header__navigation');

sandwichmenu.addEventListener('click', (e)  => {
  e.preventDefault();
//   document.body.classList.toggle('_lock');
sandwichmenu.classList.toggle('_active');
header__navigation.classList.toggle('_active');
});
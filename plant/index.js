const sandwichmenu = document.querySelector('#sandwichmenu');
const header__navigation = document.querySelector('.header__navigation');

sandwichmenu.addEventListener('click', (e)  => {
  e.preventDefault();
//   document.body.classList.toggle('_lock');
sandwichmenu.classList.toggle('_active');
header__navigation.classList.toggle('_active');
});


const selectSingle = document.querySelector('.contact-us__select');
const selectSingle_title = selectSingle.querySelector('.contact-us__select__title');
const selectSingle_labels = selectSingle.querySelectorAll('.contact-us__select__label');

// Toggle menu
selectSingle_title.addEventListener('click', () => {
  if ('active' === selectSingle.getAttribute('data-state')) {
    selectSingle.setAttribute('data-state', '');
  } else {
    selectSingle.setAttribute('data-state', 'active');
  }
});

// Close when click to option
for (let i = 0; i < selectSingle_labels.length; i++) {
  selectSingle_labels[i].addEventListener('click', (evt) => {
    selectSingle_title.textContent = evt.target.textContent;
    selectSingle.setAttribute('data-state', '');
  });
}

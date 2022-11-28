import { Article } from "./js/Article";
import { Modal } from "./js/Modal";
const data = [
  {
    id: 1,
    city: 'City: Canandaigua, NY',
    phone: 'Phone: +1	585	393 0001',
    adress: 'Office adress: 151 Charlotte Street',
    tags: ['Call us']
  },
  {
    id: 2,
    city: 'City: New York City',
    phone: 'Phone: +1	212	456 0002',
    adress: 'Office adress: 9 East 91st Street',
    tags: ['Call us']
  },
  {
    id: 3,
    city: 'City: Yonkers, NY',
    phone: 'Phone: +1	914	678 0003',
    adress: 'Office adress: 511 Warburton Ave',
    tags: ['Call us']
  },
  {
    id: 4,
    city: 'City: Sherrill, NY',
    phone: 'Phone: +1	315	908 0004',
    adress: 'Office adress: 14 WEST Noyes BLVD',
    tags: ['Call us']
  }
]


window.onload = function() {
 console.log('Hello!!!');

//Render Articles
// if(data) {
//   renderArticlesToDom();
// }

  //tags
  addTagsClickHandler();

  //Generate Base Modal from Modal Class
  addToolsClickHandler();
}

const addTagsClickHandler = () => {
  document.querySelector('.stratigies__tags').addEventListener('click', (e) => {
    if(e.target.classList.contains('tag')) {
      let clickedTag = e.target;
      removeSelectedTags();
      selectClickedTag(clickedTag);
      if (clickedTag.innerText === 'All') {
         showAllStrategies();
      } else {
        filterStrategyBySelectedTag(clickedTag.innerText);
      }
      
    }
  })
}

const removeSelectedTags = () => {
  let tags = document.querySelectorAll('.stratigies__tags .tag');
  tags.forEach(tag => {
    tag.classList.remove('tag__selected');
    tag.classList.add('tag__bordered');
  })
}

const selectClickedTag = (clickedTag) => {
  clickedTag.classList.add('tag__selected');
  clickedTag.classList.remove('tag__bordered');
}

const showAllStrategies = () => {
  let strategies = document.querySelectorAll('.strategy-wrapper .strategy');
  strategies.forEach(strategy => {
    strategy.classList.remove('strategy_hidden');
    
  })
}


const filterStrategyBySelectedTag = (selectedTag) => {
  let strategies = document.querySelectorAll('.strategy-wrapper .strategy');
  strategies.forEach(strategy => {
    strategy.classList.add('strategy_hidden');
    strategy.querySelectorAll('.name').forEach(name => {
      if(name.innerText === selectedTag) {
        strategy.classList.remove('strategy_hidden');
      }
    })
  })
}


const addToolsClickHandler = () => {
  document.querySelector('.button-price__contact').addEventListener('click', () => {
    generateToolsModal();
  })
}

const generateToolsModal = () => {
  renderModalWindow('Test content');
}

const renderModalWindow = (content) => {
  let modal = new Modal ('tools-modal');
  modal.buildModal(content)
}


// const renderArticlesToDom = () => {
//   let selectedWrapper = getSelectedWrapper();
//   generateArticles(data).forEach(article => {
//     selectedWrapper.append(article.generateArticle());
//   });
// }

// const getSelectedWrapper = () => {
//   const selectedContainer = document.querySelector('.selected__wrapper');
//   selectedContainer.innerHTML = '';
//   return  selectedContainer
// }

// const generateArticles = (data) => {
//   let articles = [];
//   data.forEach(article => {
//     articles.push(new Article(article))
//   });
 
//   return articles;
// }





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

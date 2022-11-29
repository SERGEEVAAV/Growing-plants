import { Article } from "./js/Article";
import { ArticleModal } from "./js/ArticleModal";
import { Modal } from "./js/Modal";
const data = [
  {
    id: 1,
    title: 'Garden care',
    paragraph: 'Lorem Ipsum has been the industry',
    urlToImage: './img/cards/1.jpg',
    tags: ['Art', 'Design'],
    content: 'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?',
    data: '01.01.2022'
  },
  {
    id: 2,
         title: 'Planting',
         paragraph: 'Lorem Ipsum has been the industry',
         urlToImage: './img/cards/2.jpg',
         tags: ['Art', 'Design'],
         content: 'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?',
         data: '01.01.2022'
  },
  {
    id: 3,
         title: 'Lawn care',
         paragraph: 'Lorem Ipsum has been the industry',
         urlToImage: './img/cards/3.jpg',
         tags: ['Art', 'Design'],
         content: 'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?',
         data: '01.01.2022'
  },
  {
    id: 4,
         title: 'Planting',
         paragraph: 'Lorem Ipsum has been the industry',
         urlToImage: './img/cards/4.jpg',
         tags: ['Art', 'Design'],
         content: 'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?',
         data: '01.01.2022'
  },
  {
    id: 5,
    title: 'Garden care',
    paragraph: 'Lorem Ipsum has been the industry',
    urlToImage: './img/cards/5.jpg',
    tags: ['Art', 'Design'],
    content: 'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?',
    data: '01.01.2022'
  },
  {
    id: 6,
    title: 'Planting',
    paragraph: 'Lorem Ipsum has been the industry',
    urlToImage: './img/cards/6.jpg',
    tags: ['Art', 'Design'],
    content: 'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?',
    data: '01.01.2022'
  },

]


window.onload = function() {
 console.log('Hello!!!');

//Render Articles
if(data) {
  renderArticlesToDom();
}

  //tags
  addTagsClickHandler();

  //Generate Base Modal from Modal Class
  addToolsClickHandler();
}

const addTagsClickHandler = () => {
  document.querySelector('.strategies__tags').addEventListener('click', (e) => {
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


const filterStrategyBySelectedTag = (selectedName) => {
  let strategies = document.querySelectorAll('.strategy-wrapper .strategy');
  strategies.forEach(strategy => {
    strategy.classList.add('strategy_hidden');
    strategy.querySelectorAll('.name').forEach(name => {
      if(name.innerText === selectedName) {
        strategy.classList.remove('strategy_hidden');
      }
    })
  })
}

const renderArticlesToDom = () => {
  let strategiesWrapper = getStrategiesWrapper();
  generateArticles(data).forEach(article => {
    strategiesWrapper.append(article.generateArticle());
  })
  addStrategyClickHandler();
}

const getStrategiesWrapper = () => {
  const strategiesConstainer = document.querySelector('.strategy-wrapper');
  strategiesConstainer.innerHTML = '';
  return  strategiesConstainer
}

const generateArticles = (data) => {
  let articles = [];
  data.forEach(article => {
    articles.push(new Article(article))
  });
 
  return articles;
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




const addStrategyClickHandler = () => {
  document.querySelector('.strategy-wrapper').addEventListener('click', (e) => {
    if(e.target.closest('.strategy')) {
      let clickedStrategyId = e.target.closest('.strategy').getAttribute('data-id');    
      let clickedStrategyData = getClickedData(clickedStrategyId);

      renderArticleModalWindow(clickedStrategyData);
    }
    
  })
}

const getClickedData = (id) => {
  return data.find(article => article.id == id)
}

const renderArticleModalWindow = (article) => {
  let modal = new ArticleModal ('article-modal', article);
  modal.renderModal();
}











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

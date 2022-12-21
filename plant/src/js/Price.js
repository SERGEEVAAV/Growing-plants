// import { Modal } from "./Modal";

// export class Price extends Modal {
//     constructor({ id, paragraph, paragraph, tags,  ...rest }) {
//         this.id = id;
//         this.paragraph = paragraph;
//         this.value = value;
//         this.tags = tags;
        
//     }


//     //PriceModal generator

//     generatePrices() {
//         let template = '';
//         let article = document.createElement('div');
//         article.className = 'article-modal__content';

//         if(this.paragraph || this.value || this.tags) {
//             template += `div class="button-price__content"`

//             this.paragraph &&
//             (template += `<p class="button-price__text">${this.paragraph}</p>`)

//             this.value &&
//             (template += `<span class="button-price__value">${this.paragraph}</span>`)

//             if(this.tags) {
//                 template += `<div class="strategy__tags tags">`

//                 this.tags.map(tag => {
//                     template += `<span class="tag tag_colored">${tag}</span>`
//                 })

//                 template += `</div>`
//             }

//             template += `</div>`           
//         }
//         article.innerHTML = template;
//         return article;
//     }
//     renderModal() {
//         let content = this.generatePrices();
//         super.buildModal(content);
//     }
// }


const buttonClick = document.querySelector(".ico");


buttonClick.addEventListener('click',() => {
  const item = document.querySelector('.button-price');
  const p = document.querySelector('.button-price__text');
  const span = document.querySelector('.button-price__value');
  const button = document.querySelector('.button-price__order');
  
  
  if(!item.classList.contains('opened')) {
    item.classList.add('opened');
    let div = document.createElement('div');
    div.className = 'button-price__content';
    

    const p = document.createElement('p');
    p.className = 'button-price__text';
    var textNode = document.createTextNode('Release of Letraset sheets containing Lorem Ipsum passages, and more recently');
    p.append(textNode);

    const span = document.createElement('span');
    span.className = 'button-price__value';
    var textNode = document.createTextNode('$25 / per hour');
    span.append(textNode);
    
    const button = document.createElement('button');
    button.className = 'button-price__order';
    var textNode = document.createTextNode('order');
    button.append(textNode);

    item.append(p, span, button);
  }else {
    item.classList.remove('opened'); 
    p.style.display='none';  
    span.style.display='none'; 
    button.style.display='none'; 
  }

});


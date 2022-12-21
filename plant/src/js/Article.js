export class Article {
    constructor({ id, title, subtitle, urlToImage, paragraph, ...rest }) {
        this.id = id;
        this.title = title;
        this.subtitle = subtitle;
        this.urlToImage = urlToImage;
        this.paragraph = paragraph;
        
    }

    //Article generatot
    generateArticle() {
        let template = '';
        let article = document.createElement('article');
        article.className = 'strategy block-shadowed';
        article.setAttribute('data-id', this.id);

        this.urlToImage &&
        (template += `<img class="strategy__image" src=${this.urlToImage} alt="strategy">`)

        if (this.title  ||this.subtitle || this.paragraph) {
            template += `<div class="strategy__content">`

            this.subtitle &&
            (template += `<h3 class="strategy__header">${this.subtitle}</h3>`)

            this.title &&
           (template += `<h3 class="strategy__name">${this.title}</h3>`)


           this.paragraph &&
           (template += `<p class="strategy__text">${this.paragraph}</p>`)

           
  
            template += `</div>`
        }

        article.innerHTML = template;
        return article;
    }
}
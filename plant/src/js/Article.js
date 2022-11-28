export class Article {
    constructor({id, city, phone, adress, tags, ...rest}) {
        this.id = id;
        this.city = city;
        this.phone = phone;
        this.adress = adress;
        this.tags = tags;
    }

    //Article generator
    generateArticle() {
        let template = '';
        let article = document.createElement('article');
        article.className = 'contact-us__select__label';
        article.setAttribute('data-id', this.id);

        this.city &&
        (template += `<h4 class="popup__city">${this.city}</h4>`);

        this.phone &&
        (template += `h4 class="popup__phone">${this.phone}</h4>`);

        this.adress &&
        (template += `h4 class="popup__adress">${this.adress}</h4>`);

        this.tags &&
        (template += `div class="popup__tags">${this.tags}</div>`);

        article.innerHTML = template;
        console.log(article);
        // console.log(article.innerHTML);
        return article;
    }
}
export class Modal {
    constructor (classes) {
        this.classes = classes;
        this.modal = '';
        this.modalContent ='';
        this.modalCallBtn = '';
        this.overlay = '';
        
    }

    buildModal(content) {
        //Overlay
        this.overlay = this.createDomNode(this.overlay, 'div', 'overlay', 'overlay_modal');

        //Modal
        this.modal = this.createDomNode(this.modal, 'div', this.classes);

        //Content
        this.modalContent = this.createDomNode(this.modalContent, 'div', 'modal__content');

        //modalCallBtn
        this.modalCallBtn = this.createDomNode(this.modalCallBtn, 'span', 'modal__call-btn');

        this.setContent(content);

        this.appendModalElements();
        
        //Open Modal
        this.openModal();
        
    }
    createDomNode (node, element, ...classes) {
        node = document.createElement(element);
        node.classList.add(...classes);
        return node
    };

    setContent(content) {
        if(typeof content === 'string') {
            this.modalContent.innerHTML = content;
        }else{
            this.modalContent.innerHTML = '';
            this.modalContent.appendChild(content);
        }
    }

    appendModalElements() {
        this.modal.append(this.modalCallBtn);
        this.modal.append(this.modalContent);
        this.overlay.append(this.modal);
    }

    openModal () {
        
        document.body.append(this.overlay);
        console.log('this.overlay');
    }
       
}
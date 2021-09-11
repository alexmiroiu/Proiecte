export class Spinner {
    constructor() {
        this.spinnerTemplate = document.querySelector('.loading-spinner');

    }

    create(parentElement) {
        this.spinner = document.importNode(this.spinnerTemplate.content, true);
        parentElement.appendChild(this.spinner);
    }


}
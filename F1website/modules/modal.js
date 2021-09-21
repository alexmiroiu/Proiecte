export class Modal {
    constructor() {
        this.modalTemplate = document.getElementById('modal');
    }

    render() {
        const modal = document.importNode(this.modalTemplate.content, true);
        document.body.appendChild(modal);
        document.querySelector('button').addEventListener('click', () => {
            document.querySelector('.modal-container').remove();
        })
    }


}
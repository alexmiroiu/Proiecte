export class Display {
    constructor() {
        this.content = document.querySelector('.display');
    }

    clear() {
        this.content.innerHTML = '';
    }
}
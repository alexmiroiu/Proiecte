export class SearchDrivers {
    constructor() {
        this.apiUrl = 'https://ergast.com/api/f1/drivers.json';
        this.display = document.querySelector('.display');

    }

    async getData() {
        const rawData = await fetch(this.apiUrl);
        const jsonData = await rawData.json();
        console.log(jsonData);
    }
}
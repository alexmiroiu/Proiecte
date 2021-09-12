import { Spinner } from './spinner.js';
import { Display } from './display.js';


export class Calendar {
    constructor() {
        this.display = document.querySelector('.display');
        this.url = 'https://ergast.com/api/f1/current.json';
        this.calendarTemplate = document.querySelector('.calendar');
        this.calendarItemTemplate = document.querySelector('.calendar-item');
        this.pageLimit = 20;
        this.currentPage = 0;
        this.active = false;
    }

    async getData() {
        const data = await fetch(this.url);
        const parsedData = await data.json();
        const racesData = parsedData.MRData.RaceTable.Races;
        const allRaces = [];
        this.active = true;
        racesData.forEach(race => {
            const raceItem = {
                name: race.raceName,
                roundNumber: race.round,
                country: race.Circuit.Location.country,
                date: race.date,
                info: race.url
            }
            allRaces.push(raceItem);
        })
        return allRaces;
    }

    async getPages() {
        let racesList = await this.getData();
        let racesPaginated = [];
        while (racesList.length) {
            const arr = racesList.splice(0, this.pageLimit);
            racesPaginated.push(arr);
        }
        return racesPaginated;
    }

    renderList() {
        this.calendarElements = document.importNode(this.calendarTemplate.content, true);
        this.raceListElement = this.calendarElements.querySelector('.calendar-list')
        this.display.appendChild(this.calendarElements);
    }

    async render(buttonText) {
        const loadingSpinner = new Spinner();
        const display = new Display();
        if (buttonText === 'Race Calendar') {
            loadingSpinner.create(this.display);
            const races = await this.getPages();
            display.clear()
            this.renderList();
            races[0].forEach(race => {
                const raceElement = document.importNode(this.calendarItemTemplate.content, true);
                raceElement.querySelector('.race-name').textContent = race.name;
                raceElement.querySelector('.race-round').textContent = race.roundNumber;
                raceElement.querySelector('.race-country').textContent = race.country;
                raceElement.querySelector('.race-date').textContent = race.date;
                raceElement.querySelector('.race-info').href = race.info;
                this.raceListElement.appendChild(raceElement);
            });
            console.log(this.raceListElement.children)

        }
        if (buttonText === 'Previous') {
            if (this.currentPage === 0) {
                return;
            } else {
                const races = await this.getPages();
                display.clear();
                this.renderList();
                this.currentPage--;
                races[0].forEach(race => {
                    const raceElement = document.importNode(this.calendarItemTemplate.content, true);
                    raceElement.querySelector('.race-name').textContent = race.name;
                    raceElement.querySelector('.race-round').textContent = race.roundNumber;
                    raceElement.querySelector('.race-country').textContent = race.country;
                    raceElement.querySelector('.race-date').textContent = race.date;
                    raceElement.querySelector('.race-info').href = race.info;
                    this.raceListElement.appendChild(raceElement);
                })
            }
        }
        if (buttonText === 'Next') {
            if (this.currentPage === 1) {
                return;
            } else {
                const races = await this.getPages();
                display.clear();
                this.renderList();
                this.currentPage++;
                races[1].forEach(race => {
                    const raceElement = document.importNode(this.calendarItemTemplate.content, true);
                    raceElement.querySelector('.race-name').textContent = race.name;
                    raceElement.querySelector('.race-round').textContent = race.roundNumber;
                    raceElement.querySelector('.race-country').textContent = race.country;
                    raceElement.querySelector('.race-date').textContent = race.date;
                    raceElement.querySelector('.race-info').href = race.info;
                    this.raceListElement.appendChild(raceElement);
                })
            }
        }

    }

}
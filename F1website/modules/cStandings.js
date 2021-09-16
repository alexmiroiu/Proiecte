import {
    Spinner
} from './spinner.js';

export class CStandings {
    constructor() {
        this.apiUrl = 'https://ergast.com/api/f1/current/constructorStandings.json';
        this.display = document.querySelector('.display');
        this.constructorStandingsElementsTemplate = document.getElementById('constructors-standings');
        this.constructorItemTemplate = document.getElementById('constructor');
        this.constructorHeaderTemplate = document.getElementById('constructors-header');

    }

    async getData() {
        if (sessionStorage.getItem('cStandings')) {
            const requiredData = JSON.parse(sessionStorage.getItem('cStandings'));
            return requiredData;
        } else {
            const rawData = await fetch(this.apiUrl);
            const parsedData = await rawData.json();
            const filteredParsedData = parsedData.MRData.StandingsTable.StandingsLists[0];
            const constructorStandings = [];
            filteredParsedData.ConstructorStandings.forEach(item => {
                const constructor = {
                    position: item.position,
                    name: item.Constructor.name,
                    nationality: item.Constructor.nationality,
                    points: item.points,
                    wins: item.wins
                }
                constructorStandings.push(constructor);
            });
            const requiredData = {
                season: filteredParsedData.season,
                round: filteredParsedData.round,
                standings: constructorStandings
            }
            sessionStorage.setItem('cStandings', JSON.stringify(requiredData));
            return requiredData;

        }

    }

    async render() {
        const loadingSpinner = new Spinner();
        loadingSpinner.create(this.display);
        const standingsData = await this.getData();
        this.display.innerHTML = '';
        const standingsElements = document.importNode(this.constructorStandingsElementsTemplate.content, true);
        standingsElements.querySelector('.cStandings-season').textContent = standingsData.season;
        standingsElements.querySelector('.cStandings-round').textContent = standingsData.round;
        const standingsList = standingsElements.querySelector('.cStandings-list');
        const constructorsHeader = document.importNode(this.constructorHeaderTemplate.content, true);
        standingsList.appendChild(constructorsHeader);
        standingsData.standings.forEach(constructor => {
            const constructorItem = document.importNode(this.constructorItemTemplate.content, true);
            constructorItem.querySelector('.constructor-item__pos').textContent = constructor.position;
            constructorItem.querySelector('.constructor-item__name').textContent = constructor.name;
            constructorItem.querySelector('.constructor-item__nationality').textContent = constructor.nationality;
            constructorItem.querySelector('.constructor-item__points').textContent = constructor.points;
            constructorItem.querySelector('.constructor-item__wins').textContent = constructor.wins;
            standingsList.appendChild(constructorItem);
        })
        this.display.appendChild(standingsElements);
    }
}